import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Activity, 
  Zap, 
  Heart,
  Clock,
  Users,
  Award,
  Shield,
  Stethoscope,
  FileText
} from "lucide-react";

const Neurology = () => {
  const services = [
    {
      icon: Brain,
      title: "Stroke Treatment",
      description: "Emergency and rehabilitation care for stroke patients",
      features: ["24/7 stroke center", "Clot removal therapy", "Rehabilitation programs", "Prevention strategies"],
      price: "Emergency consultation"
    },
    {
      icon: Activity,
      title: "Epilepsy Management",
      description: "Comprehensive seizure disorder diagnosis and treatment",
      features: ["EEG monitoring", "Medication management", "Surgical options", "Lifestyle counseling"],
      price: "Consultation from $250"
    },
    {
      icon: Zap,
      title: "Migraine & Headache",
      description: "Advanced treatment for chronic headache conditions",
      features: ["Trigger identification", "Preventive therapy", "Botox injections", "Lifestyle modification"],
      price: "Consultation from $200"
    },
    {
      icon: Brain,
      title: "Movement Disorders",
      description: "Treatment for Parkinson's and other movement conditions",
      features: ["Deep brain stimulation", "Medication optimization", "Physical therapy", "Support groups"],
      price: "Consultation from $300"
    },
    {
      icon: Shield,
      title: "Memory Disorders",
      description: "Alzheimer's and dementia evaluation and care",
      features: ["Cognitive testing", "Early detection", "Treatment planning", "Family support"],
      price: "Consultation from $280"
    },
    {
      icon: Activity,
      title: "Neuropathy Treatment",
      description: "Peripheral nerve disorder diagnosis and management",
      features: ["Nerve conduction studies", "Pain management", "Physical therapy", "Medication therapy"],
      price: "Consultation from $220"
    }
  ];

  const conditions = [
    "Stroke and TIA",
    "Epilepsy and seizures",
    "Migraine and headaches",
    "Parkinson's disease",
    "Multiple sclerosis",
    "Alzheimer's disease",
    "Peripheral neuropathy",
    "Brain tumors",
    "Sleep disorders",
    "Vertigo and dizziness"
  ];

  const diagnostics = [
    {
      name: "EEG (Electroencephalogram)",
      description: "Brain wave monitoring and analysis"
    },
    {
      name: "EMG/NCS",
      description: "Muscle and nerve function testing"
    },
    {
      name: "MRI Brain Imaging",
      description: "Detailed brain structure visualization"
    },
    {
      name: "Sleep Studies",
      description: "Comprehensive sleep disorder evaluation"
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
              Neurology Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced neurological care for brain, spine, and nervous system disorders. Our expert neurologists use cutting-edge technology for accurate diagnosis and effective treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Neurological Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive neurological care from diagnosis to long-term management
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

      {/* Diagnostic Testing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Neurological Testing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art diagnostic equipment for accurate neurological assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnostics.map((test, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{test.name}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Neurological Conditions We Treat
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert care for a wide range of neurological disorders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              24/7 Neurological Emergency Care
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Immediate care for stroke, seizures, and other neurological emergencies
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-red-500" size={32} />
                  </div>
                  <CardTitle className="text-red-600">Stroke Alert</CardTitle>
                  <CardDescription>Rapid response stroke treatment</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="text-orange-500" size={32} />
                  </div>
                  <CardTitle className="text-orange-600">Seizure Care</CardTitle>
                  <CardDescription>Emergency seizure management</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-blue-500" size={32} />
                  </div>
                  <CardTitle className="text-blue-600">24/7 Availability</CardTitle>
                  <CardDescription>Round-the-clock emergency care</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Neurology;