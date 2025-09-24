import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  IndianRupee, 
  TrendingUp, 
  Calendar, 
  Shield, 
  Droplets,
  Zap,
  Users,
  MapPin,
  Phone,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Truck,
  Store,
  Gift,
  Bell,
  Tractor
} from "lucide-react";
import farmerImage from "@/assets/farmer-success.jpg";

const CropDetails = ({ crop, farmerData }) => {
  const diseaseInfo = [
    {
      name: "Blast Disease",
      severity: "High Risk",
      symptoms: "Brown spots on leaves, neck rot",
      prevention: "Use resistant varieties, proper drainage",
      treatment: "Tricyclazole fungicide spray"
    },
    {
      name: "Stem Borer",
      severity: "Medium Risk", 
      symptoms: "Dead hearts, white ear heads",
      prevention: "Pheromone traps, clean cultivation",
      treatment: "Cartap hydrochloride application"
    }
  ];

  const fertilizers = [
    {
      name: "NPK 20:20:20",
      timing: "Basal application",
      quantity: "50 kg/acre",
      cost: 2400,
      purpose: "Overall growth and development"
    },
    {
      name: "Urea",
      timing: "Top dressing (30-40 days)",
      quantity: "35 kg/acre", 
      cost: 840,
      purpose: "Nitrogen boost for tillering"
    },
    {
      name: "DAP",
      timing: "Before transplanting",
      quantity: "25 kg/acre",
      cost: 1350,
      purpose: "Root development and early growth"
    }
  ];

  const subsidies = [
    {
      scheme: "PM-KISAN",
      amount: "₹6,000/year",
      eligibility: "All farmers",
      description: "Direct income support to farmer families"
    },
    {
      scheme: "Seed Subsidy",
      amount: "50% subsidy",
      eligibility: "Small farmers",
      description: "Subsidized certified seeds from government"
    },
    {
      scheme: "Fertilizer Subsidy",
      amount: "40-60% discount",
      eligibility: "All farmers",
      description: "Reduced prices on fertilizers through DBT"
    }
  ];

  const ngos = [
    {
      name: "Krishi Vikas Foundation",
      location: "15 km from your location",
      contact: "+91 98765 43210",
      services: "Free seeds, training programs",
      rating: "4.8/5"
    },
    {
      name: "Farm Aid NGO",
      location: "8 km from your location", 
      contact: "+91 87654 32109",
      services: "Low-cost inputs, market linkage",
      rating: "4.6/5"
    }
  ];

  const marketplaces = [
    {
      name: "eNAM Portal",
      type: "Government Platform",
      commission: "1-2%",
      features: "Direct selling, price discovery",
      url: "enam.gov.in"
    },
    {
      name: "Kisan Network",
      type: "Private Platform", 
      commission: "2-3%",
      features: "Doorstep pickup, instant payment",
      url: "kisannetwork.com"
    },
    {
      name: "Local Mandi",
      type: "Physical Market",
      commission: "3-5%", 
      features: "Traditional trading, immediate payment",
      url: "Contact local officials"
    }
  ];

  const machinery = [
    {
      name: "Mini Tractor (25 HP)",
      price: "₹4,50,000",
      subsidy: "25% available",
      vendor: "Mahindra",
      features: "Compact, fuel efficient, multi-purpose",
      emi: "₹8,500/month"
    },
    {
      name: "Rotary Tiller",
      price: "₹85,000",
      subsidy: "40% available",
      vendor: "Shaktiman",
      features: "Soil preparation, weed control",
      emi: "₹2,100/month"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/20 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {crop.name} - Complete Growing Guide
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know for successful cultivation
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-success/10 border-success/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">₹{crop.profitMargin.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Expected Profit</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">₹{crop.marketRate}</div>
              <div className="text-sm text-muted-foreground">Current Rate/Qt</div>
            </CardContent>
          </Card>
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">₹{crop.msp}</div>
              <div className="text-sm text-muted-foreground">MSP Rate/Qt</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{crop.duration}</div>
              <div className="text-sm text-muted-foreground">Growth Period</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="diseases">Diseases</TabsTrigger>
            <TabsTrigger value="fertilizers">Fertilizers</TabsTrigger>
            <TabsTrigger value="subsidies">Subsidies</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="machinery">Machinery</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Financial Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Investment Required</span>
                      <span className="font-semibold">₹{crop.investmentRequired.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Revenue</span>
                      <span className="font-semibold">₹{(crop.investmentRequired + crop.profitMargin).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-success">
                      <span>Net Profit</span>
                      <span className="font-bold">₹{crop.profitMargin.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ROI</span>
                      <span className="font-semibold text-primary">
                        {Math.round((crop.profitMargin / crop.investmentRequired) * 100)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Profit Margin</span>
                      <span className="text-sm font-semibold">{Math.round((crop.profitMargin / (crop.investmentRequired + crop.profitMargin)) * 100)}%</span>
                    </div>
                    <Progress value={Math.round((crop.profitMargin / (crop.investmentRequired + crop.profitMargin)) * 100)} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Growing Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { phase: "Land Preparation", days: "0-15 days", desc: "Ploughing, leveling, puddling" },
                      { phase: "Sowing/Transplanting", days: "15-30 days", desc: "Seed bed preparation and transplanting" },
                      { phase: "Vegetative Growth", days: "30-90 days", desc: "Tillering and stem elongation" },
                      { phase: "Reproductive Phase", days: "90-120 days", desc: "Flowering and grain filling" },
                      { phase: "Maturity & Harvest", days: "120-150 days", desc: "Harvesting and post-harvest" }
                    ].map((stage, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{stage.phase}</div>
                          <div className="text-sm text-primary">{stage.days}</div>
                          <div className="text-sm text-muted-foreground">{stage.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Diseases Tab */}
          <TabsContent value="diseases">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {diseaseInfo.map((disease, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-destructive" />
                      {disease.name}
                    </CardTitle>
                    <Badge 
                      className={disease.severity === "High Risk" ? "bg-destructive/10 text-destructive" : "bg-accent/10 text-accent"}
                    >
                      {disease.severity}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Symptoms</h4>
                      <p className="text-sm text-muted-foreground">{disease.symptoms}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Prevention</h4>
                      <p className="text-sm text-muted-foreground">{disease.prevention}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Treatment</h4>
                      <p className="text-sm text-success">{disease.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Fertilizers Tab */}
          <TabsContent value="fertilizers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fertilizers.map((fertilizer, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="h-6 w-6 text-primary" />
                      {fertilizer.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Timing</span>
                      <span className="text-sm font-semibold">{fertilizer.timing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Quantity</span>
                      <span className="text-sm font-semibold">{fertilizer.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cost</span>
                      <span className="text-sm font-semibold text-accent">₹{fertilizer.cost}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">{fertilizer.purpose}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Subsidies Tab */}
          <TabsContent value="subsidies">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subsidies.map((subsidy, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gift className="h-6 w-6 text-success" />
                      {subsidy.scheme}
                    </CardTitle>
                    <Badge className="bg-success/10 text-success">{subsidy.amount}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Eligibility</h4>
                      <p className="text-sm text-muted-foreground">{subsidy.eligibility}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Description</h4>
                      <p className="text-sm text-muted-foreground">{subsidy.description}</p>
                    </div>
                    <Button size="sm" className="w-full mt-4">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Nearby NGOs & Startup Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ngos.map((ngo, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{ngo.name}</h4>
                        <Badge variant="outline">{ngo.rating}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {ngo.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {ngo.contact}
                        </div>
                        <p className="text-primary">{ngo.services}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Tab */}
          <TabsContent value="market">
            <div className="space-y-6">
              <Alert>
                <Bell className="h-4 w-4" />
                <AlertDescription>
                  <strong>Harvest Alert:</strong> Based on your planting schedule, you'll receive marketplace 
                  recommendations 2 weeks before harvest time for optimal selling opportunities.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketplaces.map((marketplace, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Store className="h-6 w-6 text-primary" />
                        {marketplace.name}
                      </CardTitle>
                      <Badge variant="outline">{marketplace.type}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Commission</span>
                        <span className="text-sm font-semibold text-accent">{marketplace.commission}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Features</h4>
                        <p className="text-sm text-muted-foreground">{marketplace.features}</p>
                      </div>
                      <Button size="sm" className="w-full" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit {marketplace.url}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Machinery Tab */}
          <TabsContent value="machinery">
            <div className="space-y-6">
              <Alert>
                <Truck className="h-4 w-4" />
                <AlertDescription>
                  <strong>Budget-Based Recommendations:</strong> Based on your budget of ₹{farmerData?.budget ? farmerData.budget.toLocaleString() : "N/A"}, 
                  here are suitable machinery options with financing details.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {machinery.map((machine, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Tractor className="h-6 w-6 text-primary" />
                        {machine.name}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge className="bg-success/10 text-success">{machine.subsidy}</Badge>
                        <Badge variant="outline">{machine.vendor}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Price</span>
                          <div className="font-semibold text-lg">{machine.price}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">EMI</span>
                          <div className="font-semibold text-lg text-accent">{machine.emi}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Features</h4>
                        <p className="text-sm text-muted-foreground">{machine.features}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Get Quote
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Compare
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CropDetails;