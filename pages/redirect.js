import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "lib/supabaseClient";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          fetch("/api/auth", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
          })
            .then((res) => res.json())
            .then(() => {
              const path = router.asPath.slice(9);
              const params = new URLSearchParams(path);
              const destination = params.get("destination");
              router.push(destination);
            });
        }
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return <div>Getting things ready, please wait.</div>;
}
