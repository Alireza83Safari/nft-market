const Validator = require("fastest-validator");

const v = new Validator();

const registerSchema = {
  username: { type: "string" },
  firstname: { type: "string", min: 2, max: 20 },
  lastname: { type: "string", min: 2, max: 20 },
  password: { type: "string", min: 6, max: 20 },
};

const registerValidator = v.compile(registerSchema);

export default registerValidator;
