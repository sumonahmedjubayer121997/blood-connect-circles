
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About BloodConnect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building a community that connects blood donors with those in need, 
            creating a network of life-savers who make a difference every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-medical-red mx-auto mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To save lives by connecting blood donors with recipients efficiently and safely.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-medical-blue mx-auto mb-2" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Building a supportive network of donors and recipients worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-medical-green mx-auto mb-2" />
              <CardTitle>Global Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Making blood donation accessible and organized across communities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-gray-600 mx-auto mb-2" />
              <CardTitle>Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ensuring all connections are verified and safe for everyone involved.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BloodConnect was founded with a simple belief: that technology can bridge the gap 
            between those who want to help and those who need help. Every year, millions of 
            lives depend on blood transfusions, yet finding compatible donors quickly remains 
            a challenge.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our platform eliminates barriers by creating a trusted community where donors can 
            register their availability and recipients can find help when they need it most. 
            We've built features that prioritize safety, efficiency, and human connection.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Join us in our mission to make blood donation more accessible and save more lives 
            through the power of community.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-600 mb-6">
            Whether you're looking to donate or find a donor, we're here to help.
          </p>
          <div className="space-x-4">
            <a href="/find-donors" className="inline-block bg-medical-red text-white px-6 py-3 rounded-md hover:bg-medical-red-dark transition-colors">
              Find Donors
            </a>
            <a href="/" className="inline-block bg-white text-medical-red border border-medical-red px-6 py-3 rounded-md hover:bg-medical-red-light transition-colors">
              Become a Donor
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
