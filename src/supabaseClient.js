import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Defensively create the client only if URL and KEY are provided and valid
export const supabase = (supabaseUrl && supabaseUrl !== "YOUR_SUPABASE_URL") 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;
