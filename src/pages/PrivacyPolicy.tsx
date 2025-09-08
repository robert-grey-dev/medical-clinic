import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <p>
                At MediCal Clinic, we collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schedule an appointment or consultation</li>
                <li>Register as a patient</li>
                <li>Contact us with questions or requests</li>
                <li>Subscribe to our newsletters or updates</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our medical services</li>
                <li>Process appointments and manage patient care</li>
                <li>Communicate with you about your care and our services</li>
                <li>Comply with legal obligations under HIPAA and other regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Medical Information Privacy</h2>
              <p>
                We are committed to protecting your health information in accordance with HIPAA (Health Insurance Portability and Accountability Act). Your medical information is:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kept strictly confidential</li>
                <li>Only shared with authorized healthcare providers involved in your care</li>
                <li>Protected with industry-standard security measures</li>
                <li>Never sold or shared for marketing purposes without your consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information Sharing</h2>
              <p>
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>For treatment, payment, and healthcare operations</li>
                <li>When required by law or legal process</li>
                <li>To protect the safety of patients, staff, or the public</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted data transmission and storage</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on privacy and security protocols</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
              <p>Under HIPAA and applicable privacy laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review your medical records</li>
                <li>Request corrections to your information</li>
                <li>Request restrictions on use and disclosure</li>
                <li>Request confidential communications</li>
                <li>File a complaint if you believe your privacy has been violated</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>MediCal Clinic</strong></p>
                <p>123 Medical Street</p>
                <p>Los Angeles, CA 90210</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: privacy@medical-clinic.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;