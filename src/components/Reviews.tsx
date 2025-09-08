import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Star, Send, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ReviewForm {
  doctorId: string;
  patientName: string;
  email: string;
  rating: number;
  review: string;
  captcha: string;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

interface CaptchaProblem {
  num1: number;
  num2: number;
  answer: number;
}

const Reviews = () => {
  const { toast } = useToast();
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewForm, setReviewForm] = useState<ReviewForm>({
    doctorId: "",
    patientName: "",
    email: "",
    rating: 0,
    review: "",
    captcha: "",
  });

  const [captchaProblem, setCaptchaProblem] = useState<CaptchaProblem>(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data, error } = await supabase
          .from('doctors')
          .select('id, name, specialty')
          .order('name');
        
        if (error) throw error;
        setDoctors(data || []);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaProblem({ num1, num2, answer: num1 + num2 });
    setReviewForm(prev => ({ ...prev, captcha: "" }));
  };

  const handleInputChange = (field: keyof ReviewForm, value: string | number) => {
    setReviewForm(prev => ({ ...prev, [field]: value }));
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`transition-colors ${
          i < rating 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300 hover:text-yellow-400"
        } ${interactive ? "cursor-pointer" : ""}`}
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(reviewForm.captcha) !== captchaProblem.answer) {
      toast({
        title: "Verification Failed",
        description: "Please solve the math problem correctly.",
        variant: "destructive",
      });
      return;
    }

    if (reviewForm.review.length < 10) {
      toast({
        title: "Review Too Short",
        description: "Please provide at least 10 characters in your review.",
        variant: "destructive",
      });
      return;
    }

    if (!reviewForm.doctorId || !reviewForm.rating) {
      toast({
        title: "Missing Information",
        description: "Please select a doctor and provide a rating.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('reviews')
        .insert({
          doctor_id: reviewForm.doctorId,
          patient_name: reviewForm.patientName,
          email: reviewForm.email,
          rating: reviewForm.rating,
          review_text: reviewForm.review,
        });

      if (error) throw error;

      toast({
        title: "Review Submitted Successfully",
        description: "Thank you for your feedback. Your review will be published after moderation.",
      });

      setReviewForm({
        doctorId: "",
        patientName: "",
        email: "",
        rating: 0,
        review: "",
        captcha: "",
      });
      generateCaptcha();
      setIsFormExpanded(false);
    } catch (error: any) {
      console.error('Error submitting review:', error);
      toast({
        title: "Submission Error",
        description: error.message || "There was an error submitting your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: MessageSquare,
      color: "primary",
      title: "Help Others",
      description: "Your review guides other patients in choosing the right specialist"
    },
    {
      icon: Star,
      color: "accent",
      title: "Quality Assurance", 
      description: "Honest feedback helps us maintain exceptional healthcare standards"
    },
    {
      icon: Send,
      color: "success",
      title: "Anonymous Option",
      description: "Submit confidential feedback while maintaining your privacy"
    }
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Patient Reviews & Feedback
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Share your experience with our healthcare team. Your honest feedback helps us maintain 
            the highest standards of medical care.
          </p>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          
          {/* Benefits - Mobile Stack, Desktop Side */}
          <div className="lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row lg:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${benefit.color}/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}>
                          <IconComponent className={`text-${benefit.color}`} size={20} />
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Review Form - Mobile Expandable, Desktop Full */}
          <div className="lg:col-span-2 lg:order-2">
            {/* Mobile Toggle Button */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setIsFormExpanded(!isFormExpanded)}
                className="w-full border-primary/30 hover:bg-primary/5 text-primary"
                size="lg"
              >
                <MessageSquare className="mr-2" size={20} />
                {isFormExpanded ? "Hide Review Form" : "Write a Review"}
                {isFormExpanded ? <ChevronUp className="ml-2" size={20} /> : <ChevronDown className="ml-2" size={20} />}
              </Button>
            </div>

            {/* Form - Hidden on mobile unless expanded */}
            <div className={`${isFormExpanded ? 'block' : 'hidden'} lg:block`}>
              <Card className="border-border/50 shadow-card">
                <CardHeader className="text-center lg:text-left px-4 sm:px-6 py-4 sm:py-6">
                  <CardTitle className="text-xl sm:text-2xl text-foreground">Submit Your Review</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Your feedback is confidential and will be reviewed before publication
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <form onSubmit={handleReviewSubmit} className="space-y-4 sm:space-y-6">
                    
                    {/* Doctor Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="doctorId" className="text-foreground font-medium text-sm sm:text-base">
                        Select Doctor *
                      </Label>
                      <Select value={reviewForm.doctorId} onValueChange={(value) => handleInputChange("doctorId", value)}>
                        <SelectTrigger className="border-border focus:ring-primary h-11 sm:h-12">
                          <SelectValue placeholder="Choose the doctor you visited" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem key={doctor.id} value={doctor.id}>
                              {doctor.name} - {doctor.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Patient Info - Stack on mobile */}
                    <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patientName" className="text-foreground font-medium text-sm sm:text-base">
                          Patient Name *
                        </Label>
                        <Input
                          id="patientName"
                          type="text"
                          placeholder="Enter your full name"
                          value={reviewForm.patientName}
                          onChange={(e) => handleInputChange("patientName", e.target.value)}
                          className="border-border focus:ring-primary h-11 sm:h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium text-sm sm:text-base">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={reviewForm.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-border focus:ring-primary h-11 sm:h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="space-y-3">
                      <Label className="text-foreground font-medium text-sm sm:text-base">Overall Rating *</Label>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <div className="flex justify-center sm:justify-start space-x-1">
                          {renderStars(reviewForm.rating, true, (rating) => handleInputChange("rating", rating))}
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                          {reviewForm.rating > 0 ? (
                            <span className="text-foreground font-medium">
                              {reviewForm.rating === 5 ? "Excellent" : 
                               reviewForm.rating === 4 ? "Very Good" : 
                               reviewForm.rating === 3 ? "Good" : 
                               reviewForm.rating === 2 ? "Fair" : "Needs Improvement"}
                            </span>
                          ) : "Tap stars to rate your experience"}
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="space-y-2">
                      <Label htmlFor="review" className="text-foreground font-medium text-sm sm:text-base">
                        Your Experience *
                      </Label>
                      <Textarea
                        id="review"
                        placeholder="Please describe your experience with this healthcare provider..."
                        className="min-h-[100px] sm:min-h-[120px] border-border focus:ring-primary resize-none text-sm sm:text-base"
                        value={reviewForm.review}
                        onChange={(e) => handleInputChange("review", e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Minimum 50 characters. Your review will be moderated before publication.
                      </p>
                    </div>

                    {/* Security Verification - Mobile Optimized */}
                    <div className="space-y-3">
                      <Label className="text-foreground font-medium text-sm sm:text-base">Security Verification *</Label>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border">
                        <div className="bg-background p-3 rounded-lg border-2 border-dashed border-primary/30 text-center">
                          <span className="text-lg font-bold text-foreground">
                            {captchaProblem.num1} + {captchaProblem.num2} = ?
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center sm:justify-start">
                          <Input
                            id="captcha"
                            type="number"
                            placeholder="Answer"
                            value={reviewForm.captcha}
                            onChange={(e) => handleInputChange("captcha", e.target.value)}
                            className="w-20 border-border focus:ring-primary text-center h-11"
                            required
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="icon"
                            onClick={generateCaptcha}
                            title="Generate new math problem"
                            className="border-border hover:bg-muted h-11 w-11"
                          >
                            <RefreshCw size={16} />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground text-center sm:text-left">
                        Please solve the math problem to verify you are human
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-border">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground h-11 sm:h-12 text-sm sm:text-base" 
                        size="lg"
                      >
                        <Send className="mr-2" size={18} />
                        {isSubmitting ? "Submitting..." : "Submit Review for Moderation"}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Reviews are typically published within 24-48 hours after moderation
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;