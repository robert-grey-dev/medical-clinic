import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Activity, 
  Shield, 
  Heart,
  Clock,
  Users,
  Award,
  FileText,
  Microscope,
  Thermometer
} from "lucide-react";

const InternalMedicine = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Preventive Care",
      description: "Comprehensive health screenings and preventive medicine",
      features: ["Annual physical exams", "Vaccination programs", "Health risk assessments", "Lifestyle counseling"],
      price: "From $180"
    },
    {
      icon: Heart,
      title: "Chronic Disease Management",
      description: "Long-term care for diabetes, hypertension, and other conditions",
      features: ["Diabetes management", "Blood pressure control", "Medication monitoring", "Lifestyle modification"],
      price: "From $200"
    },
    {
      icon: Activity,
      title: "Acute Illness Treatment",
      description: "Immediate care for infections and sudden health issues",
      features: ["Respiratory infections", "Gastrointestinal issues", "Fever evaluation", "Pain management"],
      price: "From $150"
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Comprehensive blood work and diagnostic testing",
      features: ["Blood chemistry panels", "Cholesterol screening", "Thyroid function", "Infection markers"],
      price: "From $80"
    },
    {
      icon: Shield,
      title: "Geriatric Medicine",
      description: "Specialized care for older adults",
      features: ["Memory screening", "Fall prevention", "Medication review", "Age-related conditions"],
      price: "From $220"
    },
    {
      icon: FileText,
      title: "Executive Health",
      description: "Comprehensive health programs for busy professionals",
      features: ["Extended consultations", "Priority scheduling", "Detailed health reports", "Wellness planning"],
      price: "From $400"
    }
  ];

  const conditions = [
    "Diabetes mellitus",
    "Hypertension (high blood pressure)",
    "High cholesterol",
    "Thyroid disorders",
    "Respiratory infections",
    "Gastrointestinal disorders",
    "Arthritis and joint pain",
    "Anxiety and depression",
    "Sleep disorders",
    "Obesity management",
    "Allergies and asthma",
    "Kidney disease"
  ];

  const preventiveCare = [
    {
      name: "Annual Wellness Exam",
      description: "Comprehensive health assessment and screening"
    },
    {
      name: "Cancer Screening",
      description: "Early detection programs for various cancers"
    },
    {
      name: "Cardiovascular Risk Assessment",
      description: "Heart disease prevention and monitoring"
    },
    {
      name: "Immunizations",
      description: "Adult vaccination programs and travel medicine"
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
              Internal Medicine Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive primary care for adults, focusing on prevention, diagnosis, and treatment of a wide range of medical conditions. Your trusted partner in maintaining optimal health throughout life.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Internal Medicine Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services for adult patients of all ages
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

      {/* Preventive Care */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Preventive Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proactive healthcare to prevent illness and maintain optimal wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventiveCare.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
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
                Conditions We Treat
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert care for a comprehensive range of adult medical conditions
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

      {/* Why Choose Internal Medicine */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Why Choose Our Internal Medicine Practice?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Board Certified</h3>
                <p className="text-muted-foreground text-sm">Experienced internists with specialized training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Care</h3>
                <p className="text-muted-foreground text-sm">Complete medical care for all your health needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Same-Day Appointments</h3>
                <p className="text-muted-foreground text-sm">Quick access to care when you need it most</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Patient-Centered</h3>
                <p className="text-muted-foreground text-sm">Personalized care tailored to your unique needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Health & Wellness Tips
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to maintain your health and prevent disease
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="mr-2 text-primary" size={24} />
                    Preventive Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Regular health screenings and check-ups</li>
                    <li>• Stay up-to-date with vaccinations</li>
                    <li>• Monitor blood pressure and cholesterol</li>
                    <li>• Cancer screening as recommended</li>
                    <li>• Maintain a healthy weight</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 text-primary" size={24} />
                    Healthy Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Eat a balanced, nutritious diet</li>
                    <li>• Exercise regularly (150 minutes/week)</li>
                    <li>• Get adequate sleep (7-9 hours)</li>
                    <li>• Manage stress effectively</li>
                    <li>• Avoid smoking and limit alcohol</li>
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

export default InternalMedicine;