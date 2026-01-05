import Image from "next/image";
import Hero from "./components/HeroSection";
import ProductsSection from "./components/products";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
    <Hero />
    <ProductsSection />
    <AboutMe />
    </>
  );
}
