import { Search, Compass, TrendingUp, CheckSquare, CheckCircle, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const serviceCategories = [
    {
      title: "Pre-Production",
      accent: "bg-blue-500",
      services: [
        {
          icon: Search,
          title: "Vendor Sourcing",
          description: "Connect with verified textile suppliers worldwide for yarn, fabrics, garments, and home furnishings.",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverColor: "hover:border-blue-200"
        },
        {
          icon: Compass,
          title: "Product Design",
          description: "Tailored textile design solutions from sustainable materials to prototyping.",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          hoverColor: "hover:border-blue-200"
        }
      ]
    },
    {
      title: "Production",
      accent: "bg-green-500",
      services: [
        {
          icon: TrendingUp,
          title: "Market Research",
          description: "Insights into global textile trends, pricing, and competitive landscapes.",
          iconBg: "bg-green-50",
          iconColor: "text-green-600",
          hoverColor: "hover:border-green-200"
        },
        {
          icon: CheckSquare,
          title: "Production Follow-Up",
          description: "Real-time monitoring, ERP integration, and strict quality checkpoints.",
          iconBg: "bg-green-50",
          iconColor: "text-green-600",
          hoverColor: "hover:border-green-200"
        }
      ]
    },
    {
      title: "Logistics",
      accent: "bg-purple-500",
      services: [
        {
          icon: CheckCircle,
          title: "Quality Control",
          description: "Multi-stage inspections and compliance with international standards.",
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverColor: "hover:border-purple-200"
        },
        {
          icon: Truck,
          title: "Shipping & Support",
          description: "Complete export documentation, customs clearance, and after-sales support.",
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          hoverColor: "hover:border-purple-200"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-primary mb-6 section-heading" 
            data-testid="text-services-title"
            data-aos="fade"
            data-aos-duration="200"
          >
            <span className="shape"></span>
            Our Services
          </h2>
          <p 
            className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed" 
            data-testid="text-services-description"
            data-aos="fade"
            data-aos-delay="60"
            data-aos-duration="220"
          >
            Comprehensive textile sourcing solutions tailored for premium global businesses seeking excellence, reliability, and sustainable partnerships.
          </p>
        </div>
        
        {/* Services Grid by Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="">
              {/* Enhanced Category Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-1 ${category.accent} rounded-full mr-4`}></div>
                  <h3 
                    className="text-3xl font-bold text-primary"
                    data-aos="fade"
                    data-aos-duration="200"
                  >
                    {category.title}
                  </h3>
                  <div className={`w-12 h-1 ${category.accent} rounded-full ml-4`}></div>
                </div>
                <p className="text-secondary text-lg max-w-2xl mx-auto">
                  {category.title === "Pre-Production" && "Strategic planning and sourcing solutions to kickstart your textile projects"}
                  {category.title === "Production" && "Comprehensive monitoring and market intelligence for optimal production outcomes"}
                  {category.title === "Logistics" && "End-to-end quality assurance and seamless delivery solutions"}
                </p>
              </div>
              
              {/* Enhanced Service Cards */}
              <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {category.services.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  const globalIndex = categoryIndex * 2 + serviceIndex;
                  return (
                    <div
                      key={service.title}
                      className={`group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 ${service.hoverColor} hover:-translate-y-2 relative overflow-hidden`}
                      data-testid={`card-service-${globalIndex}`}
                      data-aos="fade-up"
                      data-aos-delay={serviceIndex * 80}
                      data-aos-duration="220"
                    >
                      {/* Subtle Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className={`w-full h-full ${service.iconBg} rounded-full transform translate-x-16 -translate-y-16`}></div>
                      </div>
                      
                      {/* Icon and Title */}
                      <div className="text-center mb-8 relative z-10">
                        <div className={`${service.iconColor} ${service.iconBg} rounded-2xl p-5 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-primary mb-2" data-testid={`text-service-title-${globalIndex}`}>
                          {service.title}
                        </h4>
                      </div>
                      
                      {/* Description */}
                      <p className="text-secondary leading-relaxed mb-8 text-center text-lg" data-testid={`text-service-description-${globalIndex}`}>
                        {service.description}
                      </p>
                      
                      {/* Learn More Button */}
                      <div className="text-center">
                        <Button 
                          variant="outline" 
                          className={`group/btn ${service.iconColor} border-2 hover:bg-gradient-to-r hover:from-accent hover:to-accent/90 hover:text-white hover:border-accent transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-xl`}
                          data-testid={`button-service-learn-more-${globalIndex}`}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
