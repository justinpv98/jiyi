import * as dotenv from "dotenv";
import corsOptions from "./cors/corsOptions";
const env = process.env.NODE_ENV || "development";

dotenv.config();

const config = {
  development: {
    client: {
      URL: "localhost:3000",
    },
    server: {
      port: 5000,
    },
    cors: corsOptions,
    crypto: {
      saltRounds: process.env.SALT_ROUNDS
    },
    mongoDB: {
      uri: process.env.MONGO_URI,
    },
    jwt: {
      refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET_DEV,
      accessTokenSecret: process.env.ACCESS_TOKEN_SECRET_DEV
    },
  },
  production: {
    client: {
      URL: process.env.CLIENT_URL,
    },
    server: {
      port: process.env.PORT,
    },
    cors: corsOptions,
    crypto: {
      saltRounds: process.env.SALT_ROUNDS
    },
    mongoDB: {
      uri: process.env.MONGO_URI,
    },
    jwt: {
      secret: process.env.JWT_SECRET_PROD,
    },
  },
};

export default config[env];
