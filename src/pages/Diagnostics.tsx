import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Microscope, 
  Zap, 
  Eye, 
  Brain,
  Heart,
  Stethoscope,
  FileText
} from "lucide-react";

const Diagnostics = () => {
  const diagnosticServices = [
    {
      icon: Activity,
      title: "Ultrasound Diagnostics",
      description: "High-resolution ultrasound imaging for accurate diagnosis",
      features: ["Abdominal ultrasound", "Cardiac echo", "Vascular studies", "Pregnancy monitoring"],
      price: "From $150"
    },
    {
      icon: Zap,
      title: "X-Ray Imaging",
      description: "Digital radiography with immediate results",
      features: ["Chest X-rays", "Bone imaging", "Joint studies", "Emergency diagnostics"],
      price: "From $80"
    },
    {
      icon: Microscope,
      title: "Laboratory Tests",
      description: "Comprehensive blood and urine analysis",
      features: ["Complete blood count", "Biochemistry panel", "Hormone levels", "Infection markers"],
      price: "From $50"
    },
    {
      icon: Heart,
      title: "Cardiology Diagnostics",
      description: "Advanced cardiac function assessment",
      features: ["ECG", "Holter monitoring", "Stress testing", "Echocardiogram"],
      price: "From $200"
    },
    {
      icon: Brain,
      title: "Neurological Testing",
      description: "Brain and nervous system evaluation",
      features: ["EEG", "Nerve conduction", "Cognitive assessment", "Reflexes testing"],
      price: "From $300"
    },
    {
      icon: Eye,
      title: "Vision Diagnostics",
      description: "Complete eye examination and vision testing",
      features: ["Visual acuity", "Retinal examination", "Glaucoma screening", "Color vision"],
      price: "From $120"
    }
  ];

  const equipment = [
    {
      name: "Siemens Ultrasound System",
      description: "State-of-the-art imaging technology"
    },
    {
      name: "Digital X-Ray Machine",
      description: "Low radiation, high-quality images"
    },
    {
      name: "Automated Lab Analyzers",
      description: "Fast and accurate test results"
    },
    {
      name: "ECG & Holter Systems",
      description: "24/7 cardiac monitoring capability"
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
              Advanced Medical Diagnostics
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              State-of-the-art diagnostic equipment and experienced specialists for accurate diagnosis and early detection of diseases.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Diagnostic Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of diagnostic procedures using the latest medical technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticServices.map((service, index) => {
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

      {/* Equipment Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Modern Equipment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use the latest medical equipment to ensure accurate and reliable diagnostic results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Preparing for Your Test
              </h2>
              <p className="text-xl text-muted-foreground">
                Important information to help you prepare for diagnostic procedures
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 text-primary" size={24} />
                    General Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Bring a valid ID and insurance card</li>
                    <li>• Arrive 15 minutes before your appointment</li>
                    <li>• Wear comfortable, loose-fitting clothing</li>
                    <li>• Inform us of any medications you're taking</li>
                    <li>• Let us know about any allergies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 text-primary" size={24} />
                    Special Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Fasting may be required for some blood tests</li>
                    <li>• Remove jewelry and metal objects for X-rays</li>
                    <li>• Avoid caffeine before cardiac tests</li>
                    <li>• Follow specific prep instructions if provided</li>
                    <li>• Ask questions if you're unsure about anything</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diagnostics;