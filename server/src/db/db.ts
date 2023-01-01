const mongoose = require("mongoose");
import config from "@config/config";
import logger from "@logger/index";

const mongoURI = config.mongoDB.uri;

async function connectToDatabase() {
  // Connect to MongoDB. If successful, log connection.
  try {
    const connect = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export default connectToDatabase;