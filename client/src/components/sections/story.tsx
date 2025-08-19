import { Quote } from "lucide-react";

export default function StorySection() {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-primary mb-6 section-heading" 
            data-testid="text-story-title"
            data-aos="fade"
            data-aos-duration="200"
          >
            <span className="shape"></span>
            Our Story
          </h2>
          <p 
            className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed" 
            data-testid="text-story-subtitle"
            data-aos="fade"
            data-aos-delay="60"
            data-aos-duration="200"
          >
            Al Noor Impex began over a decade ago with a simple mission: to connect global buyers with reliable textile manufacturers. What started as a small operation has grown into a trusted sourcing partner for companies around the world, offering expertise in yarn, fabrics, garments, and home furnishings.
          </p>
        </div>

        {/* Main Story Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* A Legacy of Trust Section */}
            <div 
              data-aos="fade"
              data-aos-duration="220"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">A Legacy of Trust</h3>
              <p className="text-secondary leading-relaxed mb-6" data-testid="text-story-paragraph-1">
                For more than 10 years, we have facilitated successful partnerships between buyers and suppliers across international markets. By focusing on quality, transparency, and dependable service, we've helped businesses access the best in textile manufacturing while enabling local producers to reach global customers.
              </p>
            </div>

            {/* Our Commitment Section */}
            <div 
              data-aos="fade"
              data-aos-delay="40"
              data-aos-duration="220"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
              <p className="text-secondary leading-relaxed" data-testid="text-story-paragraph-2">
                Every transaction with Al Noor Impex is more than just a business deal — it's a partnership built on trust, knowledge, and reliability. Our success lies in ensuring that every client receives consistent quality, seamless processes, and solutions tailored to their needs.
              </p>
            </div>

            {/* Founder's Quote Highlight Box */}
            <div 
              className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg"
              data-aos="fade"
              data-aos-delay="80"
              data-aos-duration="220"
            >
              <div className="flex items-start">
                <Quote className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-secondary italic mb-4 leading-relaxed" data-testid="text-ceo-quote">
                    "Our mission has always been to make textile sourcing simple, reliable, and globally accessible. We are committed to building lasting relationships that create value for both our clients and our suppliers."
                  </p>
                  <div className="text-sm text-primary font-semibold">
                    <p data-testid="text-ceo-name">— Salahuddin Jimmy</p>
                    <p className="text-secondary font-normal" data-testid="text-ceo-title">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative" data-aos="fade" data-aos-delay="120" data-aos-duration="220">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
                alt="Muhammad Ahmed Khan - Founder & CEO"
                className="w-full h-auto object-cover"
                data-testid="img-ceo-portrait"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
