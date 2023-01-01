import FacebookStrategy from "passport-facebook";
import User from "@models/UserModel";
import logger from "@logger/index";

const options = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: `http://localhost:5000/api/auth/facebook/callback`,
  profileFields: [
    "id",
    "profileUrl",
    "email",
    "displayName",
    "name",
    "picture.type(large)",
  ],
};

const facebookStrategy = new FacebookStrategy.Strategy(
  options,
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Convert retrieved profile to json
      const facebookProfile = profile._json;

      // Check if the user already exists in the database
      const user = await User.findOne({ providerId: facebookProfile.id });

      // If the user exists, return it to the calling function
      if (user) {
        return done(null, user);
      } else {
        // If the user does not exist, create a new user using the Facebook profile information
        const randomString = Math.random().toString(36).substring(2);
        const newUser = new User({
          username: facebookProfile.email.split("@")[0],
          email: facebookProfile.email,
          password: randomString,
          providerId: facebookProfile.id,
          provider: "facebook",
          providerAccessToken: accessToken,
          providerRefreshToken: refreshToken,
        });

        // Save the new user to the database and return it to the calling function
        await newUser.save((error) => {
          if (error) {
            done(null, false, error);
          } else {
            done(null, newUser);
          }
        });
      }
    } catch (error) {
      logger.error(error);
      return done(error);
    }
  }
);

export default facebookStrategy;
