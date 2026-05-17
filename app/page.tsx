import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { AboutAmy } from "@/components/sections/AboutAmy";
import { LatestBlog } from "@/components/sections/LatestBlog";
import { FreeResources } from "@/components/sections/FreeResources";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutAmy />
        <LatestBlog />
        <FreeResources />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
