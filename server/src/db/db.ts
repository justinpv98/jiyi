const mongoose = require("mongoose");
import config from "@config/config";

const mongoURI = config.mongoDB.uri;

async function connectToDatabase() {
  // Connect to MongoDB. If successful, log connection.
  try {
    const connect = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectToDatabase;