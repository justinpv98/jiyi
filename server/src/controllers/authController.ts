import { Response } from "express";
import { Request } from "src/types/express";
import asyncHandler from "express-async-handler";
import config from "@config/config";
import jwt from "jsonwebtoken";
import User from "@models/UserModel";

const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password, topic, goal } = req.body;
  const language = topic === "languages" && req.body?.language;

  // Check if a user with the given email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // If a user with the given email already exists, send a Bad Request (400) status code
    // and throw an error
    res.status(409);
    throw new Error("User already exists.");
  } else {
    // If a user with the given email does not already exist,
    // create a new user with the provided email and password

    const newUser = await User.create({
      email,
      password,
      topics: [topic],
      goal,
      languages: language ? [language] : [],
    });

    if (newUser) {
      // issue a JWT for the newly created user and send it via cookies
      const token = await newUser.issueJwt();
      res.cookie("accessToken", token.accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
      });
      res.cookie("refreshToken", token.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json({
        id: newUser._id,
        goal: newUser.goal,
        topics: newUser.topics,
        languages: newUser.languages,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data.");
    }
  }
});

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { cookies } = req;

  // Find the user with the provided email

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  // Compare the provided password with the user's hashed password
  const isValidPassword = await existingUser.comparePassword(password);

  if (isValidPassword) {
    // If the provided password is correct, issue JWTs for the user
    const token = await existingUser.issueJwt();

    // If the request does not contain a refresh token cookie, set the user's refresh token array as is
    let newRefreshTokenArray = !cookies.refreshToken
      ? existingUser.refreshToken
      : existingUser.refreshToken.filter(
          (token) => token !== cookies.refreshToken
        );

    // Refresh token reuse detected
    if (cookies?.refreshToken) {
      const { refreshToken } = cookies;
      const foundToken = await User.findOne({ refreshToken }).exec();

      if (!foundToken) {
        // Clear out all previous refresh tokens
        newRefreshTokenArray = [];
      }

      res.clearCookie("refreshToken", { httpOnly: true, secure: true});
    }

    // Update the user's list of refresh tokens
    existingUser.refreshToken = [...newRefreshTokenArray, token.refreshToken];
    const result = await existingUser.save();

    res.cookie("accessToken", token.accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", token.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      id: existingUser._id,
      goal: existingUser.goal,
      topics: existingUser.topics,
      languages: existingUser.languages,
    });
  } else {
    // If the provided password is incorrect, throw an error
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const successfulAuth = asyncHandler(async (req: Request, res: Response) => {
  // Issue a JWT for the authenticated user, set as a cookie, and redirect.
  const token = await req.user.issueJwt();
  res.cookie("accessToken", token.accessToken, { httpOnly: true, secure: true});
  res.cookie("refreshToken", token.refreshToken, { httpOnly: true, secure: true});
  res.redirect(config.client.url);
});

const logout = asyncHandler(async (req: Request, res: Response) => {
  const cookies = req.cookies;

  if (!cookies.refreshToken) {
    res.status(204);
  }

  const { refreshToken } = cookies;

  const user = await User.findOne({ refreshToken }).exec();

  if (!user) {
    res.clearCookie("refreshToken", { httpOnly: true, secure: true});
    res.status(204);
  }

  user.refreshToken = user.refreshToken.filter(
    (token) => token !== refreshToken
  );

  const result = await user.save();

  res.clearCookie("refreshToken", { httpOnly: true });
  res.status(204);
});

const handleRefreshToken = asyncHandler(async (req: Request, res: Response) => {
  const cookies = req.cookies;

  // If the request does not contain a refresh token cookie, return a 401 Unauthorized response
  if (!cookies?.refreshToken) {
    res.status(401);
    throw new Error("Unauthorized request.");
  }

  const refreshToken = cookies.refreshToken;
  // Clear the refresh token cookie after storing it in a variable
  res.clearCookie("refreshToken", { httpOnly: true, secure: true});

  // Find the user with the given refresh token

  const user = await User.findOne({ refreshToken }).exec();

  // If the user is not found, it is possible that the token has been reused

  if (!user) {
    // Verify the token to see if it has been hacked

    jwt.verify(
      refreshToken,
      config.jwt.refreshTokenSecret,
      async (error, decoded) => {
        if (error) {
          // If the token is invalid, return a 403 Forbidden response
          res.status(403);
          throw new Error("Forbidden token reuse attempt.");
        }

        // Find the user by the id in the token
        const hackedUser = await User.findById(decoded._id).exec();
        // Remove all refresh tokens from the user
        hackedUser.refreshToken = [];
        const result = await hackedUser.save();
      }
    );
  }

  // Remove the current refresh token from the user's list of refresh tokens
  const newRefreshTokenArray = user.refreshToken.filter(
    (token) => token !== refreshToken
  );

  // Verify the token to ensure that it is valid and belongs to the user
  jwt.verify(
    refreshToken,
    config.jwt.refreshTokenSecret,
    async (error, decoded) => {
      if (error) {
        // If the token is invalid, update the user's list of refresh tokens and save the updated user
        user.refreshToken = [...newRefreshTokenArray];
        const result = await user.save();
      }

      // If the id in the token does not match the user's id, return a 403 Forbidden response
      if (user._id !== decoded._id) {
        res.status(403);
        throw new Error();
      }

      const accessToken = jwt.sign(
        {
          _id: decoded._id,
        },
        config.jwt.accessTokenSecret,
        { expiresIn: "10s" }
      );

      const newRefreshToken = jwt.sign(
        {
          _id: decoded._id,
        },
        config.jwt.refreshTokenSecret,
        { expiresIn: "30d" }
      );

      // Update the user's list of refresh tokens and save the updated user
      user.refreshToken = [...newRefreshToken];
      const result = await user.save();

      res.cookie("accessToken", accessToken, { httpOnly: true, secure: true});
      res.cookie("refreshToken", newRefreshToken, { httpOnly: true, secure: true});

      res.sendStatus(200);
    }
  );
});

export { register, login, logout, successfulAuth, handleRefreshToken };
