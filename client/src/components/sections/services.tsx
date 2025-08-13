import { Search, Compass, TrendingUp, CheckSquare, CheckCircle, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Vendor Sourcing",
      description: "We connect you with verified, reliable textile suppliers in Pakistan, ensuring quality and cost efficiency.",
      color: "text-accent",
      features: ["Comprehensive supplier verification", "Cost-effective solutions", "Quality assurance", "Long-term partnerships"]
    },
    {
      icon: Compass,
      title: "Product Design",
      description: "Market-ready textile concepts aligned with your brand and sustainability goals.",
      color: "text-teal",
      features: ["Custom design development", "Sustainable materials", "Brand alignment", "Prototype development"]
    },
    {
      icon: TrendingUp,
      title: "Market Research",
      description: "Detailed analysis of industry trends to guide your sourcing and production decisions.",
      color: "text-accent",
      features: ["Industry trend analysis", "Market forecasting", "Competitive analysis", "Pricing strategy"]
    },
    {
      icon: CheckSquare,
      title: "Production Follow-Up",
      description: "End-to-end monitoring using ERP systems to ensure on-time, quality delivery.",
      color: "text-teal",
      features: ["Real-time tracking", "ERP integration", "Timeline management", "Quality checkpoints"]
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "From yarn to final packing, our team ensures your order meets global standards.",
      color: "text-accent",
      features: ["Multi-stage inspections", "International standards", "Quality reports", "Corrective actions"]
    },
    {
      icon: Truck,
      title: "Shipping & Support",
      description: "Complete export documentation handling and after-sales assistance.",
      color: "text-teal",
      features: ["Export documentation", "Shipping coordination", "Customs clearance", "After-sales service"]
    },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 section-heading" data-testid="text-services-title">
            <span className="shape"></span>
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
                className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-testid={`card-service-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`${service.color} bg-gray-50 rounded-2xl p-4 mr-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-secondary leading-relaxed mb-6" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-secondary">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
