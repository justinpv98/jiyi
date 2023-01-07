import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "@models/UserModel";
import config from "@config/config";
import logger from "@logger/index";
import extractCookie from "@utils/extractCookie";

const options = {
  jwtFromRequest: extractCookie,
  secretOrKey: config.jwt.secret,
};


const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  // Find the user in the database using the ID from the JWT payload
  User.findOne({ _id: payload.id })
    .then((user) => {
      // If the user exists, return it to the calling function
      if (user) {
        return done(null, user);
      } else {
        // If the user does not exist, return false
        return done(null, false);
      }
    })
    .catch((error) => {
      // Log any errors and return them to the calling function
      logger.error(error);
      done(error, null);
    });
});

export default jwtStrategy;
