import { Search, Compass, TrendingUp, CheckSquare, CheckCircle, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Vendor Sourcing",
      description: "We connect you with verified, reliable textile suppliers in Pakistan, ensuring quality and cost efficiency.",
      color: "text-accent",
    },
    {
      icon: Compass,
      title: "Product Design",
      description: "Market-ready textile concepts aligned with your brand and sustainability goals.",
      color: "text-teal",
    },
    {
      icon: TrendingUp,
      title: "Market Research",
      description: "Detailed analysis of industry trends to guide your sourcing and production decisions.",
      color: "text-accent",
    },
    {
      icon: CheckSquare,
      title: "Production Follow-Up",
      description: "End-to-end monitoring using ERP systems to ensure on-time, quality delivery.",
      color: "text-teal",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "From yarn to final packing, our team ensures your order meets global standards.",
      color: "text-accent",
    },
    {
      icon: Truck,
      title: "Shipping & Support",
      description: "Complete export documentation handling and after-sales assistance.",
      color: "text-teal",
    },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 section-heading" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive textile brokerage solutions designed to streamline your global sourcing and trade operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className={`${service.color} text-4xl mb-6`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
