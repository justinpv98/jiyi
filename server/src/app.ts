import express from "express";
import cors from "cors";
import config from "@config/config";

import connectToDatabase from "./db/db";
import morgan from "morgan";
import errorHandler from "@middleware/errorHandler";

connectToDatabase();

const app = express();

// Initial middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(config.cors));

// Logging
app.use(morgan('dev'));

// Routing


// Error handling middleware
app.use(errorHandler);


export default app;