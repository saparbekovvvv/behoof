import React from "react";
import Hero from "../../components/hero/Hero";
import BestChoice from "../../components/hero/bestChoice/BestChoice";
import CardHero from "../../components/hero/cardHero/cardHero";
import FuturePlans from "../../components/hero/futurePlans/futurePlans";
import Canvas from "../../components/hero/canvas/Canvas";
import NewArrivals from "../../components/hero/newArrivals/NewArrivals";

const Main: React.FC = () => {
  return (
    <>
      <Hero />
      <BestChoice />
      <CardHero />
      <FuturePlans />
      <Canvas />
      <NewArrivals />
    </>
  );
};
export default Main;
