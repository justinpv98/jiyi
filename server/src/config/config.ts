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
  },
  production: {
    server: {
      port: process.env.PORT,
    },
    cors: corsOptions,
  },
};

export default config[env];