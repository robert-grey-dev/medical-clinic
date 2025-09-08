-- Create contact_submissions table for storing form submissions
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'processed', 'archived')),
  ip_address INET,
  user_agent TEXT
);

-- Enable RLS for security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users with admin role can view submissions
CREATE POLICY "Admins can view all submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (get_user_role(auth.uid()) = ANY (ARRAY['owner'::user_role, 'admin'::user_role]));

-- Add index for better performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);