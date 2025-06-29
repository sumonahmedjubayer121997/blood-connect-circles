
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="h-16 w-16 text-medical-red mx-auto mb-6 blood-drop animate-pulse-slow" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Save Lives Through
              <span className="text-medical-red block mt-2">Blood Donation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              Connect with blood donors and recipients in your community. 
              Share stories, find help, and make a difference together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-medical-red hover:bg-medical-red-dark text-lg px-8 py-4">
              Join as Donor
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-medical-red text-medical-red hover:bg-medical-red-light">
              Find Blood Donors
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/80 rounded-lg shadow-sm backdrop-blur">
              <Heart className="h-8 w-8 text-medical-red mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">1,000+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="text-center p-6 bg-white/80 rounded-lg shadow-sm backdrop-blur">
              <Users className="h-8 w-8 text-medical-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">5,000+</h3>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div className="text-center p-6 bg-white/80 rounded-lg shadow-sm backdrop-blur">
              <MessageCircle className="h-8 w-8 text-medical-green mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Community Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
