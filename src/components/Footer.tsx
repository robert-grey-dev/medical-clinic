import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookingModal from "./BookingModal";
const Footer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsBookingModalOpen(true);
    }
  };
  return <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О клинике */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">MediCal Clinic</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Modern medical clinic with a team of experienced specialists. 
              Professional medical care with an individual approach.
            </p>
            <div className="flex items-center space-x-2 text-success">
              <Heart size={16} />
              <span className="text-sm font-medium">License # MD-123456</span>
            </div>
          </div>

          {/* Услуги */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/internal-medicine" className="hover:text-primary transition-colors">Internal Medicine</Link></li>
              <li><Link to="/cardiology" className="hover:text-primary transition-colors">Cardiology</Link></li>
              <li><Link to="/neurology" className="hover:text-primary transition-colors">Neurology</Link></li>
              <li><Link to="/ophthalmology" className="hover:text-primary transition-colors">Ophthalmology</Link></li>
              <li><Link to="/orthopedics" className="hover:text-primary transition-colors">Orthopedics</Link></li>
              <li><Link to="/diagnostics" className="hover:text-primary transition-colors">Diagnostics</Link></li>
              <li><Link to="/preventive-care" className="hover:text-primary transition-colors">Preventive Care</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span>info@medical-clinic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span>123 Medical Street<br />Los Angeles, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Часы работы */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Hours</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-primary mt-0.5" />
                <div>
                  <div>Mon-Fri: 8:00 AM - 8:00 PM</div>
                  <div>Sat-Sun: 9:00 AM - 6:00 PM</div>
                  <div className="text-success font-medium mt-2">Emergency care 24/7</div>
                </div>
              </div>
            </div>
            <Button 
              variant="default" 
              className="w-full mt-4" 
              onClick={handleBookingClick}
            >
              Book Appointment
            </Button>
          </div>
        </div>

        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={() => setIsBookingModalOpen(false)} 
        />

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 MediCal Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;