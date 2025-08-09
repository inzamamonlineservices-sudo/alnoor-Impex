import { ArrowRight, Search, Users, Factory, CheckCircle, Truck, Headphones } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We understand your specific textile requirements, quality standards, and business objectives through detailed discussions.",
      icon: Search,
    },
    {
      step: "02", 
      title: "Supplier Identification",
      description: "Leveraging our extensive network, we identify and pre-qualify suppliers that match your exact specifications and standards.",
      icon: Users,
    },
    {
      step: "03",
      title: "Production Monitoring",
      description: "Our team provides real-time updates and quality checks throughout the manufacturing process to ensure standards are met.",
      icon: Factory,
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive quality control inspections at every stage, from raw materials to final packaging and labeling.",
      icon: CheckCircle,
    },
    {
      step: "05",
      title: "Logistics & Export",
      description: "Complete handling of documentation, customs clearance, and shipping arrangements to ensure timely delivery.",
      icon: Truck,
    },
    {
      step: "06",
      title: "After-Sales Support",
      description: "Ongoing support for any post-delivery requirements, claims resolution, and building long-term partnerships.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 section-heading" data-testid="text-process-title">
            Our Process
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto" data-testid="text-process-description">
            A proven 6-step methodology that ensures seamless textile sourcing from initial consultation to final delivery.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLastInRow = (index + 1) % 3 === 0;
              
              return (
                <div key={step.step} className="relative">
                  {/* Process Card */}
                  <div 
                    className="bg-neutral rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative z-10"
                    data-testid={`card-process-${index}`}
                  >
                    {/* Step Number */}
                    <div className="flex items-center mb-6">
                      <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="text-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-process-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-secondary leading-relaxed" data-testid={`text-process-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Flow Arrows - Only show between cards, not after last card in row */}
                  {index < processSteps.length - 1 && !isLastInRow && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  )}
                  
                  {/* Vertical connecting line for mobile/tablet */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <div className="w-0.5 h-8 bg-accent opacity-30"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}