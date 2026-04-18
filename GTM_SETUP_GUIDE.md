# Google Tag Manager Setup Guide

This guide explains how Google Tag Manager (GTM) has been integrated into the Dyranis Consultancy website and how to complete the setup.

## What's Been Implemented

### 1. **GTM Script in HTML** (`index.html`)
- Added GTM container script in the `<head>` tag
- Added GTM noscript fallback in the `<body>` tag
- **Note:** The container ID is currently set to `GTM-XXXXXXX` and needs to be replaced with your actual GTM container ID

### 2. **GTM Utility Library** (`src/lib/gtm.ts`)
Provides helper functions for tracking:
- `initGTM()` - Initialize the data layer
- `trackEvent(eventName, eventData)` - Track custom events
- `trackPhoneCall(phoneNumber)` - Track phone call clicks
- `trackWhatsAppClick(phoneNumber)` - Track WhatsApp clicks
- `trackFormSubmission(formData)` - Track form submissions
- `trackPageView(pageName)` - Track page views
- `trackQuoteCalculator(data)` - Track quote calculator usage
- `trackCTAClick(ctaName, ctaType)` - Track CTA button clicks
- `setUserProperties(properties)` - Set user properties

### 3. **GTM Initialization Component** (`src/components/GTMInit.tsx`)
- Automatically initializes GTM on app load
- Tracks page views for SPA navigation
- Integrated into the main App component

### 4. **Event Tracking on Contact Page** (`src/pages/Contact.tsx`)
Currently tracking:
- Phone call clicks (sticky button, banner, form section, final CTA)
- WhatsApp clicks
- Form submissions with cover type

## Setup Steps

### Step 1: Get Your GTM Container ID
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Sign in with your Google account
3. Create a new container or use an existing one
4. Copy your Container ID (format: `GTM-XXXXXX`)

### Step 2: Update the Container ID
Replace `GTM-XXXXXXX` in two places:

**In `index.html`:**
```html
<!-- Line ~45 -->
'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX'

<!-- Line ~52 -->
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
```

### Step 3: Set Up Tags in GTM

#### Tag 1: Phone Call Tracking
- **Tag Type:** Google Analytics 4 Event
- **Event Name:** `phone_call`
- **Trigger:** Custom Event → Event name equals `phone_call`
- **Parameters:**
  - `phone_number` (from event data)
  - `timestamp` (from event data)

#### Tag 2: WhatsApp Click Tracking
- **Tag Type:** Google Analytics 4 Event
- **Event Name:** `whatsapp_click`
- **Trigger:** Custom Event → Event name equals `whatsapp_click`
- **Parameters:**
  - `phone_number` (from event data)
  - `timestamp` (from event data)

#### Tag 3: Form Submission Tracking
- **Tag Type:** Google Analytics 4 Event
- **Event Name:** `form_submission`
- **Trigger:** Custom Event → Event name equals `form_submission`
- **Parameters:**
  - `cover_type` (from event data)
  - `timestamp` (from event data)

#### Tag 4: Page View Tracking
- **Tag Type:** Google Analytics 4 Event
- **Event Name:** `page_view`
- **Trigger:** Custom Event → Event name equals `page_view`
- **Parameters:**
  - `page_name` (from event data)
  - `timestamp` (from event data)

### Step 4: Connect to Google Analytics 4

1. In GTM, go to **Admin** → **Linked Accounts**
2. Link your Google Analytics 4 property
3. Create a GA4 Configuration tag:
   - **Tag Type:** Google Analytics 4 Configuration
   - **Measurement ID:** Your GA4 Measurement ID
   - **Trigger:** All Pages

### Step 5: Test Your Setup

1. **In GTM Preview Mode:**
   - Click "Preview" in GTM
   - Visit your website
   - Check the GTM debugger console for events

2. **In Google Analytics:**
   - Go to your GA4 property
   - Check **Real-time** → **Events** to see incoming events

## Events Being Tracked

### Phone Call Events
- **Event Name:** `phone_call`
- **Triggered by:** Clicking phone number links throughout the site
- **Data:** Phone number, timestamp

### WhatsApp Events
- **Event Name:** `whatsapp_click`
- **Triggered by:** Clicking WhatsApp links
- **Data:** Phone number, timestamp

### Form Submission Events
- **Event Name:** `form_submission`
- **Triggered by:** Submitting the contact form
- **Data:** Cover type selected, timestamp

### Page View Events
- **Event Name:** `page_view`
- **Triggered by:** Page navigation
- **Data:** Page name/path, timestamp

## Adding More Tracking

To add tracking to other pages or components:

```typescript
import { trackEvent, trackPhoneCall, trackWhatsAppClick } from "@/lib/gtm";

// Track a custom event
trackEvent('my_event', { custom_data: 'value' });

// Track a phone call
trackPhoneCall('0721361188');

// Track WhatsApp click
trackWhatsAppClick('254721361188');
```

## Monitoring & Optimization

### Key Metrics to Monitor
1. **Phone Call Conversion Rate** - % of visitors clicking phone numbers
2. **WhatsApp Engagement** - % of visitors using WhatsApp
3. **Form Submission Rate** - % of visitors submitting the contact form
4. **Page View Distribution** - Which pages get the most traffic

### Recommended Goals/Conversions
- Phone call click (high priority)
- Form submission (high priority)
- WhatsApp click (medium priority)
- Page views on key pages (informational)

## Troubleshooting

### Events Not Appearing in GA4
1. Check that your GA4 Measurement ID is correct
2. Verify the GA4 Configuration tag is firing on all pages
3. Check GTM Preview mode to see if events are being sent to the data layer
4. Allow 24-48 hours for data to fully process in GA4

### Container ID Not Working
1. Double-check the Container ID format (should be `GTM-XXXXXX`)
2. Verify you've updated both instances in `index.html`
3. Clear browser cache and reload

### Events Not Firing
1. Check browser console for JavaScript errors
2. Verify the GTM script loaded (check Network tab)
3. Use GTM Preview mode to debug
4. Check that event handlers are properly attached to elements

## Next Steps

1. ✅ Replace `GTM-XXXXXXX` with your actual Container ID
2. ✅ Set up GA4 tags in GTM
3. ✅ Connect GTM to Google Analytics 4
4. ✅ Test in Preview mode
5. ✅ Publish the container
6. ✅ Monitor events in GA4 Real-time
7. ✅ Set up conversion goals based on tracked events
8. ✅ Create dashboards to monitor key metrics

## Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [Google Analytics 4 Setup Guide](https://support.google.com/analytics/answer/10089681)
- [GTM Event Implementation Best Practices](https://support.google.com/tagmanager/answer/6107169)
