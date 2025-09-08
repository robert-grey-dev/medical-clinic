import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Activity,
  UserCheck,
  Microscope 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Primary Care / Internal Medicine",
      description: "Routine checkups, chronic disease management, preventive care",
      features: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Care"]
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart health, ECG, echocardiogram, Holter monitoring",
      features: ["ECG", "Echocardiogram", "Holter Monitoring"]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Diagnosis and treatment of nervous system conditions, consultations, rehabilitation",
      features: ["Neurological Consultations", "Diagnostic Testing", "Rehabilitation Services"]
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Vision exams, treatment, minor eye procedures",
      features: ["Comprehensive Eye Exams", "Vision Testing", "Minor Procedures"]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Bone & joint care, injuries, rehabilitation",
      features: ["Injury Treatment", "Joint Care", "Physical Therapy"]
    },
    {
      icon: Activity,
      title: "Imaging & Laboratory Services",
      description: "Ultrasound, X-ray, blood work, biochemistry, hormone testing",
      features: ["Ultrasound & X-Ray", "Blood Work", "Hormone Testing"]
    },
    {
      icon: UserCheck,
      title: "Preventive Care & Annual Checkups",
      description: "Physicals, screenings, vaccinations, medical clearance for school/work",
      features: ["Annual Physicals", "Health Screenings", "Vaccinations"]
    }
  ];

  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide a full spectrum of medical services using 
            modern equipment and advanced treatment methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 flex flex-col h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl text-foreground mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                    onClick={() => {
                      const routes = {
                        "Primary Care / Internal Medicine": "/internal-medicine",
                        "Cardiology": "/cardiology", 
                        "Neurology": "/neurology",
                        "Ophthalmology": "/ophthalmology",
                        "Orthopedics": "/orthopedics",
                        "Imaging & Laboratory Services": "/diagnostics",
                        "Preventive Care & Annual Checkups": "/preventive-care"
                      };
                      const route = routes[service.title as keyof typeof routes];
                      if (route) {
                        navigate(route);
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;