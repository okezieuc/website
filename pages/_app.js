import "../css/index.css";
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Init PostHog
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, { api_host: 'https://app.posthog.com' });

    // Track page views
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
