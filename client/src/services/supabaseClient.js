import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dbfuqhsjsigahwewwqcd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZnVxaHNqc2lnYWh3ZXd3cWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5NzU1NTMsImV4cCI6MTk4NTU1MTU1M30.3vmq6a5XK10hE0j8KhkAFOX-Yn7m5u0tB4mk1qN4vx4";
console.log(supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
