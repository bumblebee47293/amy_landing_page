import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { LatestBlog } from "@/components/sections/LatestBlog";
import { FreeResources } from "@/components/sections/FreeResources";
import { AboutAmy } from "@/components/sections/AboutAmy";
import { Newsletter } from "@/components/sections/Newsletter";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <LatestBlog />
        <FreeResources />
        <AboutAmy />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
