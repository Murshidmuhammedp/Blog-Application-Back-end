import Joi from "joi";

const userjoi = Joi.object({
    FullName: Joi.string().required(),
    email: Joi.string().email().required(),
    Designation: Joi.string().required(),
    Password: Joi.string().min(6).required()
});

export default userjoi;