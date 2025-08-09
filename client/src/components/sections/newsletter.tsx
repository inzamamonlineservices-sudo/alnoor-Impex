import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our network. You'll receive updates about industry trends and opportunities.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-testid="text-newsletter-title">
          Join Our Network
        </h2>
        <p className="text-xl text-gray-300 mb-8" data-testid="text-newsletter-description">
          Stay updated with industry insights, market trends, and exclusive opportunities.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-primary border-0 focus:ring-2 focus:ring-accent"
              required
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent text-white hover:bg-blue-600 px-6"
              data-testid="button-newsletter-submit"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4" data-testid="text-newsletter-privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
