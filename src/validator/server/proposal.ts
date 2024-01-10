const Validator = require("fastest-validator");

const v = new Validator();

const proposalSchema = {
  price: { type: "number", min: 1, max: 10000000000 },
  nft: { type: "string" },
  userId: { type: "string" },
};

const proposalValidator = v.compile(proposalSchema);

export default proposalValidator;
