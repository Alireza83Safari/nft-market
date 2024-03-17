import getNfts from "@/actions/getNfts";
import React from "react";
import { NftTemplate } from "@/components";
import { NftType } from "@/types/nft.type";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  const nfts = await getNfts();
  const myNfts = nfts?.data?.filter(
    (nft: NftType) => nft?.user === (session as any)?.id
  );

  return (
    <>
      {(session as any)?.id ? (
        <section className="bg-banner-profile no-re min-h-screen bg-no-repeat">
          <div className="flex justify-center">
            <div>
              <div className="mt-40 border-[16px] border-black">
                <Image
                  src="/image/banner-06.WEBP"
                  width={300}
                  height={300}
                  alt=""
                  className="w-[300px] h-[300px]"
                />
              </div>
              <p className="text-white text-center mt-2 text-3xl font-bold">
                {(session as any)?.username}
              </p>
              <p className="text-white text-center mt-2 text-xl font-bold">
                id: {(session as any)?.id}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-4xl text-white mb-8 mt-20 font-bold">
              ان اف تی های شما
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 xxs:grid-cols-2">
              {!!myNfts?.length &&
                myNfts?.map((nft: NftType) => (
                  <>
                    <NftTemplate key={nft?._id} {...nft} />
                  </>
                ))}
            </div>
          </div>
        </section>
      ) : (
        redirect("/home")
      )}
    </>
  );
}
