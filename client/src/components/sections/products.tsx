import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Yarn",
      description: "Premium cotton, polyester, and blended yarns for various applications.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/products#yarn",
    },
    {
      title: "Fabric",
      description: "Woven and knitted fabrics for apparel, home, and industrial use.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/products#fabric",
    },
    {
      title: "Home Textiles",
      description: "Bedding, towels, curtains, and decorative home furnishings.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/products#home-textiles",
    },
    {
      title: "Garments",
      description: "Ready-made apparel for men, women, and children.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/products#garments",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 section-heading" data-testid="text-products-title">
            Products We Source
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto" data-testid="text-products-description">
            From premium yarns to finished garments, we source the finest textile products from Pakistan's leading manufacturers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link key={product.title} href={product.href} data-testid={`link-product-${product.title.toLowerCase().replace(' ', '-')}`}>
              <div className="group cursor-pointer">
                <div className="bg-neutral rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <img
                    src={product.image}
                    alt={`${product.title} collection`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
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
