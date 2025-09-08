import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Glasses, 
  Zap, 
  Heart,
  Shield,
  Users,
  Award,
  Clock,
  Camera,
  Microscope
} from "lucide-react";

const Ophthalmology = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "Complete vision and eye health evaluations",
      features: ["Visual acuity testing", "Glaucoma screening", "Retinal examination", "Prescription updates"],
      price: "From $150"
    },
    {
      icon: Zap,
      title: "Cataract Surgery",
      description: "Advanced lens replacement procedures",
      features: ["Laser-assisted surgery", "Premium lens options", "Same-day procedure", "Quick recovery"],
      price: "Consultation from $200"
    },
    {
      icon: Eye,
      title: "Retinal Disorders",
      description: "Treatment for diabetic retinopathy and macular degeneration",
      features: ["Injection therapy", "Laser treatment", "Monitoring programs", "Vision preservation"],
      price: "Consultation from $250"
    },
    {
      icon: Shield,
      title: "Glaucoma Management",
      description: "Early detection and treatment of glaucoma",
      features: ["Pressure monitoring", "Medication therapy", "Laser procedures", "Surgical options"],
      price: "Consultation from $180"
    },
    {
      icon: Glasses,
      title: "Refractive Surgery",
      description: "LASIK and vision correction procedures",
      features: ["LASIK surgery", "PRK procedures", "Lens implants", "Vision correction"],
      price: "Consultation from $300"
    },
    {
      icon: Users,
      title: "Pediatric Ophthalmology",
      description: "Specialized eye care for children",
      features: ["Amblyopia treatment", "Strabismus surgery", "Vision screening", "Child-friendly approach"],
      price: "Consultation from $160"
    }
  ];

  const conditions = [
    "Cataracts",
    "Glaucoma",
    "Diabetic retinopathy",
    "Macular degeneration",
    "Dry eye syndrome",
    "Strabismus (crossed eyes)",
    "Amblyopia (lazy eye)",
    "Floaters and flashes",
    "Corneal disorders",
    "Eyelid conditions"
  ];

  const technologies = [
    {
      name: "OCT Imaging",
      description: "High-resolution retinal scanning",
      icon: Camera
    },
    {
      name: "Laser Technology",
      description: "Precision laser treatments",
      icon: Zap
    },
    {
      name: "Surgical Microscopes",
      description: "Advanced surgical visualization",
      icon: Microscope
    },
    {
      name: "Digital Refraction",
      description: "Computerized vision testing",
      icon: Eye
    }
  ];

  const team = [
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Retinal Specialist",
      experience: "20+ years",
      education: "Johns Hopkins University"
    },
    {
      name: "Dr. David Kim",
      specialty: "Cataract & Refractive Surgery",
      experience: "15+ years", 
      education: "Harvard Medical School"
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Pediatric Ophthalmology",
      experience: "12+ years",
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
              Advanced Eye Care
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive ophthalmology services from routine eye exams to complex surgical procedures. Protecting and enhancing your vision with state-of-the-art technology and expert care.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ophthalmology Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete eye care services for patients of all ages
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

      {/* Advanced Technology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Eye Care Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment for precise diagnosis and treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eye Conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Eye Conditions We Treat
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert treatment for a wide range of eye conditions and vision problems
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

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Eye Care Specialists
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Board-certified ophthalmologists with expertise in all areas of eye care
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

      {/* Vision Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Why Choose Our Eye Care?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Surgeons</h3>
                <p className="text-muted-foreground text-sm">Board-certified ophthalmologists with specialized training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Latest Technology</h3>
                <p className="text-muted-foreground text-sm">Advanced diagnostic and surgical equipment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground text-sm">Patient-centered approach to eye health</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground text-sm">Excellent outcomes and patient satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ophthalmology;