import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  console.log("ContactForm component loaded - latest version");
  const { toast } = useToast();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      form.reset();
      
      toast({
        title: "Message sent successfully!",
        description: "We will contact you shortly. Thank you for reaching out to us.",
        duration: 5000,
      });

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 123-4568"],
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@medical-clinic.com", "reception@medical-clinic.com"],
      link: "mailto:info@medical-clinic.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Medical Street", "Los Angeles, CA 90210"],
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 6:00 PM"],
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book an appointment or get a consultation from our specialists. 
            We are ready to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book an Appointment</CardTitle>
                <CardDescription>
                  Fill out the form and we will contact you to confirm your appointment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        {...form.register("name")}
                        className="border-border focus:ring-primary"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567"
                        {...form.register("phone")}
                        className="border-border focus:ring-primary"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      {...form.register("email")}
                      className="border-border focus:ring-primary"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Select a Service</Label>
                    <Select onValueChange={(value) => form.setValue("service", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Choose a department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapy">Internal Medicine</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="diagnostics">Diagnostics</SelectItem>
                        <SelectItem value="checkup">Health Checkup</SelectItem>
                        <SelectItem value="laboratory">Laboratory Diagnostics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your symptoms or questions..." 
                      rows={4}
                      {...form.register("message")}
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group bg-primary hover:bg-primary-hover text-primary-foreground"
                    disabled={submitStatus === 'loading'}
                  >
                    {submitStatus === 'loading' && (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    )}
                    {submitStatus === 'success' && <CheckCircle className="mr-2" size={18} />}
                    {submitStatus === 'error' && <AlertCircle className="mr-2" size={18} />}
                    {submitStatus === 'loading' 
                      ? "Submitting..." 
                      : submitStatus === 'success' 
                      ? "Message Sent!" 
                      : "Submit Application"
                    }
                    {submitStatus === 'idle' && <Send className="group-hover:translate-x-1 transition-transform ml-2" size={18} />}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By clicking the button, you agree to the processing of personal data
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;