import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Activity, 
  Heart, 
  UserCheck,
  Stethoscope,
  Syringe,
  FileText,
  Clock,
  Users,
  Award,
  Calendar,
  CheckCircle,
  AlertCircle,
  Target
} from "lucide-react";

const PreventiveCare = () => {
  const preventiveServices = [
    {
      icon: Stethoscope,
      title: "Annual Physical Exams",
      description: "Comprehensive health assessments to detect and prevent disease early",
      features: ["Complete medical history review", "Physical examination", "Vital signs assessment", "Health risk evaluation"],
      ageGroups: "All ages"
    },
    {
      icon: Activity,
      title: "Health Screenings",
      description: "Evidence-based screening tests for early disease detection",
      features: ["Cancer screenings", "Cardiovascular risk assessment", "Diabetes screening", "Bone density testing"],
      ageGroups: "Age-specific protocols"
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Adult immunization programs following CDC guidelines",
      features: ["Annual flu shots", "COVID-19 vaccines", "Travel immunizations", "Booster updates"],
      ageGroups: "Adults & Seniors"
    },
    {
      icon: FileText,
      title: "Medical Clearance",
      description: "Health certificates for work, school, and activities",
      features: ["School physicals", "Employment clearance", "Sports participation", "DOT examinations"],
      ageGroups: "All ages"
    },
    {
      icon: Heart,
      title: "Wellness Counseling",
      description: "Lifestyle guidance for optimal health and disease prevention",
      features: ["Nutrition counseling", "Exercise planning", "Stress management", "Sleep optimization"],
      ageGroups: "All ages"
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Personalized health risk evaluation and prevention strategies",
      features: ["Family history analysis", "Genetic risk factors", "Environmental exposures", "Lifestyle assessment"],
      ageGroups: "Adults 18+"
    }
  ];

  const screeningSchedule = [
    {
      ageGroup: "18-39 Years",
      screenings: [
        "Blood pressure (annually)",
        "Cholesterol (every 5 years)",
        "Diabetes screening (every 3 years)",
        "Mammogram (starting at 35-40)",
        "Pap smear (every 3 years)"
      ]
    },
    {
      ageGroup: "40-64 Years", 
      screenings: [
        "Blood pressure (annually)",
        "Cholesterol (every 5 years)",
        "Diabetes screening (annually)",
        "Mammogram (annually)",
        "Colonoscopy (starting at 45-50)",
        "Bone density (postmenopausal women)"
      ]
    },
    {
      ageGroup: "65+ Years",
      screenings: [
        "Blood pressure (annually)",
        "Cholesterol (annually)", 
        "Diabetes screening (annually)",
        "Mammogram (annually)",
        "Colonoscopy (every 10 years)",
        "Bone density (every 2 years)",
        "Vision & hearing tests"
      ]
    }
  ];

  const vaccinations = [
    {
      vaccine: "Influenza (Flu)",
      frequency: "Annual",
      description: "Yearly protection against seasonal flu strains"
    },
    {
      vaccine: "COVID-19",
      frequency: "Per CDC guidelines",
      description: "Primary series and boosters as recommended"
    },
    {
      vaccine: "Tdap/Td",
      frequency: "Every 10 years",
      description: "Tetanus, diphtheria, and pertussis protection"
    },
    {
      vaccine: "Shingles (Zoster)",
      frequency: "Age 50+",
      description: "Prevention of herpes zoster and complications"
    },
    {
      vaccine: "Pneumococcal",
      frequency: "Age 65+ or high-risk",
      description: "Protection against pneumonia and meningitis"
    },
    {
      vaccine: "HPV",
      frequency: "Ages 9-45",
      description: "Prevention of human papillomavirus infections"
    }
  ];

  const medicalClearance = [
    {
      type: "School Physicals",
      requirements: ["Complete physical exam", "Immunization records", "Vision/hearing tests", "Growth assessment"],
      duration: "Valid for 1 academic year"
    },
    {
      type: "Sports Clearance",
      requirements: ["Cardiovascular screening", "Musculoskeletal exam", "Previous injury assessment", "Fitness evaluation"],
      duration: "Valid for 1 sport season"
    },
    {
      type: "Employment Physicals",
      requirements: ["Job-specific health assessment", "Drug screening coordination", "Fitness for duty evaluation", "Occupational health review"],
      duration: "Employer-specific validity"
    },
    {
      type: "DOT Examinations",
      requirements: ["Commercial driver medical exam", "Vision and hearing tests", "Cardiovascular assessment", "Medical certificate issuance"],
      duration: "Valid for up to 2 years"
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
              Preventive Care & Annual Checkups
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive preventive healthcare services designed to keep you healthy and detect potential health issues early. Our evidence-based approach follows national guidelines to provide the highest quality preventive care for all ages.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="mr-2 text-primary" size={20} />
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 text-primary" size={20} />
                <span>CDC Guidelines</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 text-primary" size={20} />
                <span>All Ages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Preventive Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive preventive care following evidence-based guidelines and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preventiveServices.map((service, index) => {
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
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-border">
                      <span className="text-sm font-medium text-primary">Age Group: {service.ageGroups}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screening Schedule */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Age-Based Screening Guidelines
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recommended screening schedule based on current medical evidence and professional guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {screeningSchedule.map((schedule, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl text-primary">{schedule.ageGroup}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {schedule.screenings.map((screening, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{screening}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Adult Vaccination Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive immunization services following CDC recommendations for adult health protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaccinations.map((vaccine, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Syringe className="text-green-500" size={24} />
                  </div>
                  <CardTitle className="text-lg">{vaccine.vaccine}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">{vaccine.frequency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{vaccine.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Clearance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Medical Clearance Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional medical evaluations for school, work, and activity participation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {medicalClearance.map((clearance, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                      <FileText className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{clearance.type}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{clearance.duration}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {clearance.requirements.map((requirement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Preventive Care */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Why Preventive Care Matters
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Preventive care is the foundation of good health, helping detect and prevent diseases before they become serious
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Early Detection</h3>
                <p className="text-muted-foreground text-sm">Identify health issues before symptoms appear</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-blue-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Better Outcomes</h3>
                <p className="text-muted-foreground text-sm">Improved treatment success when caught early</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-purple-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality of Life</h3>
                <p className="text-muted-foreground text-sm">Maintain optimal health and wellness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-orange-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cost Effective</h3>
                <p className="text-muted-foreground text-sm">Prevention costs less than treatment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How to Prepare for Your Visit
              </h2>
              <p className="text-xl text-muted-foreground">
                Make the most of your preventive care appointment with proper preparation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 text-primary" size={24} />
                    Before Your Visit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Gather your medical records and immunization history</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>List all current medications and supplements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prepare questions about your health concerns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Review your family medical history</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fast 8-12 hours if lab work is needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="mr-2 text-primary" size={24} />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Comprehensive health history review</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Physical examination and vital signs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Age-appropriate screening tests</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Vaccination updates as needed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Personalized health recommendations</span>
                    </li>
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

export default PreventiveCare;