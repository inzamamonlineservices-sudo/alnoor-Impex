import { Search, Compass, TrendingUp, CheckSquare, CheckCircle, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Premium Textile Sourcing",
      description: "Connect with Pakistan's finest textile manufacturers who specialize in premium yarns, fabrics, and finished products. Our extensive network ensures access to quality materials at competitive prices.",
      color: "text-accent",
      features: ["Verified suppliers", "Quality assurance", "Competitive pricing"]
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Stay ahead with comprehensive market analysis, trend forecasting, and pricing intelligence. We provide insights that help you make informed sourcing decisions.",
      color: "text-teal",
      features: ["Trend analysis", "Price forecasting", "Market reports"]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control processes from raw materials to final inspection. We ensure every product meets international standards and your specific requirements.",
      color: "text-accent",
      features: ["Multi-stage testing", "International standards", "Custom specifications"]
    },
    {
      icon: Truck,
      title: "Export & Logistics",
      description: "Complete export documentation, shipping arrangements, and customs handling. We manage the entire logistics chain for seamless international trade.",
      color: "text-teal",
      features: ["Export documentation", "Shipping coordination", "Customs clearance"]
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
        
        <div className="grid md:grid-cols-2 gap-8">
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
