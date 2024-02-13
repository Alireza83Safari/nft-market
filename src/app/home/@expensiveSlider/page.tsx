import React from "react";
import NftSlider from "../components/NftSlider";
import getNfts from "@/actions/getNfts";

export default async function page() {
  const nftsExpensive = await getNfts(`?expensive=true`);
  return <NftSlider title="گران ترین ان اف تی ها" nfts={nftsExpensive} />;
}
