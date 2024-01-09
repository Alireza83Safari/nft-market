import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "./components/Banner";
import Suggestion from "./components/Suggestion";
import SaleGuide from "./components/SaleGuide/SaleGuide";
import Newest from "./components/Newest";
import Topsell from "./components/TopSell";

export default async function page() {
  return (
    <>
      <Header />
      <main className="sm:px-5 px-1 min-h-screen xl:container mx-auto">
        <Banner />
        <Suggestion />
        <SaleGuide />
        <Newest />
        <Topsell />
      </main>
      <Footer />
    </>
  );
}
