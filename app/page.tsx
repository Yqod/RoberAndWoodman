import Image from "next/image";
import Hero from "./components/HeroSection";
import ProductsSection from "./components/products";
import AboutProducts from "./components/AboutProducts";
import AboutMe from "./components/AboutMe";
import CTASection from "./components/CTA";

export default function Home() {
  return (
    <>
    <Hero />
    <ProductsSection />
    <AboutProducts />
    <AboutMe />
    <CTASection />
    </>
  );
}
