import React from "react";
import NftSlider from "../components/NftSlider";
import getNfts from "@/actions/getNfts";

export default async function page() {
  const nfts = await getNfts();
  return <NftSlider title="پیشنهاد ها" nfts={nfts} />;
}
