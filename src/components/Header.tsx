
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await logout();
      toast({
        title: "Success",
        description: "Signed out successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
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
            <Link to="/campaigns" className="text-foreground hover:text-medical-red transition-colors">
              Campaigns
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
            
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <span className="text-sm text-gray-600">
                  Hello, {currentUser.displayName || currentUser.email?.split('@')[0]}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => openAuthModal('signin')}>
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="bg-medical-red hover:bg-medical-red-dark" onClick={() => openAuthModal('signup')}>
                  Get Started
                </Button>
              </>
            )}
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
                to="/campaigns" 
                className="block py-2 text-foreground hover:text-medical-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Campaigns
              </Link>
              <Link 
                to="/about" 
                className="block py-2 text-foreground hover:text-medical-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-3 border-t space-y-2">
                {currentUser ? (
                  <div className="space-y-2">
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <p className="text-sm text-gray-600">
                      Hello, {currentUser.displayName || currentUser.email?.split('@')[0]}
                    </p>
                    <Button variant="outline" className="w-full" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" onClick={() => openAuthModal('signin')}>
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                    <Button className="w-full bg-medical-red hover:bg-medical-red-dark" onClick={() => openAuthModal('signup')}>
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        mode={authMode}
      />
    </>
  );
};

export default Header;
