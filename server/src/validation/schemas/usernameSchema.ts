import Joi from "joi";

const usernameSchema = Joi.string()
  .regex(/(^[a-zA-Z0-9_]+$)/)
  .min(2)
  .max(30)
  .required()
  .messages({
    "string.base": `Email should be of the type 'string'`,
    "string.empty": `Email cannot be an empty field`,
    "string.min": `Email should have a minimum length of {#limit}`,
    "any.required": `Email is a required field.`,
  });

export default usernameSchema;
