import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your health is
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}our priority
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Modern medical clinic with a team of experienced specialists. 
              We provide quality medical care using the latest technology 
              and an individual approach to each patient.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-hover text-primary-foreground"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Appointment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">15+ years</p>
                <p className="text-sm text-muted-foreground">experience</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">support</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-success" size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">10k+</p>
                <p className="text-sm text-muted-foreground">patients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-ratio-box" style={{'--aspect-ratio': '83.33%'} as React.CSSProperties}>
            <img
              src={heroImage}
              alt="Modern MediCal medical clinic"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="eager"
              fetchPriority="high"
              width="600"
              height="500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;