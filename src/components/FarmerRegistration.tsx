import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { UserCheck, MapPin, IndianRupee, Users, History, Tractor, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FarmerRegistration = ({ onComplete }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    identityNo: "",
    farmSize: "",
    budget: "",
    workingMembers: "",
    cropHistory: "",
    machinery: []
  });

  const machineryOptions = [
    "Tractor", "Plough", "Seed Drill", "Cultivator", "Harvester", 
    "Thresher", "Pump Set", "Sprayer", "Disc Harrow", "Rotavator"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMachineryChange = (machinery, checked) => {
    setFormData(prev => ({
      ...prev,
      machinery: checked 
        ? [...prev.machinery, machinery]
        : prev.machinery.filter(m => m !== machinery)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.location || !formData.identityNo || !formData.farmSize) {
      toast({
        title: "Please fill required fields",
        description: "Name, location, identity number, and farm size are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "Your farm details have been analyzed. View your crop recommendations.",
    });

    onComplete(formData);
  };

  return (
    <div className="min-h-screen bg-secondary/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Farmer Registration
          </h2>
          <p className="text-xl text-muted-foreground">
            Help us understand your farming needs to provide personalized recommendations
          </p>
        </div>

        <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-6 w-6 text-primary" />
              Farm Details & Requirements
            </CardTitle>
            <CardDescription>
              All information is secure and used only for generating personalized crop recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Location *
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="Village, District, State"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              {/* Identity & Farm Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="identityNo" className="text-base font-medium">
                    Valid Identity Number *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("identityType", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select ID type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                      <SelectItem value="voter">Voter ID</SelectItem>
                      <SelectItem value="driving">Driving License</SelectItem>
                      <SelectItem value="pan">PAN Card</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="identityNo"
                    value={formData.identityNo}
                    onChange={(e) => handleInputChange("identityNo", e.target.value)}
                    placeholder="Enter identity number"
                    className="h-12 mt-2"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farmSize" className="text-base font-medium">
                    Farm Size (in acres) *
                  </Label>
                  <Input
                    id="farmSize"
                    type="number"
                    value={formData.farmSize}
                    onChange={(e) => handleInputChange("farmSize", e.target.value)}
                    placeholder="e.g., 5.5"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              {/* Budget & Members */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base font-medium flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-primary" />
                    Available Budget (₹)
                  </Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    placeholder="e.g., 50000"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workingMembers" className="text-base font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Working Members
                  </Label>
                  <Input
                    id="workingMembers"
                    type="number"
                    value={formData.workingMembers}
                    onChange={(e) => handleInputChange("workingMembers", e.target.value)}
                    placeholder="Number of family members working"
                    className="h-12"
                  />
                </div>
              </div>

              {/* Crop History */}
              <div className="space-y-2">
                <Label htmlFor="cropHistory" className="text-base font-medium flex items-center gap-2">
                  <History className="h-4 w-4 text-primary" />
                  Previous Crop History
                </Label>
                <Textarea
                  id="cropHistory"
                  value={formData.cropHistory}
                  onChange={(e) => handleInputChange("cropHistory", e.target.value)}
                  placeholder="List crops grown in previous seasons, yields, any issues faced..."
                  className="min-h-24"
                />
              </div>

              {/* Available Machinery */}
              <div className="space-y-4">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Tractor className="h-4 w-4 text-primary" />
                  Available Machinery & Equipment
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {machineryOptions.map((machinery) => (
                    <div key={machinery} className="flex items-center space-x-2">
                      <Checkbox
                        id={machinery}
                        checked={formData.machinery.includes(machinery)}
                        onCheckedChange={(checked) => handleMachineryChange(machinery, checked)}
                      />
                      <Label
                        htmlFor={machinery}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {machinery}
                      </Label>
                    </div>
                  ))}
                </div>
                {formData.machinery.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.machinery.map((machine) => (
                      <Badge key={machine} variant="secondary" className="bg-primary/10 text-primary">
                        {machine}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 shadow-lg"
                >
                  Generate Crop Recommendations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmerRegistration;