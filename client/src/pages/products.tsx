import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CheckCircle, Star } from "lucide-react";

export default function Products() {
  const productCategories = [
    {
      id: "yarn",
      title: "Yarn",
      description: "Premium cotton, polyester, and blended yarns for various applications",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "100% Cotton yarn in various counts",
        "Polyester yarn for durability",
        "Cotton-polyester blends",
        "Specialty yarns for technical applications",
        "Custom color matching available",
        "Sustainable and eco-friendly options"
      ],
      specifications: {
        "Count Range": "10s - 80s",
        "Fiber Types": "Cotton, Polyester, Blends",
        "Colors": "Raw white, Dyed, Melange",
        "Packaging": "Cones, Hanks, Bobbins"
      }
    },
    {
      id: "fabric",
      title: "Fabric",
      description: "Woven and knitted fabrics for apparel, home, and industrial use",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Woven fabrics in various constructions",
        "Knitted fabrics for comfort wear",
        "Technical fabrics for performance",
        "Sustainable fabric options",
        "Custom fabric development",
        "Wide range of weights and textures"
      ],
      specifications: {
        "Weight Range": "80 GSM - 400 GSM",
        "Width": "44\" - 72\"",
        "Construction": "Woven, Knitted, Non-woven",
        "Finishes": "Plain, Printed, Dyed"
      }
    },
    {
      id: "home-textiles",
      title: "Home Textiles",
      description: "Bedding, towels, curtains, and decorative home furnishings",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Premium bed sheets and pillowcases",
        "Luxury towels and bath linens",
        "Custom curtains and drapes",
        "Decorative cushions and throws",
        "Table linens and accessories",
        "Hotel and hospitality textiles"
      ],
      specifications: {
        "Thread Count": "200 - 1000 TC",
        "Materials": "Cotton, Linen, Bamboo",
        "Sizes": "Twin to King size",
        "Colors": "Solid, Printed, Jacquard"
      }
    },
    {
      id: "garments",
      title: "Garments",
      description: "Ready-made apparel for men, women, and children",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Men's formal and casual wear",
        "Women's fashion and basics",
        "Children's clothing and school uniforms",
        "Workwear and safety garments",
        "Sports and activewear",
        "Private label manufacturing"
      ],
      specifications: {
        "Size Range": "XS - 5XL",
        "Categories": "Casual, Formal, Sports",
        "MOQ": "500 - 5000 pieces",
        "Lead Time": "30 - 60 days"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-6" 
              data-testid="text-products-hero-title"
              data-aos="fade"
              data-aos-duration="200"
            >
              Our Products
            </h1>
            <p 
              className="text-xl leading-relaxed" 
              data-testid="text-products-hero-subtitle"
              data-aos="fade"
              data-aos-delay="60"
              data-aos-duration="220"
            >
              From premium yarns to finished garments, we source the finest textile products from Pakistan's leading manufacturers
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {productCategories.map((product, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={product.id}
                    id={product.id}
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      isEven ? "" : "lg:grid-flow-col-dense"
                    }`}
                    data-testid={`section-product-${product.id}`}
                    data-aos="fade-up"
                    data-aos-duration="220"
                    data-aos-delay={index <= 2 ? index * 40 : (index - 3) * 40}
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <h2 className="text-3xl font-bold text-primary mb-4" data-testid={`text-product-title-${index}`}>
                        {product.title}
                      </h2>
                      <p className="text-lg text-secondary mb-6" data-testid={`text-product-description-${index}`}>
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-secondary text-sm" data-testid={`text-product-feature-${index}-${featureIndex}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Specifications */}
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-4">Specifications</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(product.specifications).map(([key, value], specIndex) => (
                            <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                              <span className="font-medium text-secondary" data-testid={`text-spec-key-${index}-${specIndex}`}>
                                {key}:
                              </span>
                              <span className="text-secondary" data-testid={`text-spec-value-${index}-${specIndex}`}>
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-xl shadow-xl w-full"
                        data-testid={`img-product-${index}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-20 bg-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl font-bold text-primary mb-4" 
                data-testid="text-why-choose-title"
                data-aos="fade"
                data-aos-duration="200"
              >
                Why Choose Our Products?
              </h2>
              <p 
                className="text-lg text-secondary" 
                data-testid="text-why-choose-description"
                data-aos="fade"
                data-aos-delay="60"
                data-aos-duration="220"
              >
                Quality, reliability, and value that sets us apart
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: "Premium Quality",
                  description: "All products undergo rigorous quality control to meet international standards"
                },
                {
                  icon: CheckCircle,
                  title: "Competitive Pricing",
                  description: "Direct sourcing from manufacturers ensures the best prices without compromising quality"
                },
                {
                  icon: Star,
                  title: "Timely Delivery",
                  description: "Efficient logistics and production planning ensure on-time delivery every time"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="text-center"
                    data-testid={`card-benefit-${index}`}
                    data-aos="fade-up"
                    data-aos-delay={index <= 2 ? index * 60 : (index - 3) * 60}
                    data-aos-duration="180"
                  >
                    <div className="text-accent text-4xl mb-4 flex justify-center">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3" data-testid={`text-benefit-title-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-secondary" data-testid={`text-benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold mb-6" 
              data-testid="text-products-cta-title"
              data-aos="fade"
              data-aos-duration="200"
            >
              Ready to Source Quality Textiles?
            </h2>
            <p 
              className="text-xl mb-8" 
              data-testid="text-products-cta-description"
              data-aos="fade"
              data-aos-delay="60"
              data-aos-duration="220"
            >
              Contact us today to discuss your specific requirements and get personalized sourcing solutions.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade"
              data-aos-delay="120"
              data-aos-duration="200"
            >
              <a
                href="/contact"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 inline-block"
                data-testid="button-products-cta-contact"
              >
                Get Quote Now
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 inline-block"
                data-testid="button-products-cta-services"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
