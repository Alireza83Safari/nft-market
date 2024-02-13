import React from "react";
import NftSlider from "../components/NftSlider";
import getNfts from "@/actions/getNfts";

export default async function page() {
  const newNft = await getNfts(`?new=true`);
  return <NftSlider title=" جدیدترین موارد" nfts={newNft} />;
}
