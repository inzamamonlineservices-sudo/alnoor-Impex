import { Calendar, Users, Globe, Award, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function StorySection() {


  const stats = [
    { number: "30+", label: "Years of Experience", icon: Calendar },
    { number: "500+", label: "Global Partners", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "10K+", label: "Successful Transactions", icon: Award },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed" 
            data-testid="text-story-subtitle"
            data-aos="fade"
            data-aos-delay="60"
            data-aos-duration="200"
          >
            Three decades of passion, innovation, and unwavering commitment to connecting Pakistan's textile excellence with the world.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6">
            <div 
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              data-aos="fade"
              data-aos-duration="220"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">A Legacy of Trust</h3>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p data-testid="text-story-paragraph-1">
                  What started as a small family business in Karachi has grown into one of Pakistan's most trusted textile brokerage firms. Our journey began with a simple vision: to bridge the gap between Pakistan's exceptional textile manufacturers and global buyers seeking quality products.
                </p>
                <p data-testid="text-story-paragraph-2">
                  Today, we're proud to have facilitated thousands of successful transactions, helping businesses across the world access Pakistan's rich textile heritage while supporting local manufacturers in reaching international markets.
                </p>
                <p data-testid="text-story-paragraph-3">
                  Our success is built on the foundation of trust, transparency, and an unwavering commitment to quality. We believe that every transaction is not just a business deal, but a partnership that contributes to the global textile ecosystem.
                </p>
              </div>
            </div>

            {/* CEO Quote */}
            <div 
              className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white relative overflow-hidden"
              data-aos="fade"
              data-aos-delay="60"
              data-aos-duration="220"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="text-6xl text-white/30 mb-4">"</div>
                <p className="text-lg font-light mb-6 italic" data-testid="text-ceo-quote">
                  "Our mission has always been to showcase Pakistan's textile excellence to the world while creating lasting partnerships that benefit everyone involved."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                    alt="Muhammad Ahmed Khan"
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid="img-ceo-thumbnail"
                  />
                  <div>
                    <p className="font-semibold" data-testid="text-ceo-name">Muhammad Ahmed Khan</p>
                    <p className="text-white/80 text-sm" data-testid="text-ceo-title">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Image */}
          <div className="relative" data-aos="fade" data-aos-duration="220">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
                alt="Muhammad Ahmed Khan - Founder & CEO"
                className="rounded-2xl w-full h-auto"
                data-testid="img-ceo-portrait"
              />
            </div>
            {/* Floating stats card */}
            <div 
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              data-aos="fade"
              data-aos-delay="60"
              data-aos-duration="220"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-secondary">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20"
                data-testid={`card-stat-${index}`}
                data-aos="fade-up"
                data-aos-delay={index <= 2 ? index * 40 : (index - 3) * 40}
                data-aos-duration="220"
              >
                <div className="text-accent text-4xl mb-4 flex justify-center">
                  <Icon className="w-12 h-12" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-secondary font-medium" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>




      </div>
    </section>
  );
}
