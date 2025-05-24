import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/Herosection";
import PrimaryHeadline from "../../components/PrimarySubheadline";
import WhatIUseSection from "../../components/Techlist";
import IdealClientSection from "../../components/IdealClient";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PrimaryHeadline />
      <WhatIUseSection />
      <IdealClientSection />
    </>
  );
}
