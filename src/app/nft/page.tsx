import getNfts from "@/actions/getNfts";
import { Header, Footer, NftTemplate, Pagination } from "@/components";
import Nft from "@/models/nft";
import { NftType } from "@/types/nft.type";

export const dynamic = "force-dynamic";

async function getNftsWithQuery(searchParams: any) {
  const q = searchParams.searchParams.q;

  let countQuery: any = {};

  if (q) countQuery.q = q;

  let url = ``;
 // const totalCount = await Nft.countDocuments(countQuery);
 // console.log(totalCount);

  switch (true) {
    case !!q:
    //    url += `q=${q}&`;
    //case !!page:
    ////   url += `page=${page}&`;
    //// case !!limit:
    ///url += `limit=${limit}&`;
  }
  const nfts = await getNfts(url ? `?${url}` : ``);
  console.log(nfts);

  return nfts;
}

export default async function page(searchParams: any) {
  const nfts = await getNftsWithQuery(searchParams);
 // const limit = searchParams.searchParams.limit;

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-12">
        {nfts?.data?.length ? (
          nfts?.data?.map((nft: NftType) => <NftTemplate {...nft} />)
        ) : (
          <div className="text-3xl text-center text-white font-bold">
            ان فی تی یافت نشد !
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
