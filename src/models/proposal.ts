import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    nft: {
      type: mongoose.Types.ObjectId,
      ref: "Nft",
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Proposal =
  mongoose.models.Proposal || mongoose.model("Proposal", proposalSchema);

export default Proposal;
