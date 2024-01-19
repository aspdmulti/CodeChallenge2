import HeroCompo from "./components/heroCompo";
import OverviewCompo from "./components/overviewCompo";
import HighlightedProductsCompo from "./components/productsHighlightCompo";
import TestimonyCompo from "./components/testimonyCompo";

export default function Home() {
  return (
    <>
      <HeroCompo />
      <OverviewCompo />
      <HighlightedProductsCompo />
      <TestimonyCompo />
    </>
  );
}
