export default function ClientsSection() {
  const clients = [
    "CLIENT 1", "CLIENT 2", "CLIENT 3", "CLIENT 4", "CLIENT 5", "CLIENT 6"
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 section-heading" data-testid="text-clients-title">
            <span className="shape"></span>
            Trusted by Leading Companies
          </h2>
          <p className="text-secondary" data-testid="text-clients-subtitle">
            We're proud to serve businesses across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 flex justify-center"
              data-testid={`client-logo-${index}`}
            >
              <div className="bg-gray-200 w-24 h-16 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
