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
        
        {/* Mission Statement */}
        <section className="py-16 bg-neutral">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8" data-testid="text-mission-title">
              Our Mission
            </h2>
            <p className="text-lg text-secondary leading-relaxed" data-testid="text-mission-statement">
              With three decades of industry presence, we've forged strong bonds with suppliers and customers, enabling us to expand into new markets and earn trust globally.
            </p>
          </div>
        </section>

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
