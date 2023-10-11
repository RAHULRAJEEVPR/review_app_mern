const { body, validationResult } = require("express-validator");
const mongoSanitize = require("express-mongo-sanitize");

const reviewValidation = [
  body("usage").isString().notEmpty(),
  body("goals").isArray().notEmpty(),
  body("rating").isNumeric().notEmpty(),
  body("suggestion").optional().isString(),
  body("birthday").isISO8601().toDate(),
];

const validate = (req, res, next) => {
  mongoSanitize.sanitize(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(errors);
  next();
};

module.exports = { reviewValidation, validate };
