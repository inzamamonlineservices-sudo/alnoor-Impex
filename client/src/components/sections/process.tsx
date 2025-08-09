import { Search, Users, Factory, CheckCircle, Truck, Headphones, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepElements = document.querySelectorAll('.process-step');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 section-heading section-heading-white" data-testid="text-process-title">
            <span className="shape" style={{background: 'rgba(255,255,255,0.3)'}}></span>
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-process-description">
            A proven 6-step methodology that ensures seamless textile sourcing from consultation to delivery.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/30 to-white/10 rounded-full hidden lg:block"></div>
          
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={step.step} 
                className={`process-step relative mb-12 lg:mb-16 transition-all duration-700 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                data-step={index}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 hidden lg:flex transition-all duration-500 ${
                  visibleSteps.includes(index) ? 'scale-100' : 'scale-75'
                }`}>
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                  <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'transform-none' : isEven ? 'transform -translate-x-8' : 'transform translate-x-8'
                  }`}>
                    {/* Mobile Icon */}
                    <div className="lg:hidden flex items-center mb-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-white/20 text-white rounded-full px-4 py-2 text-sm font-bold">
                        Step {step.step}
                      </div>
                    </div>
                    
                    {/* Desktop Step Number */}
                    <div className="hidden lg:block">
                      <div className={`inline-block bg-white/20 text-white rounded-full px-4 py-2 text-sm font-bold mb-4 ${isEven ? '' : 'float-right'}`}>
                        Step {step.step}
                      </div>
                      <div className="clear-both"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4" data-testid={`text-process-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed" data-testid={`text-process-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowDown className="w-6 h-6 text-white/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}