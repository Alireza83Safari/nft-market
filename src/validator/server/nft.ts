import Validator from "fastest-validator";

const v = new Validator();

const nftSchema = {
  title: { type: "string", required: true },
  price: { type: "number", required: true },
  author: { type: "string", required: true },
  image: { type: "string" },
};

const nftValidator = v.compile(nftSchema);

export default nftValidator;
