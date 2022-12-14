import express from "express";
import cors from "cors";
import config from "@config/config";

import connectToDatabase from "./db/db";

connectToDatabase();

const app = express();

// Initial middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(config.cors));

// Logging


// Routing


// Error handling middleware


export default app;