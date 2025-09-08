import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Clock } from "lucide-react";
import medicalEquipment from "@/assets/medical-equipment.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "years experience",
      description: "Of successful medical practice"
    },
    {
      icon: Users,
      number: "50+",
      label: "specialists",
      description: "Qualified physicians"
    },
    {
      icon: MapPin,
      number: "3",
      label: "locations",
      description: "Throughout the city"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "support",
      description: "Round-the-clock care"
    }
  ];

  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About MediCal Clinic
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  MediCal Clinic is a modern medical center that has been providing 
                  quality medical care for over 15 years. We have brought together the best 
                  specialists and state-of-the-art equipment for your health.
                </p>
                <p>
                  Our mission is to provide each patient with an individual approach, 
                  professional diagnosis and effective treatment in the comfortable 
                  atmosphere of a modern clinic.
                </p>
                <p>
                  We use only proven treatment methods and constantly 
                  improve our knowledge, following the latest achievements in world medicine.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-border/50 bg-secondary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button 
              variant="medical" 
              size="lg"
              onClick={() => navigate('/about-us')}
            >
              Learn more about us
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-ratio-box" style={{'--aspect-ratio': '66.67%'} as React.CSSProperties}>
              <img
                src={medicalEquipment}
                alt="Modern medical equipment"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                width="500"
                height="333"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-accent/20 w-32 h-32 rounded-full"></div>
            <div className="absolute -top-4 -left-4 bg-primary/10 w-24 h-24 rounded-full"></div>
            
            <Card className="absolute -bottom-6 -left-6 bg-background shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Award className="text-success" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Certified</div>
                    <div className="text-sm text-muted-foreground">ISO 9001:2015</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;