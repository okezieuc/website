import "../css/index.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "@components/layout";
import { supabase } from "lib/supabaseClient";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event !== "SIGNED_IN") {
          fetch("/api/auth", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
          }).then((res) => res.json());
        }
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
