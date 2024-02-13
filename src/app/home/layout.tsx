import { Footer, Header } from "@/components";

export default async function Layout(props: {
  banner: React.ReactNode;
  suggestion: React.ReactNode;
  saleGuide: React.ReactNode;
  expensiveSlider: React.ReactNode;
  newestSlider: React.ReactNode;
  cheapSlider: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {props.banner}
      {props.suggestion}
      {props.saleGuide}
      {props.expensiveSlider}
      {props.newestSlider}
      {props.cheapSlider}
      <Footer />
    </>
  );
}
