import * as dotenv from "dotenv";
import corsOptions from "./cors/corsOptions";
const env = process.env.NODE_ENV || "development";

dotenv.config();

const config = {
  development: {
    server: {
      port: 5000,
    },
    cors: corsOptions,
    mongoDB: {
      uri: process.env.MONGO_URI,
    },
  },
  production: {
    server: {
      port: process.env.PORT,
    },
    cors: corsOptions,
    mongoDB: {
      uri: process.env.MONGO_URI,
    },
  },
};

export default config[env];