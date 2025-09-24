import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sprout, 
  Users, 
  TrendingUp, 
  Shield, 
  Bell, 
  ShoppingCart,
  Tractor,
  MapPin,
  IndianRupee,
  Calendar,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";
import cropsImage from "@/assets/crops-variety.jpg";
import farmerImage from "@/assets/farmer-success.jpg";
import FarmerRegistration from "@/components/FarmerRegistration";
import CropRecommendations from "@/components/CropRecommendations";
import CropDetails from "@/components/CropDetails";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [farmerData, setFarmerData] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const features = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Smart Crop Recommendations",
      description: "Get personalized crop suggestions based on your farm details, budget, and local conditions."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Intelligence",
      description: "Access real-time MSP rates, market prices, and profit projections for informed decisions."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Disease Management",
      description: "Identify potential diseases, get prevention tips, and optimal fertilizer recommendations."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Harvest Notifications",
      description: "Receive timely alerts for next crop cycles and harvest scheduling 2 weeks in advance."
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Direct Market Access",
      description: "Connect with marketplaces and buyers to sell your produce directly at better prices."
    },
    {
      icon: <Tractor className="h-8 w-8" />,
      title: "Machinery Recommendations",
      description: "Get budget-friendly machinery suggestions with direct purchase links and comparisons."
    }
  ];

  const handleRegistrationComplete = (data) => {
    setFarmerData(data);
    setCurrentTab("recommendations");
  };

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    setCurrentTab("details");
  };

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sprout className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary">CropGuide</h1>
              </div>
              <TabsList className="grid w-fit grid-cols-4">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="recommendations" disabled={!farmerData}>Crops</TabsTrigger>
                <TabsTrigger value="details" disabled={!selectedCrop}>Details</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </header>

        {/* Home Tab */}
        <TabsContent value="home" className="mt-0">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
            </div>
            <div className="relative container mx-auto px-4 py-20">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Smart India Hackathon 2024
                </Badge>
                <h2 className="text-5xl font-bold text-primary-foreground mb-6">
                  Empowering Farmers with Smart Agricultural Guidance
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  CropGuide provides personalized crop recommendations, market intelligence, 
                  and comprehensive farming support to maximize your agricultural success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
                    onClick={() => setCurrentTab("register")}
                  >
                    Get Started
                    <Sprout className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Comprehensive Agricultural Support
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From crop selection to harvest and beyond - we guide you through every step of your farming journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  How CropGuide Works
                </h3>
                <p className="text-xl text-muted-foreground">
                  Simple steps to transform your farming experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Register", desc: "Fill in your farm details and requirements", icon: <Users className="h-6 w-6" /> },
                  { step: "02", title: "Analyze", desc: "Our AI analyzes your data for optimal recommendations", icon: <TrendingUp className="h-6 w-6" /> },
                  { step: "03", title: "Choose", desc: "Select from personalized crop suggestions", icon: <Sprout className="h-6 w-6" /> },
                  { step: "04", title: "Succeed", desc: "Get ongoing support until harvest and beyond", icon: <Award className="h-6 w-6" /> }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="mb-6 mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:bg-accent transition-colors">
                      {item.step}
                    </div>
                    <div className="mb-4 text-primary mx-auto w-fit">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Farming?
              </h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Join thousands of farmers already using CropGuide to maximize their harvest and profits.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setCurrentTab("register")}
              >
                Start Your Journey
                <Sprout className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </TabsContent>

        {/* Registration Tab */}
        <TabsContent value="register" className="mt-0">
          <FarmerRegistration onComplete={handleRegistrationComplete} />
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="mt-0">
          {farmerData && (
            <CropRecommendations 
              farmerData={farmerData} 
              onCropSelect={handleCropSelect}
            />
          )}
        </TabsContent>

        {/* Details Tab */}
        <TabsContent value="details" className="mt-0">
          {selectedCrop && (
            <CropDetails 
              crop={selectedCrop} 
              farmerData={farmerData}
            />
          )}
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-6 w-6" />
                <span className="text-xl font-bold">CropGuide</span>
              </div>
              <p className="text-primary-foreground/80">
                Empowering farmers with intelligent agricultural guidance and market insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Crop Recommendations</li>
                <li>Market Intelligence</li>
                <li>Disease Management</li>
                <li>Harvest Alerts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Government Subsidies</li>
                <li>NGO Partnerships</li>
                <li>Startup Campaigns</li>
                <li>Direct Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-primary-foreground/80">
                Smart India Hackathon 2024<br />
                Agricultural Innovation Team
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 CropGuide. Built for Smart India Hackathon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;