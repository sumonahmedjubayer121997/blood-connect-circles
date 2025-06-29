
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-medical-red text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="h-12 w-12 mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of donors and recipients who are already part of our 
            life-saving community. Every donation counts, every story matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-medical-red hover:bg-gray-100 text-lg px-8 py-4"
            >
              Register as Donor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Browse Success Stories
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Free to Use</h3>
              <p className="text-red-100">No hidden fees or charges</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Verified Donors</h3>
              <p className="text-red-100">All profiles are authenticated</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="text-red-100">Community help anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
