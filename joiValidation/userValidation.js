import Joi from "joi";

const userJoi = Joi.object({
    full_name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    designation: Joi.string().required(),
    password: Joi.string().min(3).required()
});

export default userJoi;