const Joi = require("joi");

const registerSchema = Joi.object({
	firstName: Joi.string().min(1).max(30).required(),
	lastName: Joi.string().min(1).max(30).required(),
	birthDate: Joi.date().iso().required(),
	gender: Joi.string().valid("MALE", "FEMALE").required(),
	username: Joi.string().alphanum().min(3).max(20).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
}).required();

const loginSchema = Joi.object({
	login: Joi.alternatives()
		.try(
			Joi.string().email({
				minDomainSegments: 2,
				tlds: {
					allow: ["com", "net", "in", "co"],
				},
			}),
			Joi.string().alphanum().min(3).max(30)
		)
		.required()
		.messages({
			"any.required": "Email or username is required",
			"alternatives.match": "Invalid email or username format",
		}),
	password: Joi.string().required().messages({
		"any.required": "Password is required",
	}),
});
const postSchema = Joi.object({
	title: Joi.string().required(),
	body: Joi.string().required(),
	imageUrl: Joi.string().uri().optional().allow(null, ""),
	type: Joi.string().valid("POST", "ARTICLE").required(),
});

const postUpdateSchema = Joi.object({
	title: Joi.string().optional(),
	body: Joi.string().optional(),
	imageUrl: Joi.string().uri().optional().allow(null, ""),
	type: Joi.string().valid("POST", "ARTICLE").optional(),
});


module.exports = { registerSchema, loginSchema, postSchema, postUpdateSchema };
