import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function handleLogin(destination = "/learn") {
  try {
    sessionStorage.setItem("sessionAuthDestination", destination);
    const { error } = await supabase.auth.signIn(
      { provider: "google" },
      {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/redirect`,
      }
    );
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  }
}

export const handleLogout = async (router) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    router.push("/");
  }
};
