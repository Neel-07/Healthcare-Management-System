import { createClient } from '@supabase/supabase-js';

// Default to empty strings if env vars are missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create client even if env vars are missing - this allows the app to load
// but auth functionality won't work until proper credentials are provided
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};