import Image from "next/image";
import { Inter } from "next/font/google";
import CanvasAnimation from "../components/CanvasAnimation";
import NavBar from "@/components/NavBar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Brands from "@/components/brands/Brands";
import Team from "@/components/team/Team";
import HorizontalScroll from "@/components/brands/HorizontalScroll";
import Layout from "@/components/layout/Layout";
import WearableAccordion from "@/components/wearables/WearableAccordion";
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
        {/* <div className=" w-full h-screen  z-10 fixed -bottom-0 left-0 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          className="w-full"
          src={"/3dPerson/cam.0000.png"}
        />
      </div> */}
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
