
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, User } from "lucide-react";

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "My Life-Saving Blood Donation Experience",
      excerpt: "How donating blood changed my perspective on helping others...",
      author: "Sarah Johnson",
      date: "2 days ago",
      category: "Success Stories",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: "Tips for First-Time Blood Donors",
      excerpt: "Everything you need to know before your first donation...",
      author: "Dr. Michael Chen",
      date: "1 week ago",
      category: "Tips",
      likes: 18,
      comments: 12
    },
    {
      id: 3,
      title: "Blood Donation Myths Debunked",
      excerpt: "Separating fact from fiction about blood donation...",
      author: "Emily Rodriguez",
      date: "2 weeks ago",
      category: "Education",
      likes: 31,
      comments: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Blog</h1>
          <p className="text-gray-600 text-lg">
            Share your stories, tips, and experiences with the blood donation community.
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
  <div className="flex flex-wrap gap-2">
    <Badge variant="outline">All Posts</Badge>
    <Badge variant="outline">Success Stories</Badge>
    <Badge variant="outline">Tips</Badge>
    <Badge variant="outline">Education</Badge>
  </div>
  <Button className="bg-medical-red hover:bg-medical-red-dark w-full sm:w-auto">
    Write a Post
  </Button>
</div>


        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span>{post.date}</span>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
          <CardContent>
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
   <div className="flex flex-wrap gap-2">
  <Button variant="ghost" size="sm" className="flex-1 min-w-[30%]">
    <Heart className="h-4 w-4 mr-1" />
    {post.likes}
  </Button>
  <Button variant="ghost" size="sm" className="flex-1 min-w-[30%]">
    <MessageCircle className="h-4 w-4 mr-1" />
    {post.comments}
  </Button>
  <Button variant="ghost" size="sm" className="flex-1 min-w-[30%]">
    <Share2 className="h-4 w-4 mr-1" />
    Share
  </Button>
</div>

    <Button variant="outline" className="w-full sm:w-auto">
      Read More
    </Button>
  </div>
</CardContent>

            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
