
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Campaign {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
  participants: number;
  target: number;
  status: string;
}

interface CampaignDetailsModalProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
}

const CampaignDetailsModal = ({ campaign, isOpen, onClose }: CampaignDetailsModalProps) => {
  const { toast } = useToast();

  if (!campaign) return null;

  const handleShare = async () => {
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

  const handleJoin = () => {
    toast({
      title: "Joined Campaign!",
      description: "You've successfully joined this campaign.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{campaign.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-sm">
              {campaign.status.toUpperCase()}
            </Badge>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button onClick={handleJoin} className="bg-medical-red hover:bg-medical-red-dark">
                Join Campaign
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{campaign.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-600">{campaign.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-sm text-gray-600">{campaign.date} at {campaign.time}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Organizer</p>
                  <p className="text-sm text-gray-600">{campaign.organizer}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Participants</p>
                  <p className="text-sm text-gray-600">{campaign.participants} / {campaign.target}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Campaign Progress</span>
                <span>{Math.round((campaign.participants / campaign.target) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-medical-red h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${(campaign.participants / campaign.target) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignDetailsModal;
