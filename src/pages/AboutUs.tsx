import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Stethoscope, Calendar, Shield, Target, Star } from "lucide-react";
import medicalEquipment from "@/assets/medical-equipment.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in medical care, using cutting-edge technology and best practices."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Patient safety is our top priority in every procedure, treatment, and interaction."
    },
    {
      icon: Target,
      title: "Precision",
      description: "We provide accurate diagnoses and targeted treatments for optimal patient outcomes."
    }
  ];

  const achievements = [
    {
      number: "50,000+",
      label: "Patients Treated",
      description: "Successfully helped patients regain their health"
    },
    {
      number: "99.2%",
      label: "Patient Satisfaction",
      description: "Consistently rated by our patients"
    },
    {
      number: "15",
      label: "Medical Awards",
      description: "Recognition for outstanding healthcare"
    },
    {
      number: "24/7",
      label: "Emergency Care",
      description: "Round-the-clock medical assistance"
    }
  ];

  const leadership = [
    {
      name: "Dr. Richard Williams",
      position: "Chief Medical Officer",
      experience: "25+ years",
      description: "Leading cardiovascular surgeon with international recognition in minimally invasive procedures.",
      image: doctorPortrait
    },
    {
      name: "Dr. Amanda Foster",
      position: "Medical Director",
      experience: "20+ years",
      description: "Expert in internal medicine and healthcare administration, driving our patient-centered approach.",
      image: doctorPortrait
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About MediCal Clinic
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Dedicated to providing exceptional healthcare with compassion, expertise, and innovation. 
              Our commitment to excellence has made us a trusted healthcare partner for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 2009, MediCal Clinic began with a simple vision: to provide world-class 
                  healthcare that puts patients first. What started as a small practice has grown into 
                  a comprehensive medical center serving thousands of patients annually.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from adopting the latest 
                  medical technologies to developing patient-centered care protocols that ensure 
                  the best possible outcomes for every individual we serve.
                </p>
                <p>
                  Today, we stand as a beacon of medical excellence, combining traditional values 
                  of compassionate care with modern medical advances to deliver healthcare that 
                  truly makes a difference in people's lives.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={medicalEquipment}
                alt="Our medical facility"
                className="w-full h-[400px] object-cover rounded-2xl shadow-card"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape the care we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:shadow-card transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-border/50 bg-primary/5">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced leaders who guide our mission of exceptional healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-border/50 hover:shadow-card transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/10"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{leader.name}</h3>
                      <div className="text-primary font-medium mb-2">{leader.position}</div>
                      <div className="text-sm text-muted-foreground mb-3">{leader.experience} experience</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{leader.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Experience Our Care?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust MediCal Clinic for their healthcare needs. 
            Schedule your appointment today and experience the difference of patient-centered care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="medical" 
              size="lg"
              onClick={() => window.location.href = '/#contact'}
            >
              <Calendar className="mr-2" size={20} />
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;