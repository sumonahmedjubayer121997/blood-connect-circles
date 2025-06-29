import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserProfile from "@/components/UserProfile";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="w-full max-w-md mx-auto">
            <CardContent className="p-4 sm:p-6 text-center">
              <User className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold mb-2">Sign In Required</h2>
              <p className="text-gray-600 mb-4">
                You need to be signed in to view your profile.
              </p>
              <Button className="w-full sm:w-auto bg-medical-red hover:bg-medical-red-dark">
                Sign In
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-3xl mx-auto">
          <UserProfile />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
