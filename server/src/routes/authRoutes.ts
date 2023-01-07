import { Router } from "express";
import {
  register,
  login,
  logout,
  successfulAuth,
  handleRefreshToken,
} from "@controllers/authController";
import validateRequest from "@middleware/validateRequest";
import config from "@config/config";
import schemas from "@validation/index";
import passport from "passport";

const { registerSchema, loginSchema } = schemas;

const router = Router();

router.route("/register").post(validateRequest(registerSchema), register);

router.route("/login").post(validateRequest(loginSchema), login);

router.route("/logout").post(logout);

router.route("/refresh").get(handleRefreshToken);

router.route("/google").get(
  passport.authenticate("google-auth", {
    scope: ["email", "profile"],
  })
);

router.route("/google/callback").get(
  passport.authenticate("google-auth", {
    failureRedirect: `${process.env.CLIENT_URL}/auth/google/failed`,
    successRedirect: `${process.env.CLIENT_URL}`,
    session: false,
  }),
  successfulAuth
);

router.route("/facebook").get(
  passport.authenticate("facebook-auth", {
    scope: ["email", "public_profile"],
  })
);

router.route("/facebook/callback").get(
  passport.authenticate("facebook-auth", {
    failureRedirect: `${config.client.url}/auth/facebook/failed`,
    successRedirect: `${config.client.url}`,
    session: false,
  }),
  successfulAuth
);

export default router;
