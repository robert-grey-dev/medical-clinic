import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bone, 
  Activity, 
  Shield, 
  Zap,
  Heart,
  Users,
  Award,
  Clock
} from "lucide-react";

const Orthopedics = () => {
  const services = [
    {
      icon: Bone,
      title: "Joint Replacement",
      description: "Advanced hip, knee, and shoulder replacement surgeries",
      features: ["Minimally invasive techniques", "Faster recovery", "Latest implant technology", "Physical therapy support"],
      price: "Consultation from $200"
    },
    {
      icon: Activity,
      title: "Sports Medicine",
      description: "Treatment and prevention of sports-related injuries",
      features: ["ACL reconstruction", "Rotator cuff repair", "Meniscus surgery", "Athletic performance optimization"],
      price: "Consultation from $150"
    },
    {
      icon: Shield,
      title: "Trauma Surgery",
      description: "Emergency and complex fracture treatments",
      features: ["24/7 emergency care", "Complex fracture repair", "Multi-trauma management", "Microsurgery"],
      price: "Emergency consultation"
    },
    {
      icon: Zap,
      title: "Spine Surgery",
      description: "Comprehensive spinal disorder treatment",
      features: ["Herniated disc surgery", "Spinal fusion", "Minimally invasive procedures", "Pain management"],
      price: "Consultation from $250"
    },
    {
      icon: Heart,
      title: "Pediatric Orthopedics",
      description: "Specialized care for children's musculoskeletal conditions",
      features: ["Growth plate disorders", "Scoliosis treatment", "Congenital conditions", "Family-centered care"],
      price: "Consultation from $180"
    },
    {
      icon: Users,
      title: "Physical Therapy",
      description: "Comprehensive rehabilitation and recovery programs",
      features: ["Post-surgical rehabilitation", "Injury prevention", "Strength training", "Pain management"],
      price: "Session from $80"
    }
  ];

  const conditions = [
    "Arthritis and joint pain",
    "Fractures and dislocations",
    "Sports injuries",
    "Back and neck pain",
    "Carpal tunnel syndrome",
    "Tendon and ligament injuries",
    "Osteoporosis",
    "Scoliosis and spinal deformities"
  ];

  const team = [
    {
      name: "Dr. Michael Johnson",
      specialty: "Orthopedic Surgeon",
      experience: "15+ years",
      education: "Harvard Medical School"
    },
    {
      name: "Dr. Sarah Williams",
      specialty: "Sports Medicine",
      experience: "12+ years",
      education: "Johns Hopkins University"
    },
    {
      name: "Dr. Robert Chen",
      specialty: "Spine Surgery",
      experience: "18+ years",
      education: "Stanford University"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Orthopedic Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive orthopedic care from diagnosis to rehabilitation. Our expert team specializes in treating musculoskeletal conditions with advanced surgical and non-surgical approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Orthopedic Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete range of orthopedic treatments using the latest techniques and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-primary">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Conditions We Treat
              </h2>
              <p className="text-xl text-muted-foreground">
                Our orthopedic specialists treat a wide range of musculoskeletal conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center p-4 bg-background rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Orthopedic Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Board-certified specialists with extensive experience in orthopedic care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((doctor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={40} />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center">
                      <Award className="mr-2" size={16} />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock className="mr-2" size={16} />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Why Choose Our Orthopedic Care?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Surgeons</h3>
                <p className="text-muted-foreground text-sm">Board-certified specialists with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Advanced Technology</h3>
                <p className="text-muted-foreground text-sm">Latest surgical equipment and minimally invasive techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalized Care</h3>
                <p className="text-muted-foreground text-sm">Individual treatment plans tailored to your needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Recovery</h3>
                <p className="text-muted-foreground text-sm">Comprehensive rehabilitation programs for quick recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Orthopedics;