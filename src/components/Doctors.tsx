import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import Reviews from "./Reviews";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience_years: number;
  average_rating: number;
  total_reviews: number;
  image_url: string;
  description: string;
}

const Doctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const [isVerySmall, setIsVerySmall] = useState(false);
  
  useEffect(() => {
    const checkVerySmallScreen = () => {
      setIsVerySmall(window.innerWidth < 480);
    };
    
    checkVerySmallScreen();
    window.addEventListener('resize', checkVerySmallScreen);
    return () => window.removeEventListener('resize', checkVerySmallScreen);
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data, error } = await supabase
          .from('doctors')
          .select('*')
          .order('name');
        
        if (error) throw error;
        setDoctors(data || []);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ));
  };

  const visibleDoctors = isVerySmall ? 1 : isMobile ? 2 : 3;

  const maxIndex = Math.max(0, doctors.length - visibleDoctors);

  // Reset currentIndex when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleDoctors, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      return nextIndex > maxIndex ? maxIndex : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <>
      <section id="doctors" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Expert Doctors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our team of experienced physicians dedicated to providing 
              exceptional healthcare with compassion and expertise
            </p>
          </div>

          <div className="relative px-8">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-muted-foreground">Loading doctors...</div>
              </div>
            ) : (
              <>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentIndex * (100 / visibleDoctors)}%)`,
                    }}
                  >
                    {doctors.map((doctor) => (
                      <div key={doctor.id} className="px-2 flex-shrink-0" style={{ width: `${100 / visibleDoctors}%` }}>
                        <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 h-full flex flex-col">
                          <CardHeader className="text-center">
                            <div className="relative mb-4">
                              <img
                                src={doctor.image_url || doctorPortrait}
                                alt={`${doctor.name} - ${doctor.specialty}`}
                                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10"
                                loading="lazy"
                                width="96"
                                height="96"
                              />
                              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                <Star size={16} fill="currentColor" />
                              </div>
                            </div>
                            <CardTitle className="text-xl text-foreground">{doctor.name}</CardTitle>
                            <CardDescription className="text-primary font-semibold">
                              {doctor.specialty}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="text-center space-y-4 flex flex-col flex-1">
                            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                              <span>{doctor.experience_years}+ years</span>
                              <span className="flex items-center">
                                {renderStars(doctor.average_rating)}
                                <span className="ml-1">{doctor.average_rating.toFixed(1)}</span>
                                <span className="ml-1 text-xs">({doctor.total_reviews})</span>
                              </span>
                            </div>
                            
                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                              {doctor.description}
                            </p>
                            
                            <div className="flex space-x-2 mt-auto">
                              <Button variant="outline" size="sm" className="flex-1">
                                <Calendar size={16} className="mr-2" />
                                Book
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Phone size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            {/* Navigation arrows */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/95 backdrop-blur-sm shadow-lg"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="bg-background/95 backdrop-blur-sm shadow-lg"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
};

export default Doctors;