-- Create the contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert messages (public contact form)
CREATE POLICY "Allow public insert" ON public.contacts
    FOR INSERT 
    WITH CHECK (true);

-- Create a policy to only allow authenticated users (like you) to view messages
-- Note: Replace with your actual user UID if you want to restrict it further
CREATE POLICY "Allow authenticated select" ON public.contacts
    FOR SELECT 
    USING (auth.role() = 'authenticated');

