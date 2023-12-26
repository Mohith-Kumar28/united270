import Image from "next/image";
import { Inter } from "next/font/google";
import CanvasAnimation from "../components/CanvasAnimation";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Brands from "@/components/brands/Brands";
import Team from "@/components/team/Team";
import HorizontalScroll from "@/components/brands/HorizontalScroll";
import Layout from "@/components/layout/Layout";

import ModelsHero from "@/components/models/ModelsHero";
import WearableHorizontalScroll from "@/components/wearables/WearableHorizontalScroll";
import HyperRealisticHero from "@/components/hyperRealistic/HyperRealisticHero";
import LastSection from "@/components/lastSection/LastSection";
import AfterHero from "@/components/hero/AfterHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative bg-pri-pink min-h-screen">
      <Layout>
        {/* <NavBar /> */}
        <CanvasAnimation />

        <Hero />
        <AfterHero />
        <About />
        <Brands />
        <HorizontalScroll />
        <Team />
        <WearableHorizontalScroll />
        <HyperRealisticHero />
        <LastSection />
        <ModelsHero />
      </Layout>
    </div>
  );
}
