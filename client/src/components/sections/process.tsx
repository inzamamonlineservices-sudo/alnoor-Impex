import { Search, Users, Factory, CheckCircle, Truck, Headphones, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
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
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50/30",
      borderColor: "border-blue-200/30",
      accentColor: "text-blue-600",
      dotColor: "bg-blue-500",
    },
    {
      step: "02", 
      title: "Supplier Identification",
      description: "Leveraging our extensive network, we identify and pre-qualify suppliers that match your exact specifications and standards.",
      icon: Users,
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50/30",
      borderColor: "border-emerald-200/30",
      accentColor: "text-emerald-600",
      dotColor: "bg-emerald-500",
    },
    {
      step: "03",
      title: "Production Monitoring",
      description: "Our team provides real-time updates and quality checks throughout the manufacturing process to ensure standards are met.",
      icon: Factory,
      color: "from-amber-600 to-amber-700",
      bgColor: "bg-amber-50/30",
      borderColor: "border-amber-200/30",
      accentColor: "text-amber-600",
      dotColor: "bg-amber-500",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive quality control inspections at every stage, from raw materials to final packaging and labeling.",
      icon: CheckCircle,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50/30",
      borderColor: "border-green-200/30",
      accentColor: "text-green-600",
      dotColor: "bg-green-500",
    },
    {
      step: "05",
      title: "Logistics & Export",
      description: "Complete handling of documentation, customs clearance, and shipping arrangements to ensure timely delivery.",
      icon: Truck,
      color: "from-indigo-600 to-indigo-700",
      bgColor: "bg-indigo-50/30",
      borderColor: "border-indigo-200/30",
      accentColor: "text-indigo-600",
      dotColor: "bg-indigo-500",
    },
    {
      step: "06",
      title: "After-Sales Support",
      description: "Ongoing support for any post-delivery requirements, claims resolution, and building long-term partnerships.",
      icon: Headphones,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50/30",
      borderColor: "border-purple-200/30",
      accentColor: "text-purple-600",
      dotColor: "bg-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-200/15 to-purple-200/15 rounded-full blur-2xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23666' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-slate-700 font-medium text-sm">Our Methodology</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Our Process
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A proven 6-step methodology that ensures seamless textile sourcing from consultation to delivery, 
            backed by three decades of industry expertise.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-400 hidden lg:block"></div>
          
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps.includes(index);
            const isHovered = hoveredStep === index;
            
            return (
              <div 
                key={step.step} 
                className={`process-step relative mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                data-step={index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full shadow-lg flex items-center justify-center z-20 hidden lg:flex transition-all duration-500 ${
                  isVisible ? 'scale-100' : 'scale-75'
                } ${isHovered ? 'scale-110 shadow-lg' : ''}`}>
                  <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-sm">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-20' : 'lg:ml-auto lg:pl-20'}`}>
                  <div className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200/50 hover:border-slate-300/70 transition-all duration-500 ${
                    isVisible ? 'transform-none' : isEven ? 'transform -translate-x-8' : 'transform translate-x-8'
                  } ${isHovered ? 'bg-white/95 shadow-xl' : ''} ${step.bgColor} ${step.borderColor}`}>
                    
                    {/* Subtle Hover Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Mobile Icon */}
                    <div className="lg:hidden flex items-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mr-4 shadow-md`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-slate-100 text-slate-700 rounded-full px-6 py-3 text-sm font-bold border border-slate-200">
                        Step {step.step}
                      </div>
                    </div>
                    
                    {/* Desktop Step Number */}
                    <div className="hidden lg:block mb-6">
                      <div className={`inline-flex items-center gap-3 bg-slate-100 text-slate-700 rounded-full px-6 py-3 text-sm font-bold border border-slate-200 ${isEven ? '' : 'float-right'}`}>
                        <span className={`w-2 h-2 ${step.dotColor} rounded-full`}></span>
                        Step {step.step}
                      </div>
                      <div className="clear-both"></div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full flex items-center justify-center border border-blue-200">
                      <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-100 to-emerald-100 border border-blue-200 rounded-2xl px-8 py-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">
              Ready to start your textile sourcing journey?
            </span>
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}