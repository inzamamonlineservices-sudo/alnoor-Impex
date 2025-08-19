import { useState } from "react";
import { Handshake, Shield, Lightbulb, Leaf, ChevronDown, ChevronUp } from "lucide-react";

export default function MissionValuesSection() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text: string, maxLines: number = 2) => {
    const words = text.split(' ');
    const wordsPerLine = 8; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  const values = [
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We cultivate strong partnerships with suppliers and buyers worldwide, ensuring smoother transactions, faster solutions, and lasting success across the textile supply chain.",
      color: "text-teal",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Our business is built on trust, transparency, and accountability. We uphold the highest ethical standards, prioritizing long-term relationships over short-term gains.",
      color: "text-accent",
    },
    {
      icon: Lightbulb,
      title: "Knowledge",
      description: "Backed by continuous market research and industry expertise, we help clients stay competitive with insights into global textile trends, demand shifts, and product innovations.",
      color: "text-teal",
    },
    {
      icon: Leaf,
      title: "Reliability",
      description: "We deliver consistent quality, dependable timelines, and seamless trade support — making us a trusted partner in textile sourcing worldwide.",
      color: "text-accent",
    },
  ];

  return (
    <section className="relative -mt-8 md:-mt-16 lg:-mt-24 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                data-testid={`card-value-${value.title.toLowerCase()}`}
                data-aos="fade-up"
                data-aos-delay={index <= 2 ? index * 60 : (index - 3) * 60}
                data-aos-duration="180"
              >
                <div className={`${value.color} text-4xl mb-4`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-4" data-testid={`text-value-description-${index}`}>
                  {expandedCards[index] ? value.description : truncateText(value.description)}
                </p>
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center text-accent font-medium hover:text-blue-600 transition-colors duration-200"
                  data-testid={`button-toggle-${index}`}
                >
                  {expandedCards[index] ? (
                    <>
                      Read Less <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
