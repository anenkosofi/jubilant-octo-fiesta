const { BadRequest } = require('http-errors');

const isValidBody = schema => {
  return (req, _, next) => {
    const body = req.body;

    const { error, value } = schema.validate(body, { abortEarly: false });

    if (error) {
      const missingFields = error.details
        .filter(detail => detail.type === 'any.required')
        .map(detail => detail.context.label)
        .join(', ');

      next(new BadRequest(`Missing fields: ${missingFields}`));
    } else {
      req.body = value;
      next();
    }
  };
};

module.exports = isValidBody;
