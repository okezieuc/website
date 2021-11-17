import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function handleLogin(destination = "/learn") {
  try {
    const { error } = await supabase.auth.signIn(
      { provider: "google" },
      { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}${destination}` }
    );
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  }
}
