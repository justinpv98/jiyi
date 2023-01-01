import * as dotenv from "dotenv";
import GoogleStrategy from "passport-google-oauth2";
import User from "@models/UserModel";


dotenv.config()


console.log(process.env.CLIENT_ID)


const options = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `/api/auth/google/callback`,
};

const googleStrategy = new GoogleStrategy.Strategy(
  options,
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Search for a user with the given provider ID.
      const user = await User.findOne({ provider_id: profile.id });

      if (user) {
        // If the user exists, return it using the "done" callback.
        return done(null, user);
      } else {
        // Generate a random string and number for the new user.
        const randomString = Math.random().toString(36).substring(2);
        const randomNumber = Math.floor(Math.random() * 100);

        // Create a new user using the given profile information.
        const newUser = new User({
          username: `${profile.given_name}_${profile.family_name}${randomNumber}`,
          email: profile.email,
          password: randomString,
          profilePicture: profile.picture,
          provider: "google",
          providerId: profile.id,
          providerAccessToken: accessToken,
          providerRefreshToken: refreshToken,
        });

        // Save the new user to the database.
        await newUser.save();
        console.log("SUCCESSFULLY CREATED:", newUser);

        // Return the new user using the "done" callback.
        return done(null, newUser);
      }
    } catch (error) {
      // If an error occurs, log it and return it using the "done" callback.
      console.log(error);
      return done(error);
    }
  }
);

export default googleStrategy;
