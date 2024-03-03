import mongoose from "mongoose";

const nftSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    description: { type: String, required: true },
    image: { type: String },
    isSell: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

nftSchema.virtual("proposals", {
  ref: "Proposal",
  localField: "_id",
  foreignField: "nft",
});

const Nft = mongoose.models?.Nft || mongoose.model("Nft", nftSchema);

export default Nft;
