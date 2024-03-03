const Validator = require("fastest-validator");

const v = new Validator();

const loginSchema = {
  username: { type: "string", max: 50 },
  password: { type: "string", min: 6, max: 30 },
};

const loginValidator = v.compile(loginSchema);

export default loginValidator;
