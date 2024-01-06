import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "./components/Banner";
import Suggestion from "./components/Suggestion";
import SaleGuide from "./components/SaleGuide/SaleGuide";

export default async function page() {
  return (
    <div className="xl:container mx-auto">
      <Header />
      <main className="sm:px-5 px-1 min-h-screen xl:container mx-auto">
        <Banner />
        <Suggestion />
        <SaleGuide />
      </main>
      <Footer />
    </div>
  );
}
