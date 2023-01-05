import User, { IUser } from "@models/UserModel";
import googleStrategy from "./strategies/googleStrategy";
import facebookStrategy from "./strategies/facebookStrategy";
import jwtStrategy from "./strategies/jwtStrategy";
import logger from "@logger/index";

// This function configures Passport to use the given strategies for authentication
export default function (passport) {
  // Serialize the user object and store it in the session
  passport.serializeUser((user: IUser, done: any) => {
    done(null, user._id);
    logger.info("SERIALIZE", user);
  });

  // Deserialize the user object from the session and retrieve it from the database
  passport.deserializeUser((id: string, done: any) => {
    User.findById(id, (error: NativeError, user: IUser) => {
      if (error) {
        logger.error("Error:", error);
        return done(error);
      }
      done(error, user);
    });
  });

  // Strategies
  passport.use("google-auth", googleStrategy);
  passport.use("facebook-auth", facebookStrategy);
  passport.use("jwt", jwtStrategy);
}
