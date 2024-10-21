import Joi from 'joi';

const blogjoi = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    auther_name: Joi.string().required(),
    category: Joi.string().required()
});

export default blogjoi;