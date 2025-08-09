import { Handshake, Shield, Lightbulb } from "lucide-react";

export default function MissionValuesSection() {
  const values = [
    {
      icon: Handshake,
      title: "Collaboration",
      description: "For over three decades in Pakistan, we've built strong supplier and customer networks, leading to innovative products, global reach, and trusted partnerships.",
      color: "text-teal",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold fair business practices, even covering claims ourselves when needed to maintain trust and meet market standards. Our team works with accountability and best practices.",
      color: "text-accent",
    },
    {
      icon: Lightbulb,
      title: "Knowledge",
      description: "Through ongoing research, training, and innovation, we keep our partners informed and competitive, with a focus on sustainability.",
      color: "text-teal",
    },
  ];

  return (
    <section className="relative -mt-32 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <div className={`${value.color} text-4xl mb-4`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
