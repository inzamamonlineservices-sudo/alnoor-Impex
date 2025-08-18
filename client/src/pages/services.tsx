import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Search, Compass, TrendingUp, CheckSquare, CheckCircle, Truck, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Vendor Sourcing",
      description: "We connect you with verified, reliable textile suppliers in Pakistan, ensuring quality and cost efficiency.",
      details: [
        "Comprehensive supplier verification and assessment",
        "Cost-effective sourcing solutions",
        "Quality assurance at every step",
        "Long-term partnership building",
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Compass,
      title: "Product Design",
      description: "Market-ready textile concepts aligned with your brand and sustainability goals.",
      details: [
        "Custom design development",
        "Sustainable material selection",
        "Brand alignment consultation",
        "Prototype development",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: TrendingUp,
      title: "Market Research",
      description: "Detailed analysis of industry trends to guide your sourcing and production decisions.",
      details: [
        "Industry trend analysis",
        "Market demand forecasting",
        "Competitive analysis",
        "Pricing strategy guidance",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: CheckSquare,
      title: "Production Follow-Up",
      description: "End-to-end monitoring using ERP systems to ensure on-time, quality delivery.",
      details: [
        "Real-time production tracking",
        "ERP system integration",
        "Timeline management",
        "Quality checkpoints",
      ],
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "From yarn to final packing, our team ensures your order meets global standards.",
      details: [
        "Multi-stage quality inspections",
        "International standard compliance",
        "Detailed quality reports",
        "Corrective action management",
      ],
      image: "https://images.unsplash.com/photo-1591029904770-c8a21ff7fe62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Truck,
      title: "Shipping & Support",
      description: "Complete export documentation handling and after-sales assistance.",
      details: [
        "Export documentation management",
        "Shipping coordination",
        "Customs clearance support",
        "After-sales service",
      ],
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];



  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-6" 
              data-testid="text-services-hero-title"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Our Services
            </h1>
            <p 
              className="text-xl leading-relaxed" 
              data-testid="text-services-hero-subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Comprehensive textile brokerage solutions designed to streamline your global sourcing and trade operations
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={service.title}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isEven ? "" : "lg:grid-flow-col-dense"
                    }`}
                    data-testid={`section-service-${index}`}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-duration="800"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center mb-4">
                        <div className="text-accent text-3xl mr-4">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary" data-testid={`text-service-title-${index}`}>
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-secondary mb-6" data-testid={`text-service-description-${index}`}>
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                            <span className="text-secondary" data-testid={`text-service-detail-${index}-${detailIndex}`}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-xl shadow-xl w-full"
                        data-testid={`img-service-${index}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold mb-6" 
              data-testid="text-cta-title"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Ready to Get Started?
            </h2>
            <p 
              className="text-xl mb-8" 
              data-testid="text-cta-description"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Let us help you connect with the right textile suppliers and streamline your sourcing process.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <a
                href="/contact"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 inline-block"
                data-testid="button-cta-contact"
              >
                Contact Us Today
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 inline-block"
                data-testid="button-cta-products"
              >
                View Our Products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
