import Joi from "joi";

const emailSchema = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: true } })
  .required()
  .messages({
    "string.base": `Email should be of the type 'string'`,
    "string.empty": `Email cannot be an empty field`,
    "string.min": `Email should have a minimum length of {#limit}`,
    "any.required": `Email is a required field.`,
  });

export default emailSchema;