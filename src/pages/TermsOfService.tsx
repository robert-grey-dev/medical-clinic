import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p>
                By accessing and using MediCal Clinic's services, website, or facilities, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Medical Services</h2>
              <p>MediCal Clinic provides medical services including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>General medical consultations and examinations</li>
                <li>Specialist consultations in cardiology, neurology, and other fields</li>
                <li>Diagnostic services and medical testing</li>
                <li>Preventive care and health screenings</li>
              </ul>
              <p>
                All medical services are provided by licensed healthcare professionals in accordance with applicable medical standards and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Patient Responsibilities</h2>
              <p>As a patient, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete medical history and information</li>
                <li>Arrive on time for scheduled appointments</li>
                <li>Follow prescribed treatment plans and medical advice</li>
                <li>Notify us of any changes in your condition or medications</li>
                <li>Respect clinic staff, other patients, and facility policies</li>
                <li>Provide timely payment for services rendered</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Appointment Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Scheduling:</strong> Appointments can be scheduled by phone, online, or in person</li>
                <li><strong>Cancellation:</strong> Please provide at least 24 hours notice for cancellations</li>
                <li><strong>No-show Policy:</strong> Failure to attend scheduled appointments may result in charges</li>
                <li><strong>Emergency Care:</strong> For medical emergencies, call 911 or go to the nearest emergency room</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Payment and Insurance</h2>
              <p>
                Payment is due at the time of service unless other arrangements have been made. We accept:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Most major insurance plans</li>
                <li>Cash, check, and credit/debit cards</li>
                <li>Health Savings Account (HSA) and Flexible Spending Account (FSA) payments</li>
              </ul>
              <p>
                Patients are responsible for understanding their insurance coverage and any applicable copays, deductibles, or out-of-network charges.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                MediCal Clinic and its healthcare providers will not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, except as required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Confidentiality and Privacy</h2>
              <p>
                We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance with HIPAA and other applicable privacy laws. Please refer to our Privacy Policy for detailed information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Modification of Terms</h2>
              <p>
                MediCal Clinic reserves the right to modify these Terms of Service at any time. Changes will be posted on our website and will become effective immediately upon posting.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the State of California and applicable federal laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>MediCal Clinic</strong></p>
                <p>123 Medical Street</p>
                <p>Los Angeles, CA 90210</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@medical-clinic.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;