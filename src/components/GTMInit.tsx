import { useEffect } from "react";
import { initGTM, trackPageView } from "@/lib/gtm";

/**
 * GTM Initialization Component
 * Initializes Google Tag Manager and tracks page views
 */
export const GTMInit = () => {
  useEffect(() => {
    // Initialize GTM
    initGTM();

    // Track initial page view
    trackPageView(window.location.pathname);

    // Track page changes (for SPA navigation)
    const handlePopState = () => {
      trackPageView(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
};

export default GTMInit;
