
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Heart, MessageCircle } from "lucide-react";

const FindDonors = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock donor data
  const allDonors = [
    {
      id: 1,
      name: "Sarah Johnson",
      bloodType: "O+",
      location: "New York, NY",
      lastDonation: "2 months ago",
      available: true,
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      bloodType: "A+",
      location: "Brooklyn, NY",
      lastDonation: "1 month ago",
      available: true,
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      bloodType: "B-",
      location: "Queens, NY",
      lastDonation: "3 weeks ago",
      available: false,
      verified: true
    },
    {
      id: 4,
      name: "David Wilson",
      bloodType: "O+",
      location: "Manhattan, NY",
      lastDonation: "6 weeks ago",
      available: true,
      verified: true
    },
    {
      id: 5,
      name: "Lisa Park",
      bloodType: "A+",
      location: "Staten Island, NY",
      lastDonation: "1 week ago",
      available: false,
      verified: true
    }
  ];

  const [donors, setDonors] = useState(allDonors);
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      let filtered = allDonors;
      
      // Filter by blood type
      if (selectedBloodType) {
        filtered = filtered.filter(donor => donor.bloodType === selectedBloodType);
      }
      
      // Filter by location
      if (searchLocation) {
        filtered = filtered.filter(donor => 
          donor.location.toLowerCase().includes(searchLocation.toLowerCase())
        );
      }
      
      setDonors(filtered);
      setIsSearching(false);
    }, 500);
  };

  const resetSearch = () => {
    setSearchLocation("");
    setSelectedBloodType("");
    setDonors(allDonors);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Blood Donors</h1>
          <p className="text-gray-600 text-lg">
            Search for verified blood donors in your area who are ready to help.
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5 text-medical-red" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Type Needed
                </label>
                <Select value={selectedBloodType} onValueChange={setSelectedBloodType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  placeholder="City, State or ZIP"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full bg-medical-red hover:bg-medical-red-dark"
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {isSearching ? "Searching..." : "Search Donors"}
                </Button>
              </div>
              
              <div className="flex items-end">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={resetSearch}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {donors.length === 0 ? "No donors found" : `Available Donors (${donors.length})`}
            </h2>
            <Select defaultValue="nearest">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nearest">Nearest First</SelectItem>
                <SelectItem value="recent">Recently Active</SelectItem>
                <SelectItem value="compatible">Most Compatible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {donors.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No donors found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or check back later for new donors.
                </p>
                <Button onClick={resetSearch} variant="outline">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            donors.map((donor) => (
              <Card key={donor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-medical-red-light rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-medical-red" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{donor.name}</h3>
                          {donor.verified && (
                            <Badge variant="secondary" className="bg-medical-green text-white">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <div className="w-8 h-8 bg-medical-red text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                              {donor.bloodType}
                            </div>
                            {donor.bloodType} Blood Type
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {donor.location}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Last donation: {donor.lastDonation}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                      <Badge 
                        variant={donor.available ? "default" : "secondary"}
                        className={donor.available ? "bg-medical-green" : "bg-gray-400"}
                      >
                        {donor.available ? "Available" : "Recently Donated"}
                      </Badge>
                      {donor.available && (
                        <Button size="sm" className="bg-medical-blue hover:bg-blue-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Emergency Notice */}
        <Card className="mt-8 border-medical-red-light bg-medical-red-light/10">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-medical-red mt-1" />
              <div>
                <h3 className="font-semibold text-medical-red mb-2">Emergency Donation Needed?</h3>
                <p className="text-gray-700 mb-3">
                  If this is a medical emergency, please contact your local hospital or emergency services immediately.
                </p>
                <Button variant="outline" className="border-medical-red text-medical-red hover:bg-medical-red-light">
                  Post Urgent Request
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

export default FindDonors;
