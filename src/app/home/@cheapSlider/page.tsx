import React from "react";
import NftSlider from "../components/NftSlider";
import getNfts from "@/actions/getNfts";

export default async function page() {
  const nftsPoor = await getNfts(`?expensive=false`);
  return <NftSlider title="ارزان ترین ان اف تی ها" nfts={nftsPoor} />;
}
