
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Calendar, Download, Edit, Save, X } from "lucide-react";

interface UserProfileData {
  fullName: string;
  bloodGroup: string;
  email: string;
  phoneNumber: string;
  location: string;
  lastDonationDate: string;
  availabilityStatus: string;
  preferredContact: string;
  profilePicture: string;
  bio: string;
  donationCount: number;
  joinedDate: string;
  showPhone: boolean;
  showEmail: boolean;
  showLocation: boolean;
  profileVisibility: string;
}

const UserProfile = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<UserProfileData>({
    fullName: currentUser?.displayName || "",
    bloodGroup: "",
    email: currentUser?.email || "",
    phoneNumber: "",
    location: "",
    lastDonationDate: "",
    availabilityStatus: "Available Now",
    preferredContact: "email",
    profilePicture: currentUser?.photoURL || "",
    bio: "",
    donationCount: 0,
    joinedDate: "2024-01-01",
    showPhone: false,
    showEmail: true,
    showLocation: true,
    profileVisibility: "public"
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const availabilityOptions = ["Available Now", "Available Soon", "Unavailable", "Not Sure"];
  const contactMethods = ["email", "phone", "chat", "none"];
  const visibilityOptions = ["public", "donors only", "private"];

  const handleSave = () => {
    // In a real app, you'd save to Firestore here
    console.log("Saving profile data:", profileData);
    toast({
      title: "Success",
      description: "Profile updated successfully!",
    });
    setIsEditing(false);
  };

  const generateDonorCard = () => {
    // Create a simple HTML structure for the donor card
    const cardContent = `
      <div style="width: 350px; height: 220px; border: 2px solid #dc2626; border-radius: 12px; padding: 20px; background: white; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 15px;">
          <h2 style="color: #dc2626; margin: 0; font-size: 18px;">BLOOD DONOR CARD</h2>
          <div style="background: #dc2626; height: 2px; width: 100%; margin: 5px 0;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <strong>Name:</strong> <span>${profileData.fullName}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <strong>Blood Group:</strong> <span style="color: #dc2626; font-weight: bold; font-size: 18px;">${profileData.bloodGroup}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <strong>Location:</strong> <span>${profileData.location}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
          <strong>Last Donation:</strong> <span>${profileData.lastDonationDate || 'N/A'}</span>
        </div>
        <div style="text-align: center; border-top: 1px solid #ccc; padding-top: 10px;">
          <small style="color: #666;">BloodConnect Community Platform</small>
        </div>
      </div>
    `;

    // Create a new window and print
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title>Blood Donor Card</title></head>
          <body style="margin: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh;">
            ${cardContent}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profileData.profilePicture} />
              <AvatarFallback>{profileData.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{profileData.fullName}</CardTitle>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="outline" className="text-medical-red">
                  {profileData.bloodGroup || "Not Set"}
                </Badge>
                <Badge variant={profileData.availabilityStatus === "Available Now" ? "default" : "secondary"}>
                  {profileData.availabilityStatus}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={generateDonorCard}
              disabled={!profileData.bloodGroup}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Card
            </Button>
            <Button
              variant={isEditing ? "destructive" : "outline"}
              onClick={() => {
                if (isEditing) {
                  setIsEditing(false);
                } else {
                  setIsEditing(true);
                }
              }}
            >
              {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={profileData.fullName}
                onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            
            <div>
              <Label htmlFor="bloodGroup">Blood Group</Label>
              {isEditing ? (
                <select
                  className="w-full p-2 border rounded-md"
                  value={profileData.bloodGroup}
                  onChange={(e) => setProfileData({...profileData, bloodGroup: e.target.value})}
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              ) : (
                <Input value={profileData.bloodGroup || "Not set"} disabled />
              )}
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                disabled={!isEditing}
                placeholder="City, State"
              />
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                disabled={!isEditing}
                placeholder="Tell others about your motivation to donate..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact & Availability */}
        <Card>
          <CardHeader>
            <CardTitle>Contact & Availability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={profileData.phoneNumber}
                onChange={(e) => setProfileData({...profileData, phoneNumber: e.target.value})}
                disabled={!isEditing}
                placeholder="Optional"
              />
            </div>

            <div>
              <Label htmlFor="lastDonationDate">Last Donation Date</Label>
              <Input
                id="lastDonationDate"
                type="date"
                value={profileData.lastDonationDate}
                onChange={(e) => setProfileData({...profileData, lastDonationDate: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div>
              <Label htmlFor="availabilityStatus">Availability Status</Label>
              {isEditing ? (
                <select
                  className="w-full p-2 border rounded-md"
                  value={profileData.availabilityStatus}
                  onChange={(e) => setProfileData({...profileData, availabilityStatus: e.target.value})}
                >
                  {availabilityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <Input value={profileData.availabilityStatus} disabled />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="showEmail">Show Email Publicly</Label>
                <Switch
                  id="showEmail"
                  checked={profileData.showEmail}
                  onCheckedChange={(checked) => setProfileData({...profileData, showEmail: checked})}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="showPhone">Show Phone Publicly</Label>
                <Switch
                  id="showPhone"
                  checked={profileData.showPhone}
                  onCheckedChange={(checked) => setProfileData({...profileData, showPhone: checked})}
                  disabled={!isEditing}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showLocation">Show Location Publicly</Label>
                <Switch
                  id="showLocation"
                  checked={profileData.showLocation}
                  onCheckedChange={(checked) => setProfileData({...profileData, showLocation: checked})}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Profile Visibility</Label>
                {isEditing ? (
                  <select
                    className="w-full p-2 border rounded-md mt-2"
                    value={profileData.profileVisibility}
                    onChange={(e) => setProfileData({...profileData, profileVisibility: e.target.value})}
                  >
                    {visibilityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <Badge variant="outline" className="mt-2">{profileData.profileVisibility}</Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Donation Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-medical-red">{profileData.donationCount}</div>
              <div className="text-sm text-gray-600">Total Donations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-medical-blue">
                {profileData.joinedDate ? new Date().getFullYear() - new Date(profileData.joinedDate).getFullYear() : 0}
              </div>
              <div className="text-sm text-gray-600">Years Member</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {profileData.lastDonationDate ? 
                  Math.floor((new Date().getTime() - new Date(profileData.lastDonationDate).getTime()) / (1000 * 3600 * 24)) : 0}
              </div>
              <div className="text-sm text-gray-600">Days Since Last Donation</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {isEditing && (
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-medical-red hover:bg-medical-red-dark">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
