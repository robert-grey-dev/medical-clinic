import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      const section = href.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(`/${href.split('/')[1]}`);
        }
      } else {
        navigate(href);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }
    closeMenu();
  };

  return (
    <>
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2" aria-label="Go to homepage">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MediCal Clinic</h1>
                <p className="text-xs text-muted-foreground">Professional Healthcare</p>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button onClick={() => handleNavigation('/#services')} className="text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => handleNavigation('/#about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => handleNavigation('/#doctors')} className="text-foreground hover:text-primary transition-colors">Doctors</button>
            <button onClick={() => handleNavigation('/#reviews')} className="text-foreground hover:text-primary transition-colors">Reviews</button>
            <button onClick={() => handleNavigation('/#contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-foreground">
              <Phone size={16} />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary-hover text-primary-foreground" onClick={() => handleNavigation('/#contact')}>Book Appointment</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={closeMenu}></div>
          <div className="fixed top-[73px] left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <button 
                onClick={() => handleNavigation('/')}
                className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/#services')}
                className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/#about')}
                className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/#doctors')}
                className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors py-2"
              >
                Doctors
              </button>
              <button 
                onClick={() => handleNavigation('/#reviews')}
                className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleNavigation('/#contact')}
                className="block w-full text-left text-lg text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-foreground mb-4">
                  <Phone size={16} />
                  <span className="font-medium">(555) 123-4567</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground" onClick={() => handleNavigation('/#contact')}>
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;