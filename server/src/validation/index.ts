import Joi from "joi";
import emailSchema from "./schemas/emailSchema";
import passwordSchema from "./schemas/passwordSchema";

export default {
  registerSchema: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
  loginSchema: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
};
