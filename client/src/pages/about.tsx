import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Users, Award, Globe, CheckCircle } from "lucide-react";

export default function About() {
  const coreStrengths = [
    {
      icon: Globe,
      title: "Market Expertise",
      description: "Deep understanding of global textile markets and trends with over 30 years of experience.",
    },
    {
      icon: Users,
      title: "Supplier Relationships",
      description: "Strong network of verified textile manufacturers across Pakistan with proven track records.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring international standards are met consistently.",
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Thousands of successful transactions facilitating seamless global textile trade.",
    },
  ];

  const team = [
    {
      name: "Muhammad Ahmed Khan",
      position: "Founder & CEO",
      bio: "With over 30 years in textile industry, Ahmed leads our vision of connecting global markets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Sarah Hassan",
      position: "Operations Director",
      bio: "Expert in supply chain management with 15 years of experience in textile operations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Ali Raza",
      position: "Quality Control Manager",
      bio: "Ensures all products meet international standards with his expertise in textile quality assurance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Fatima Malik",
      position: "Business Development Manager",
      bio: "Builds strategic partnerships globally, expanding our network of satisfied clients worldwide.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-about-title">
              About PakTextile Brokers
            </h1>
            <p className="text-xl leading-relaxed" data-testid="text-about-subtitle">
              Building bridges between Pakistan's finest textile manufacturers and global markets since 1994
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6" data-testid="text-overview-title">
                  Three Decades of Excellence
                </h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p data-testid="text-overview-paragraph-1">
                    Founded in 1994, PakTextile Brokers has grown from a small family business to become Pakistan's most trusted textile brokerage firm. Our journey began with a simple mission: to connect Pakistan's exceptional textile heritage with global markets seeking quality and reliability.
                  </p>
                  <p data-testid="text-overview-paragraph-2">
                    Today, we serve as the vital link between leading textile manufacturers in Pakistan and businesses worldwide, facilitating seamless trade processes while maintaining the highest standards of quality and integrity.
                  </p>
                  <p data-testid="text-overview-paragraph-3">
                    Our success is built on deep industry knowledge, strong relationships, and an unwavering commitment to our clients' success.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Textile manufacturing facility"
                  className="rounded-lg shadow-xl"
                  data-testid="img-overview"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-20 bg-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-strengths-title">
                Our Core Strengths
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto" data-testid="text-strengths-description">
                What sets us apart in the competitive textile brokerage industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreStrengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <div
                    key={strength.title}
                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    data-testid={`card-strength-${index}`}
                  >
                    <div className="text-accent text-4xl mb-4 flex justify-center">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3" data-testid={`text-strength-title-${index}`}>
                      {strength.title}
                    </h3>
                    <p className="text-secondary text-sm" data-testid={`text-strength-description-${index}`}>
                      {strength.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-6" data-testid="text-mission-title">
                  Our Mission
                </h2>
                <p className="text-secondary leading-relaxed" data-testid="text-mission-content">
                  To be the premier bridge connecting Pakistan's textile excellence with global markets, facilitating mutually beneficial partnerships that drive growth, innovation, and sustainable practices in the textile industry.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-6" data-testid="text-vision-title">
                  Our Vision
                </h2>
                <p className="text-secondary leading-relaxed" data-testid="text-vision-content">
                  To establish Pakistan as the go-to source for premium textiles globally, while empowering local manufacturers to reach international markets and creating lasting value for all stakeholders in the textile supply chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Policy */}
        <section className="py-20 bg-neutral">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8" data-testid="text-quality-title">
              Quality Policy
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-secondary leading-relaxed text-lg" data-testid="text-quality-content">
                "We are committed to delivering textile products that exceed international quality standards. Our quality assurance process encompasses every stage from raw material sourcing to final delivery, ensuring our clients receive products that meet their exact specifications and exceed their expectations."
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-team-title">
                Meet Our Team
              </h2>
              <p className="text-lg text-secondary" data-testid="text-team-description">
                Experienced professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center"
                  data-testid={`card-team-${index}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    data-testid={`img-team-${index}`}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-1" data-testid={`text-team-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3" data-testid={`text-team-position-${index}`}>
                    {member.position}
                  </p>
                  <p className="text-secondary text-sm" data-testid={`text-team-bio-${index}`}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
