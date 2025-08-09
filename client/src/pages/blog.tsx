import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Calendar, User, ArrowRight, TrendingUp, Leaf, Globe } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Textiles in Pakistan",
      excerpt: "Exploring how Pakistani textile manufacturers are embracing eco-friendly practices and sustainable production methods to meet global demand.",
      author: "Sarah Hassan",
      date: "2024-01-15",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Global Textile Trade Trends in 2024",
      excerpt: "Key market insights and emerging trends that are shaping the international textile trade landscape this year.",
      author: "Muhammad Ahmed Khan",
      date: "2024-01-10",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Quality Control Best Practices in Textile Manufacturing",
      excerpt: "Essential quality assurance processes that ensure textile products meet international standards and customer expectations.",
      author: "Ali Raza",
      date: "2024-01-08",
      category: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1591029904770-c8a21ff7fe62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Building Strong Supplier Relationships in Global Trade",
      excerpt: "How to establish and maintain successful partnerships with textile suppliers for long-term business success.",
      author: "Fatima Malik",
      date: "2024-01-05",
      category: "Business Development",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Cotton vs. Synthetic: Choosing the Right Yarn for Your Project",
      excerpt: "A comprehensive guide to selecting the most suitable yarn type based on application, performance, and sustainability requirements.",
      author: "Sarah Hassan",
      date: "2024-01-02",
      category: "Product Guide",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Export Documentation: A Complete Guide for Textile Traders",
      excerpt: "Understanding the essential paperwork and procedures required for successful textile exports from Pakistan.",
      author: "Muhammad Ahmed Khan",
      date: "2023-12-28",
      category: "Trade Guide",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "10 min read",
      featured: false
    }
  ];

  const categories = [
    { name: "All", icon: Globe, count: 6 },
    { name: "Sustainability", icon: Leaf, count: 1 },
    { name: "Market Analysis", icon: TrendingUp, count: 1 },
    { name: "Quality Assurance", icon: TrendingUp, count: 1 },
    { name: "Business Development", icon: TrendingUp, count: 1 },
    { name: "Product Guide", icon: TrendingUp, count: 1 },
    { name: "Trade Guide", icon: TrendingUp, count: 1 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-blog-hero-title">
              Industry Insights & News
            </h1>
            <p className="text-xl leading-relaxed" data-testid="text-blog-hero-subtitle">
              Stay informed with the latest trends, tips, and insights from the textile industry
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-featured-title">
                Featured Articles
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  data-testid={`card-featured-post-${index}`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-featured-post-${index}`}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                      <span className="bg-accent text-white px-2 py-1 rounded text-xs" data-testid={`text-featured-category-${index}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span data-testid={`text-featured-readtime-${index}`}>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3" data-testid={`text-featured-post-title-${index}`}>
                      {post.title}
                    </h3>
                    <p className="text-secondary mb-4" data-testid={`text-featured-post-excerpt-${index}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-secondary">
                        <User className="w-4 h-4 mr-1" />
                        <span data-testid={`text-featured-author-${index}`}>{post.author}</span>
                      </div>
                      <button className="text-accent font-medium flex items-center hover:text-blue-600 transition-colors duration-200" data-testid={`button-featured-read-more-${index}`}>
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-20 bg-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar with Categories */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-primary mb-4" data-testid="text-categories-title">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <li key={category.name}>
                          <button
                            className="w-full text-left flex items-center justify-between py-2 px-3 rounded-lg hover:bg-neutral transition-colors duration-200"
                            data-testid={`button-category-${index}`}
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 mr-2 text-accent" />
                              {category.name}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {category.count}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <div className="grid gap-6">
                  {regularPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      data-testid={`card-blog-post-${index}`}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                            data-testid={`img-blog-post-${index}`}
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 text-sm text-secondary mb-3">
                            <span className="bg-accent text-white px-2 py-1 rounded text-xs" data-testid={`text-blog-category-${index}`}>
                              {post.category}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span data-testid={`text-blog-readtime-${index}`}>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-3" data-testid={`text-blog-post-title-${index}`}>
                            {post.title}
                          </h3>
                          <p className="text-secondary mb-4" data-testid={`text-blog-post-excerpt-${index}`}>
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-secondary">
                              <User className="w-4 h-4 mr-1" />
                              <span data-testid={`text-blog-author-${index}`}>{post.author}</span>
                            </div>
                            <button className="text-accent font-medium flex items-center hover:text-blue-600 transition-colors duration-200" data-testid={`button-blog-read-more-${index}`}>
                              Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-secondary hover:bg-accent hover:text-white transition-colors duration-200" data-testid="button-pagination-prev">
                      Previous
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-accent text-white" data-testid="button-pagination-1">
                      1
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-secondary hover:bg-accent hover:text-white transition-colors duration-200" data-testid="button-pagination-2">
                      2
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-secondary hover:bg-accent hover:text-white transition-colors duration-200" data-testid="button-pagination-3">
                      3
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-secondary hover:bg-accent hover:text-white transition-colors duration-200" data-testid="button-pagination-next">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-blog-newsletter-title">
              Stay Updated
            </h2>
            <p className="text-xl mb-8" data-testid="text-blog-newsletter-description">
              Subscribe to our newsletter to get the latest industry insights delivered to your inbox.
            </p>
            <a
              href="/#newsletter"
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 inline-block"
              data-testid="button-blog-newsletter-cta"
            >
              Subscribe Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
