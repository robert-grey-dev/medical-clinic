import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { name, phone, email, service, message }: ContactFormData = await req.json();

    // Basic validation
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Name and phone are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get client info (parse comma-separated X-Forwarded-For and fallback gracefully)
    const forwardedFor = req.headers.get("x-forwarded-for") || "";
    const firstForwardedIp = forwardedFor.split(",")[0]?.trim();
    const ipRaw =
      req.headers.get("cf-connecting-ip") ||
      firstForwardedIp ||
      req.headers.get("x-real-ip") ||
      null;
    // If no valid IP present, store null (inet column cannot accept arbitrary strings)
    const clientIP = ipRaw && ipRaw.length > 0 ? ipRaw : null;
    const userAgent = req.headers.get("user-agent") || "unknown";

    // Save to database
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        service: service || null,
        message: message?.trim() || null,
        ip_address: clientIP,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email to admin
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") || "Medical Clinic <onboarding@resend.dev>";
    const adminEmail = Deno.env.get("ADMIN_EMAIL") || "admin@medical-clinic.com";
    
    const adminEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>IP:</strong> ${clientIP}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      subject: "New Contact Form Submission",
      html: adminEmailContent,
    });

    // Send confirmation email to client if email provided
    if (email) {
      const clientEmailContent = `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will contact you shortly at ${phone}.</p>
        ${service ? `<p>You are interested in: <strong>${service}</strong></p>` : ""}
        <p>Our team typically responds within 24 hours during business hours.</p>
        <br>
        <p>Best regards,<br>Medical Clinic Team</p>
      `;

      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "We received your message - Medical Clinic",
        html: clientEmailContent,
      });
    }

    console.log("Contact form submitted successfully:", submission.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully. We will contact you soon.",
        id: submission.id 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", {
      message: error?.message,
      stack: error?.stack,
    });
    return new Response(
      JSON.stringify({ 
        error: "Internal server error. Please try again later.",
        details: error?.message || "Unknown error" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
