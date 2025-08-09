import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import MissionValuesSection from "@/components/sections/mission-values";
import StorySection from "@/components/sections/story";
import ServicesSection from "@/components/sections/services";
import ProductsSection from "@/components/sections/products";
import ClientsSection from "@/components/sections/clients";
import NewsletterSection from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionValuesSection />
        <StorySection />
        <ServicesSection />
        <ProductsSection />
        <ClientsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
