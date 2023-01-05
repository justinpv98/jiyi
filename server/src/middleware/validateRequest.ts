import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

// Function that validates the request body against a given schema
function validateRequest(schema: Schema) {
  return (req: Request & { value: any }, res: Response, next: NextFunction) => {
    // Validate the request body against the given schema

    const validation = schema.validate(req.body);


    // If the request body is invalid, send a 400 Bad Request response
    if (validation.error) {
      res.status(400);
      throw new Error(validation.error.details[0].message);
    } else {
      
      // If the request body is valid, attach the validated body to the request object
      if (!req.value) {
        req.value = {};
      }

      req.value["body"] = validation.value;
      next();
    }
  };
}

export default validateRequest;
