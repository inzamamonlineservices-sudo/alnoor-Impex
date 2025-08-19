import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Yarn",
      description: "Premium cotton, polyester, and blended yarns for various applications.",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      href: "/products#yarn",
    },
    {
      title: "Fabric",
      description: "Woven and knitted fabrics for apparel, home, and industrial use.",
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      href: "/products#fabric",
    },
    {
      title: "Home Textiles",
      description: "Bedding, towels, curtains, and decorative home furnishings.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      href: "/products#home-textiles",
    },
    {
      title: "Garments",
      description: "Ready-made apparel for men, women, and children.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      href: "/products#garments",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-primary mb-4 section-heading" 
            data-testid="text-products-title"
            data-aos="fade"
            data-aos-duration="200"
          >
            <span className="shape"></span>
            Products We Source
          </h2>
          <p 
            className="text-lg text-secondary max-w-3xl mx-auto" 
            data-testid="text-products-description"
            data-aos="fade"
            data-aos-delay="60"
            data-aos-duration="220"
          >
            From premium yarns to finished garments, we source the finest textile products from Pakistan's leading manufacturers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Link key={product.title} href={product.href} data-testid={`link-product-${product.title.toLowerCase().replace(' ', '-')}`}>
              <div 
                className="group cursor-pointer" 
                data-aos="fade-up"
                data-aos-delay={index <= 2 ? index * 40 : (index - 3) * 40}
                data-aos-duration="220"
              >
                <div className="bg-neutral rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <img
                    src={product.image}
                    alt={`${product.title} collection`}
                    className="w-full h-96 object-cover rounded-lg mb-6 shadow-xl"
                    data-testid={`img-product-${index}`}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-product-title-${index}`}>
                    {product.title}
                  </h3>
                  <p className="text-secondary" data-testid={`text-product-description-${index}`}>
                    {product.description}
                  </p>
                  <div className="mt-4 text-accent font-medium flex items-center justify-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
