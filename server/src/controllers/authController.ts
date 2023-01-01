import { Response } from "express";
import { Request } from "src/types/express";
import asyncHandler from "express-async-handler";
import config from "@config/config";
import User from "@models/UserModel";

const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

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

    const newUser = await User.create({ email, password });

    if (newUser) {
      // issue a JWT for the newly created user
      const jwt = await newUser.issueJwt();
      res.status(201).json({
        id: newUser._id,
        email: newUser.email,
        token: jwt,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data.");
    }
  }
});

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Find the user with the provided email

  const existingUser = await User.findOne({email});

  if (!existingUser) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  // Compare the provided password with the user's hashed password
  const isValidPassword = await existingUser.comparePassword(password);

  if (isValidPassword) {
    // If the provided password is correct, issue a JWT for the user and send
    const jwt: string = await existingUser.issueJwt();

    res.status(200).json({
      id: existingUser._id,
      email: existingUser.email,
      token: jwt,
    });
  } else {
    // If the provided password is incorrect, throw an error
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const successfulAuth = asyncHandler(async (req: Request, res: Response) => {
  // Issue a JWT for the authenticated user, set as a cookie, and redirect.
  const token = req.user.issueJwt();
  res.cookie("x-auth", token);
  res.redirect(config.client.url);
});

export { register, login, successfulAuth };
