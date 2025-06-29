
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-medical-red blood-drop" />
          <span className="text-2xl font-bold text-medical-red">BloodConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/find-donors" className="text-foreground hover:text-medical-red transition-colors">
            Find Donors
          </Link>
          <Link to="/blog" className="text-foreground hover:text-medical-red transition-colors">
            Blog
          </Link>
          <Link to="/requests" className="text-foreground hover:text-medical-red transition-colors">
            Requests
          </Link>
          <Link to="/about" className="text-foreground hover:text-medical-red transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-medical-red hover:bg-medical-red-dark">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            <Link 
              to="/find-donors" 
              className="block py-2 text-foreground hover:text-medical-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Donors
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-foreground hover:text-medical-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/requests" 
              className="block py-2 text-foreground hover:text-medical-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Requests
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-foreground hover:text-medical-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-3 border-t space-y-2">
              <Button variant="outline" className="w-full">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="w-full bg-medical-red hover:bg-medical-red-dark">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
