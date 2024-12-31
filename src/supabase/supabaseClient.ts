import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://djpujgehnexeadrlgvbm.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseKey) {
  throw new Error(
    "SUPABASE_KEY is not defined. Please set it in your environment variables."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
