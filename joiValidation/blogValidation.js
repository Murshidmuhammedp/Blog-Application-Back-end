import Joi from 'joi';

const blogjoi = Joi.object({
    BlogTitle: Joi.string().required(),
    Date: Joi.string().required(),
    Category: Joi.string().required(),
    AuthorName: Joi.string().required(),
    ParagraphTitle: Joi.string().required(),
    Description: Joi.string().required()
});

export default blogjoi;