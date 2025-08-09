export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <div className="lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="CEO Portrait"
              className="rounded-xl shadow-lg w-full"
              data-testid="img-ceo-portrait"
            />
          </div>
          
          {/* Story Content */}
          <div className="lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 section-heading" data-testid="text-story-title">
              Our Story
            </h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p data-testid="text-story-paragraph-1">
                "What started as a small family business in Karachi has grown into one of Pakistan's most trusted textile brokerage firms. Our journey began with a simple vision: to bridge the gap between Pakistan's exceptional textile manufacturers and global buyers seeking quality products."
              </p>
              <p data-testid="text-story-paragraph-2">
                "Today, we're proud to have facilitated thousands of successful transactions, helping businesses across the world access Pakistan's rich textile heritage while supporting local manufacturers in reaching international markets."
              </p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-secondary font-medium" data-testid="text-ceo-name">
                Muhammad Ahmed Khan
              </p>
              <p className="text-sm text-secondary" data-testid="text-ceo-title">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
