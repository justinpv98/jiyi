import express from "express";
import cors from "cors";
import config from "@config/config";
import passport from "passport";

import connectToDatabase from "./db/db";
import setupPassport from "@config/passport";
import morgan from "morgan";
import errorHandler from "@middleware/errorHandler";

import authRoutes from "@routes/authRoutes";

connectToDatabase();

const app = express();

// Initial middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Logging
app.use(morgan('dev'));


// Initialize passport
setupPassport(passport);
app.use(passport.initialize());

// Routing
app.use("/api/auth", authRoutes)


// Error handling middleware
app.use(errorHandler);


export default app;