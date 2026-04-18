/**
 * Google Tag Manager utility functions
 * Provides methods to track events and user interactions
 */

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

/**
 * Initialize GTM data layer if it doesn't exist
 */
export const initGTM = () => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
};

/**
 * Push an event to the GTM data layer
 * @param eventName - The name of the event
 * @param eventData - Additional data to send with the event
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (!window.dataLayer) {
    initGTM();
  }

  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });

  console.log(`[GTM] Event tracked: ${eventName}`, eventData);
};

/**
 * Track a phone call click
 */
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', {
    phone_number: phoneNumber,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track a WhatsApp message click
 */
export const trackWhatsAppClick = (phoneNumber: string) => {
  trackEvent('whatsapp_click', {
    phone_number: phoneNumber,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formData: {
  name?: string;
  email?: string;
  phone?: string;
  cover?: string;
}) => {
  trackEvent('form_submission', {
    cover_type: formData.cover,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track page view
 */
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_name: pageName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track quote calculator usage
 */
export const trackQuoteCalculator = (data: Record<string, any>) => {
  trackEvent('quote_calculator_used', {
    ...data,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaName: string, ctaType: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_type: ctaType,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Set user properties
 */
export const setUserProperties = (properties: Record<string, any>) => {
  if (!window.dataLayer) {
    initGTM();
  }

  window.dataLayer.push({
    ...properties,
  });
};
