import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "./components/Banner";
import SaleGuide from "./components/SaleGuide/SaleGuide";
import getNfts from "@/actions/getNfts";
import NftSlider from "./components/NftSlider";

export default async function page() {
  const nfts = await getNfts();
  const newNft = await getNfts(`?new=true`);
  const nftsExpensive = await getNfts(`?expensive=true`);
  const nftsPoor = await getNfts(`?expensive=false`);
  return (
    <>
      <Header />
      <main className="sm:px-5 px-1 min-h-screen xl:container mx-auto">
        <Banner />
        <NftSlider title="پیشنهاد ها" nfts={nfts} />
        <SaleGuide />
        <NftSlider title="گران ترین ان اف تی ها" nfts={nftsExpensive} />
        <NftSlider title=" جدیدترین موارد" nfts={newNft} />
        <NftSlider title="ارزان ترین ان اف تی ها" nfts={nftsPoor} />
      </main>
      <Footer />
    </>
  );
}
