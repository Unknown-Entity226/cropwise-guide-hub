import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Sprout, 
  TrendingUp, 
  Calendar, 
  IndianRupee, 
  Droplets,
  Sun,
  ThermometerSun,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import cropsImage from "@/assets/crops-variety.jpg";

const CropRecommendations = ({ farmerData, onCropSelect }) => {
  // Sample crop data based on typical Indian farming scenarios
  const cropRecommendations = [
    {
      id: 1,
      name: "Rice (Basmati)",
      season: "Kharif",
      suitability: 95,
      profitPotential: "High",
      duration: "120-150 days",
      waterRequirement: "High",
      msp: 2060,
      marketRate: 2800,
      investmentRequired: 35000,
      expectedYield: "18-22 quintals/acre",
      profitMargin: 45000,
      difficulty: "Medium",
      riskLevel: "Low",
      reasons: [
        "Suitable for your 5+ acre farm",
        "Good water availability in your region",
        "Strong market demand",
        "Government MSP guarantee"
      ],
      tags: ["Government Support", "High Demand", "Water Available"]
    },
    {
      id: 2,
      name: "Cotton (BT)",
      season: "Kharif",
      suitability: 88,
      profitPotential: "Very High",
      duration: "180-200 days",
      waterRequirement: "Medium",
      msp: 6080,
      marketRate: 7200,
      investmentRequired: 45000,
      expectedYield: "8-12 quintals/acre",
      profitMargin: 65000,
      difficulty: "High",
      riskLevel: "Medium",
      reasons: [
        "High profit margins",
        "Export potential",
        "Suitable climate conditions",
        "Available machinery support"
      ],
      tags: ["Export Quality", "High Profit", "Tech Support"]
    },
    {
      id: 3,
      name: "Wheat (HD-2967)",
      season: "Rabi",
      suitability: 82,
      profitPotential: "Medium",
      duration: "110-130 days",
      waterRequirement: "Medium",
      msp: 2275,
      marketRate: 2500,
      investmentRequired: 25000,
      expectedYield: "20-25 quintals/acre",
      profitMargin: 30000,
      difficulty: "Low",
      riskLevel: "Low",
      reasons: [
        "Easy to grow and manage",
        "Stable market prices",
        "Low investment required",
        "Suitable for beginners"
      ],
      tags: ["Low Risk", "Stable Market", "Easy Growing"]
    },
    {
      id: 4,
      name: "Sugarcane",
      season: "Annual",
      suitability: 75,
      profitPotential: "High",
      duration: "300-365 days",
      waterRequirement: "Very High",
      msp: 350,
      marketRate: 380,
      investmentRequired: 55000,
      expectedYield: "300-400 quintals/acre",
      profitMargin: 85000,
      difficulty: "High",
      riskLevel: "Medium",
      reasons: [
        "Long-term crop with high returns",
        "Sugar mill contracts available",
        "Government support schemes",
        "Multiple harvest cycles"
      ],
      tags: ["Annual Crop", "Mill Contracts", "High Returns"]
    }
  ];

  const getSuitabilityColor = (suitability) => {
    if (suitability >= 90) return "text-success";
    if (suitability >= 80) return "text-accent";
    if (suitability >= 70) return "text-primary";
    return "text-muted-foreground";
  };

  const getRiskColor = (risk) => {
    if (risk === "Low") return "bg-success/10 text-success";
    if (risk === "Medium") return "bg-accent/10 text-accent";
    return "bg-destructive/10 text-destructive";
  };

  return (
    <div className="min-h-screen bg-secondary/20 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Personalized Crop Recommendations
          </h2>
          <p className="text-xl text-muted-foreground">
            Based on your farm details: {farmerData?.farmSize} acres in {farmerData?.location}
          </p>
        </div>

        {/* Farm Summary Card */}
        <Card className="mb-8 shadow-soft bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              Your Farm Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{farmerData?.farmSize || "0"}</div>
                <div className="text-sm text-muted-foreground">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹{farmerData?.budget ? (farmerData.budget / 1000) + "K" : "0"}</div>
                <div className="text-sm text-muted-foreground">Budget</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{farmerData?.workingMembers || "0"}</div>
                <div className="text-sm text-muted-foreground">Workers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{farmerData?.machinery?.length || "0"}</div>
                <div className="text-sm text-muted-foreground">Machinery</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cropRecommendations.map((crop) => (
            <Card 
              key={crop.id} 
              className="shadow-soft hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Sprout className="h-6 w-6 text-primary" />
                      {crop.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      {crop.season} Season • {crop.duration}
                    </CardDescription>
                  </div>
                  <Badge className={`${getSuitabilityColor(crop.suitability)} font-semibold`}>
                    {crop.suitability}% Match
                  </Badge>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Suitability Score</span>
                    <span className={getSuitabilityColor(crop.suitability)}>
                      {crop.suitability}%
                    </span>
                  </div>
                  <Progress value={crop.suitability} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 text-success font-semibold">
                      <IndianRupee className="h-4 w-4" />
                      ₹{crop.profitMargin.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Expected Profit</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="font-semibold text-primary">{crop.expectedYield}</div>
                    <div className="text-sm text-muted-foreground">Expected Yield</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 font-semibold">
                      <IndianRupee className="h-4 w-4" />
                      {crop.marketRate}
                    </div>
                    <div className="text-sm text-muted-foreground">Market Rate/Qt</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <Badge className={getRiskColor(crop.riskLevel)} variant="outline">
                      {crop.riskLevel} Risk
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-1">Risk Level</div>
                  </div>
                </div>

                {/* Why Recommended */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Why We Recommend This
                  </h4>
                  <div className="space-y-2">
                    {crop.reasons.map((reason, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {crop.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  onClick={() => onCropSelect(crop)}
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  View Detailed Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-8 shadow-soft bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <AlertTriangle className="h-6 w-6" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Market Prices</h5>
                <p className="text-muted-foreground">
                  Prices shown are current market averages and may vary by location and quality.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Weather Dependency</h5>
                <p className="text-muted-foreground">
                  All recommendations assume normal weather conditions. Monitor forecasts regularly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropRecommendations;