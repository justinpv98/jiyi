import { NextFunction } from "express";

function isAuthenticated(req: any, res: any, next: NextFunction) {
  // if user is authenticated, then go to the next middleware
  if (req.isAuthenticated()) {
    return next();
  } else {
    // else throw authentication error
    res.status(401);
    throw new Error("User is not authenticated.");
  }
}

export default isAuthenticated;
