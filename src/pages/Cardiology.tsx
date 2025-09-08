import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  Zap, 
  Shield,
  Clock,
  Users,
  Award,
  Stethoscope,
  Monitor,
  AlertTriangle
} from "lucide-react";

const Cardiology = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiac Catheterization",
      description: "Minimally invasive procedures to diagnose and treat heart conditions",
      features: ["Angioplasty", "Stent placement", "Balloon valvuloplasty", "Diagnostic catheterization"],
      price: "Consultation from $300"
    },
    {
      icon: Activity,
      title: "Electrophysiology",
      description: "Heart rhythm disorder diagnosis and treatment",
      features: ["Ablation procedures", "Pacemaker implantation", "ICD placement", "Loop recorder insertion"],
      price: "Consultation from $350"
    },
    {
      icon: Monitor,
      title: "Non-Invasive Testing",
      description: "Advanced cardiac imaging and diagnostic tests",
      features: ["Echocardiogram", "Stress testing", "Holter monitoring", "Cardiac CT/MRI"],
      price: "From $200"
    },
    {
      icon: Stethoscope,
      title: "Preventive Cardiology",
      description: "Heart disease prevention and risk factor management",
      features: ["Cholesterol management", "Blood pressure control", "Lifestyle counseling", "Risk assessment"],
      price: "From $250"
    },
    {
      icon: Zap,
      title: "Heart Failure Management",
      description: "Comprehensive care for patients with heart failure",
      features: ["Medication optimization", "Device therapy", "Lifestyle modification", "Remote monitoring"],
      price: "From $280"
    },
    {
      icon: Shield,
      title: "Structural Heart Disease",
      description: "Treatment of valvular and congenital heart conditions",
      features: ["Valve repair/replacement", "Septal defect closure", "TAVR procedures", "Mitral clip"],
      price: "Consultation from $400"
    }
  ];

  const conditions = [
    "Coronary artery disease",
    "Heart failure",
    "Arrhythmias (irregular heartbeat)",
    "Valvular heart disease",
    "Hypertension",
    "Cardiomyopathy",
    "Peripheral artery disease",
    "Aortic aneurysm",
    "Congenital heart disease",
    "Pulmonary hypertension",
    "Atrial fibrillation",
    "Heart attack prevention"
  ];

  const emergencySymptoms = [
    {
      symptom: "Chest Pain",
      description: "Pressure, squeezing, or pain in chest",
      urgency: "high"
    },
    {
      symptom: "Shortness of Breath",
      description: "Difficulty breathing or feeling winded",
      urgency: "high"
    },
    {
      symptom: "Rapid Heartbeat",
      description: "Heart racing or irregular rhythm",
      urgency: "medium"
    },
    {
      symptom: "Dizziness/Fainting",
      description: "Light-headedness or loss of consciousness",
      urgency: "high"
    }
  ];

  const procedures = [
    {
      name: "Cardiac Catheterization",
      description: "Gold standard for coronary artery evaluation"
    },
    {
      name: "Echocardiogram",
      description: "Ultrasound imaging of heart structure and function"
    },
    {
      name: "Stress Testing",
      description: "Exercise or pharmacologic stress evaluation"
    },
    {
      name: "Holter Monitoring",
      description: "24-48 hour continuous heart rhythm monitoring"
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
              Advanced Cardiovascular Care
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive heart care from prevention to advanced interventions. Our board-certified cardiologists provide state-of-the-art treatment for all cardiovascular conditions using the latest technology and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Cardiology Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete cardiovascular care from diagnosis to treatment and rehabilitation
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

      {/* Emergency Warning Signs */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <AlertTriangle className="inline mr-2 text-red-500" size={40} />
              Heart Emergency Warning Signs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognize these symptoms and seek immediate medical attention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySymptoms.map((item, index) => (
              <Card key={index} className={`text-center ${item.urgency === 'high' ? 'border-red-200' : 'border-orange-200'}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    item.urgency === 'high' ? 'bg-red-100' : 'bg-orange-100'
                  }`}>
                    <AlertTriangle className={item.urgency === 'high' ? 'text-red-500' : 'text-orange-500'} size={24} />
                  </div>
                  <CardTitle className="text-lg">{item.symptom}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-100 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-red-800 font-semibold text-lg mb-2">Call 911 Immediately</p>
              <p className="text-red-700">If you experience these symptoms, don't wait - call emergency services right away. Time is critical in treating heart emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Procedures */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Cardiac Diagnostics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art testing to accurately diagnose heart conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((procedure, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{procedure.name}</CardTitle>
                  <CardDescription>{procedure.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heart Conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Heart Conditions We Treat
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert treatment for the full spectrum of cardiovascular diseases
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

      {/* Heart Health Tips */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Heart-Healthy Living
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple lifestyle changes to protect your cardiovascular health
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 text-primary" size={24} />
                    Diet & Nutrition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Eat plenty of fruits and vegetables</li>
                    <li>• Choose whole grains over refined</li>
                    <li>• Limit saturated and trans fats</li>
                    <li>• Reduce sodium intake</li>
                    <li>• Include omega-3 rich foods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 text-primary" size={24} />
                    Exercise & Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Get 150 minutes of moderate exercise weekly</li>
                    <li>• Don't smoke or use tobacco</li>
                    <li>• Maintain a healthy weight</li>
                    <li>• Manage stress effectively</li>
                    <li>• Get quality sleep (7-9 hours)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Cardiology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Why Choose Our Cardiovascular Care?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Cardiologists</h3>
                <p className="text-muted-foreground text-sm">Board-certified specialists with advanced training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Latest Technology</h3>
                <p className="text-muted-foreground text-sm">State-of-the-art diagnostic and treatment equipment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Emergency Care</h3>
                <p className="text-muted-foreground text-sm">Round-the-clock cardiac emergency services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Care</h3>
                <p className="text-muted-foreground text-sm">Complete cardiovascular care team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cardiology;