import { Handshake, Shield, Lightbulb, Leaf } from "lucide-react";

export default function MissionValuesSection() {
  const values = [
    {
      icon: Handshake,
      title: "Collaboration",
      description: "For over a decade in Pakistan, we've cultivated strong, enduring relationships with both suppliers and customers. These partnerships have driven the development of innovative products, opened access to global markets, and fostered trust across our entire network. By acting as a bridge between manufacturers and buyers, we ensure smoother transactions, faster solutions, and long-term success for all parties.",
      color: "text-teal",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold uncompromising fairness and transparency in every business dealing. When market challenges arise, we prioritize trust over short-term gain — even taking on claims ourselves to maintain strong supplier and client relationships. Our policies and practices are built on accountability, consistency, and the highest ethical standards.",
      color: "text-accent",
    },
    {
      icon: Lightbulb,
      title: "Knowledge",
      description: "Through continuous market research, staff training, and technological innovation, we empower our partners to stay competitive in an evolving textile industry. From emerging fiber technologies to shifting global demand patterns, we keep stakeholders informed while actively exploring sustainable advancements in cotton sourcing and processing.",
      color: "text-teal",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We recognize our responsibility to promote environmentally responsible practices in the cotton supply chain. By working with mills and farms that follow sustainable farming methods, efficient water usage, and ethical labor standards, we help clients meet their environmental goals while supporting a healthier planet for future generations.",
      color: "text-accent",
    },
  ];

  return (
    <section className="relative -mt-32 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
