import { Footer, Header } from "@/components";

export default async function Layout(props: {
  banner: React.ReactNode;
  suggestion: React.ReactNode;
  saleGuide: React.ReactNode;
  expensiveSlider: React.ReactNode;
  newestSlider: React.ReactNode;
  cheapSlider: React.ReactNode;
  bestSelling: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className=" max-w-[1080px] m-auto">
        {props.banner}
        {props.suggestion}
        {props.saleGuide}
        {props.expensiveSlider}
        {props.newestSlider}
        {props.cheapSlider}
        {props.bestSelling}
      </div>
      <Footer />
    </>
  );
}
