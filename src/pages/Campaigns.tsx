import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreateCampaignModal from "@/components/CreateCampaignModal";
import CampaignDetailsModal from "@/components/CampaignDetailsModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Users, Share2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Campaigns = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const { toast } = useToast();

  // Mock campaign data
  const campaigns = [
    {
      id: 1,
      title: "Community Blood Drive - Manhattan",
      description: "Join us for a community blood drive to help local hospitals meet their blood supply needs.",
      location: "Central Park Community Center, Manhattan, NY",
      date: "December 15, 2024",
      time: "9:00 AM - 5:00 PM",
      organizer: "NYC Blood Center",
      participants: 45,
      target: 100,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Holiday Blood Donation Campaign",
      description: "Help save lives during the holiday season. Every donation can save up to three lives.",
      location: "Brooklyn Methodist Hospital, Brooklyn, NY",
      date: "December 20, 2024",
      time: "10:00 AM - 4:00 PM",
      organizer: "Brooklyn Medical Alliance",
      participants: 23,
      target: 75,
      status: "upcoming"
    },
    {
      id: 3,
      title: "New Year Blood Drive",
      description: "Start the new year by giving the gift of life. Join our New Year blood donation campaign.",
      location: "Queens Community Hospital, Queens, NY",
      date: "January 5, 2025",
      time: "8:00 AM - 6:00 PM",
      organizer: "Queens Health Network",
      participants: 12,
      target: 80,
      status: "upcoming"
    }
  ];

  const handleShare = async (campaign: any, event: React.MouseEvent) => {
    event.stopPropagation();
    const shareUrl = `${window.location.origin}/campaigns/${campaign.id}`;
    const shareText = `Join the "${campaign.title}" blood donation campaign on ${campaign.date}!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: campaign.title,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast({
          title: "Link copied!",
          description: "Campaign link copied to clipboard.",
        });
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast({
          title: "Link copied!",
          description: "Campaign link copied to clipboard.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to copy link. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleViewDetails = (campaign: any) => {
    setSelectedCampaign(campaign);
    setDetailsModalOpen(true);
  };

  const handleJoinCampaign = (campaign: any, event: React.MouseEvent) => {
    event.stopPropagation();
    toast({
      title: "Joined Campaign!",
      description: `You've successfully joined "${campaign.title}".`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blood Donation Campaigns</h1>
          <p className="text-gray-600 text-lg">
            Join organized blood donation drives and campaigns in your community.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Search campaigns..." />
              <Input placeholder="Location (City, State)" />
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">Filter by Date</Button>
                <Button className="bg-medical-red hover:bg-medical-red-dark">Search</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <Badge variant="outline">All Campaigns</Badge>
            <Badge variant="secondary">This Week</Badge>
            <Badge variant="secondary">This Month</Badge>
            <Badge variant="secondary">Nearby</Badge>
          </div>
          <Button 
            className="bg-medical-red hover:bg-medical-red-dark"
            onClick={() => setCreateModalOpen(true)}
          >
            Create Campaign
          </Button>
        </div>

        <div className="space-y-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{campaign.title}</CardTitle>
                    <p className="text-gray-600 mb-3">{campaign.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {campaign.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {campaign.date} at {campaign.time}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Organized by {campaign.organizer}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {campaign.participants}/{campaign.target} participants
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {campaign.status.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{campaign.participants}/{campaign.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-medical-red h-2 rounded-full" 
                      style={{ width: `${(campaign.participants / campaign.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button 
                      className="bg-medical-red hover:bg-medical-red-dark"
                      onClick={(e) => handleJoinCampaign(campaign, e)}
                    >
                      Join Campaign
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={(e) => handleShare(campaign, e)}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  <Button 
                    variant="ghost"
                    onClick={() => handleViewDetails(campaign)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Campaign CTA */}
        <Card className="mt-8 border-medical-blue bg-medical-blue/5">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-semibold text-medical-blue mb-2 text-lg">Want to Organize a Campaign?</h3>
              <p className="text-gray-700 mb-4">
                Create your own blood donation drive and help coordinate donors in your community.
              </p>
              <Button 
                className="bg-medical-blue hover:bg-blue-700"
                onClick={() => setCreateModalOpen(true)}
              >
                Create New Campaign
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
      
      <CreateCampaignModal 
        isOpen={createModalOpen} 
        onClose={() => setCreateModalOpen(false)} 
      />
      
      <CampaignDetailsModal
        campaign={selectedCampaign}
        isOpen={detailsModalOpen}
        onClose={() => {
          setDetailsModalOpen(false);
          setSelectedCampaign(null);
        }}
      />
    </div>
  );
};

export default Campaigns;
