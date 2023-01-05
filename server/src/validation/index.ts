import Joi from "joi";
import emailSchema from "./schemas/emailSchema";
import passwordSchema from "./schemas/passwordSchema";

import { topics, languages, goals } from "@constants/constants";

export default {
  registerSchema: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
    topic: Joi.string()
      .valid(...topics)
      .required(),
    language: Joi.string().valid(...languages),
    goal: Joi.string()
      .valid(...goals)
      .required(),
  }),
  loginSchema: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
};
