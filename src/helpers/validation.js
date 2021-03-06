import joi from "@hapi/joi";

export const registerValidation = (user) => {
    const schema = joi.object({
        username: joi.string().max(10).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        role: joi.string().required()
    });
    return schema.validate(user);
};

export const queriesValidation = (query) => {
    const schema = joi.object({
        Name: joi.string().required(),
        Message: joi.string().max(1000).required()
    });
    return schema.validate(query);
}

export const blogValidation = (blog) => {
    const schema = joi.object({
        title: joi.string().required(),
        descrption: joi.string().required(),
        image: joi.string()
    });
    return schema.validate(blog);
}
export const commentValidation = (comment) => {
    const schema = joi.object({
        name: joi.string().required(),
        comment: joi.string().max(700).required()
    });
    return schema.validate(comment);
}
export const subValidation = (sub) => {
    const schema = joi.object({
        email: joi.string().email().required()
    });
    return schema.validate(sub);
}

