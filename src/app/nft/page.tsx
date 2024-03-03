import getNfts from "@/actions/getNfts";
import { Header, Footer, NftTemplate } from "@/components";
import { NftType } from "@/types/nft.type";
import FilterNft from "./components/FilterNft";

export const dynamic = "force-dynamic";

export default async function page({ searchParams }: any) {
  const { order, q } = searchParams;
  let APIURL = `?`;
  if (order) APIURL += `order=${order}&`;
  if (q) APIURL += `q=${q}&`;

  const nfts = await getNfts(APIURL.length > 2 ? APIURL : "");

  return (
    <>
      <Header />

      <div className="mt-5 mx-auto max-w-[1080px] mb-16">
        {!!nfts?.length ? (
          <>
            <FilterNft />
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1">
              {nfts?.map((nft: NftType) => (
                <NftTemplate {...nft} />
              ))}
            </div>
          </>
        ) : (
          <h1 className="sm:text-4xl text-3xl text-center text-green my-52">
            محصولی یافت نشد
          </h1>
        )}
      </div>

      <Footer />
    </>
  );
}
