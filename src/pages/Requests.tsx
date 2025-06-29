
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Heart, MessageCircle } from "lucide-react";

const Requests = () => {
  // Mock request data
  const requests = [
    {
      id: 1,
      title: "Urgent: B+ Blood Needed for Surgery",
      bloodType: "B+",
      location: "Manhattan, NY",
      timePosted: "2 hours ago",
      status: "urgent",
      description: "Need B+ blood for emergency surgery at Mount Sinai Hospital.",
      responses: 3
    },
    {
      id: 2,
      title: "A- Blood Donation Request",
      bloodType: "A-",
      location: "Brooklyn, NY",
      timePosted: "1 day ago",
      status: "active",
      description: "Looking for A- blood donors for scheduled procedure next week.",
      responses: 7
    },
    {
      id: 3,
      title: "O+ Blood Drive Support Needed",
      bloodType: "O+",
      location: "Queens, NY",
      timePosted: "3 days ago",
      status: "fulfilled",
      description: "Community blood drive needs O+ donors this weekend.",
      responses: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blood Donation Requests</h1>
          <p className="text-gray-600 text-lg">
            Help save lives by responding to blood donation requests in your area.
          </p>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <Badge variant="outline">All Requests</Badge>
            <Badge variant="destructive">Urgent</Badge>
            <Badge variant="secondary">Active</Badge>
            <Badge variant="default">Fulfilled</Badge>
          </div>
          <Button className="bg-medical-red hover:bg-medical-red-dark">
            Post Request
          </Button>
        </div>

        <div className="space-y-6">
          {requests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-xl">{request.title}</CardTitle>
                      <Badge 
                        variant={
                          request.status === 'urgent' ? 'destructive' : 
                          request.status === 'active' ? 'secondary' : 
                          'default'
                        }
                      >
                        {request.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{request.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <div className="w-6 h-6 bg-medical-red text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                          {request.bloodType}
                        </div>
                        {request.bloodType} Needed
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {request.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {request.timePosted}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {request.responses} responses
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {request.status !== 'fulfilled' && (
                      <Button className="bg-medical-red hover:bg-medical-red-dark">
                        <Heart className="h-4 w-4 mr-2" />
                        I Can Help
                      </Button>
                    )}
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Notice */}
        <Card className="mt-8 border-medical-red-light bg-medical-red-light/10">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-medical-red mt-1" />
              <div>
                <h3 className="font-semibold text-medical-red mb-2">Need to Post an Urgent Request?</h3>
                <p className="text-gray-700 mb-3">
                  If this is a medical emergency, please contact your local hospital or emergency services immediately.
                  For non-emergency requests, you can post your need here to reach our donor community.
                </p>
                <Button className="bg-medical-red hover:bg-medical-red-dark">
                  Post Blood Request
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Requests;
