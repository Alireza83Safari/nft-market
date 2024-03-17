import React, { ReactElement } from "react";
import getNfts from "@/actions/getNfts";
import { NftTemplate } from "@/components";
import { NftType } from "@/types/nft.type";

export const revalidate = 60 * 60;

function shuffleArray<T>(array: T[]): any {
  if (array?.length) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

export default async function Page(): Promise<ReactElement> {
  const nfts = await getNfts();
  const shuffledNfts: NftType[] = shuffleArray(nfts?.data);
  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-10">پیشنهاد ها</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 xxs:grid-cols-2">
        {shuffledNfts?.slice(0, 8).map((nft: NftType) => (
          <NftTemplate key={nft?._id} {...nft} />
        ))}
      </div>
    </div>
  );
}
