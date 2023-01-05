import Joi from "joi";

const passwordSchema = Joi.string().min(6).max(55).required().messages({
  "string.base": `Password should of the type 'text'`,
  "string.empty": `Password cannot be an empty field`,
  "string.min": `Password should have a minimum length of {#limit}`,
  "string.max": `Password should have a maximum length of {#limit}`,
  "any.required": `Password is a required field`,
});

export default passwordSchema;