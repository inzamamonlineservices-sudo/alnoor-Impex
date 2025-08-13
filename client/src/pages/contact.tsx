import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours."
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Textile Avenue", "Karachi, Sindh 74000", "Pakistan"],
      color: "text-accent"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 21 1234 5678", "+92 300 1234567"],
      color: "text-teal"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@alnoor-impex.com", "sales@alnoor-impex.com"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-teal"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-contact-hero-title">
              Contact Us
            </h1>
            <p className="text-xl leading-relaxed" data-testid="text-contact-hero-subtitle">
              Ready to start your textile sourcing journey? Get in touch with our expert team today.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6" data-testid="text-contact-form-title">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-secondary font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your full name"
                        required
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-secondary font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="your@email.com"
                        required
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-secondary font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="+92 300 1234567"
                      data-testid="input-contact-phone"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-secondary font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-1"
                      placeholder="Tell us about your textile sourcing requirements..."
                      required
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent text-white hover:bg-blue-600 px-8 py-3"
                    data-testid="button-contact-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6" data-testid="text-contact-info-title">
                  Get in Touch
                </h2>
                <p className="text-secondary mb-8" data-testid="text-contact-info-description">
                  We're here to help with all your textile sourcing needs. Reach out through any of the following channels:
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.title}
                        className="flex items-start"
                        data-testid={`contact-info-${index}`}
                      >
                        <div className={`${info.color} text-2xl mr-4 mt-1`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-2" data-testid={`text-contact-info-title-${index}`}>
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-secondary" data-testid={`text-contact-info-detail-${index}-${detailIndex}`}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-map-title">
                Find Us
              </h2>
              <p className="text-secondary" data-testid="text-map-description">
                Visit our office in the heart of Karachi's textile district
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center" data-testid="map-placeholder">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                <p className="text-secondary">
                  123 Textile Avenue, Karachi, Sindh 74000, Pakistan
                </p>
                <p className="text-sm text-secondary mt-2">
                  Map integration would be implemented here
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-faq-title">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is your minimum order quantity (MOQ)?",
                  answer: "Our MOQ varies by product type. For yarns, it's typically 500kg, for fabrics 1000 meters, and for garments 500-1000 pieces depending on the style."
                },
                {
                  question: "How long does production and shipping take?",
                  answer: "Production time varies from 15-45 days depending on the product and quantity. Shipping to most international destinations takes 15-25 days by sea freight."
                },
                {
                  question: "Do you provide samples before bulk orders?",
                  answer: "Yes, we provide samples for quality approval. Sample costs are typically deducted from the bulk order value."
                },
                {
                  question: "What payment terms do you offer?",
                  answer: "We typically work with 30% advance payment and 70% against shipping documents. Letter of Credit is also acceptable for established relationships."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6" data-testid={`faq-item-${index}`}>
                  <h3 className="text-lg font-semibold text-primary mb-3" data-testid={`text-faq-question-${index}`}>
                    {faq.question}
                  </h3>
                  <p className="text-secondary" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
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
