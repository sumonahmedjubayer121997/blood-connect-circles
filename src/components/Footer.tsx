
import { Heart, MessageCircle, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-medical-red" />
              <span className="text-2xl font-bold">BloodConnect</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Connecting blood donors and recipients to save lives and build stronger communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/find-donors" className="block text-gray-400 hover:text-white transition-colors">
                Find Donors
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog & Stories
              </Link>
              <Link to="/requests" className="block text-gray-400 hover:text-white transition-colors">
                Blood Requests
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Community</h3>
            <div className="space-y-2">
              <Link to="/success-stories" className="block text-gray-400 hover:text-white transition-colors">
                Success Stories
              </Link>
              <Link to="/guidelines" className="block text-gray-400 hover:text-white transition-colors">
                Donation Guidelines
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/support" className="block text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Emergency: 911</p>
              <p>Support: help@bloodconnect.org</p>
              <p>Community: community@bloodconnect.org</p>
            </div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BloodConnect. All rights reserved. Saving lives, one connection at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
