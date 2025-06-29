
import { Heart, Search, MessageCircle, Users, Bell, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Find Donors Instantly",
      description: "Search for blood donors by blood type, location, and availability in real-time.",
      color: "text-medical-red"
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Connect with other donors and recipients through secure messaging and group chats.",
      color: "text-medical-blue"
    },
    {
      icon: Heart,
      title: "Share Your Story",
      description: "Write blogs about your donation journey, share tips, and inspire others to donate.",
      color: "text-medical-red"
    },
    {
      icon: Users,
      title: "Request Network",
      description: "Post blood donation requests and get responses from willing donors in your area.",
      color: "text-medical-green"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get notified about new requests, messages, and when you're eligible to donate again.",
      color: "text-medical-blue"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your privacy is protected with secure authentication and verified donor profiles.",
      color: "text-medical-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BloodConnect?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to connect, communicate, and coordinate blood donations 
            in your local community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
