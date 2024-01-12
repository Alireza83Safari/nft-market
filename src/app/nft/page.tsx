import getNfts from "@/actions/getNfts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NftTemplate from "@/components/Nft/NftTemplate";
import Pagination from "@/components/Pagination";
import { NftType } from "@/types/nft.type";

export const dynamic = "force-dynamic";

async function getNftsWithQuery(searchParams: any) {
  const q = searchParams.searchParams.q;
  const page = searchParams.searchParams.page;
  const limit = searchParams.searchParams.limit;

  let url = ``;

  switch (true) {
    case !!q:
      url += `q=${q}&`;
    case !!page:
      url += `page=${page}&`;
    case !!limit:
      url += `limit=${limit}&`;
  }
  const nfts = await getNfts(url ? `?${url}` : ``);
  return nfts;
}

export default async function page(searchParams: any) {
  const nfts = await getNftsWithQuery(searchParams);
  const limit = searchParams.searchParams.limit;
  const page = searchParams.searchParams.page;
  const totalPages = Math.ceil(nfts?.total / limit);

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

      <Pagination
        currentPage={page | 1}
        totalPages={totalPages}
        basePath={"nft"}
        limit={1}
      />

      <Footer />
    </>
  );
}
