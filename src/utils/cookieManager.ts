// src/utils/cookieManager.ts

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const COOKIE_CONSENT_KEY = 'lavafast-cookie-consent';

// Extend the Window interface to include gtag and dataLayer
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export class CookieManager {
  static getPreferences(): CookiePreferences | null {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  static setPreferences(preferences: CookiePreferences): void {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
  }

  static hasConsent(): boolean {
    return this.getPreferences() !== null;
  }

  static canUseAnalytics(): boolean {
    const prefs = this.getPreferences();
    return prefs?.analytics ?? false;
  }

  static canUseMarketing(): boolean {
    const prefs = this.getPreferences();
    return prefs?.marketing ?? false;
  }

  static canUseFunctional(): boolean {
    const prefs = this.getPreferences();
    return prefs?.functional ?? false;
  }

  static initializeGoogleAnalytics(): void {
    if (this.canUseAnalytics()) {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) { 
          window.dataLayer?.push(args); 
        }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      };
    }
  }

  static initializeMarketingTools(): void {
    if (this.canUseMarketing()) {
      // Initialize marketing tools like Facebook Pixel, etc.
      console.log('Marketing cookies accepted - initialize marketing tools');
    }
  }

  static clearNonEssentialCookies(): void {
    const prefs = this.getPreferences();
    if (!prefs) return;

    // Clear analytics cookies if not consented
    if (!prefs.analytics) {
      // Clear Google Analytics cookies
      const gaCookies = document.cookie.split(';').filter(cookie => 
        cookie.trim().startsWith('_ga') || 
        cookie.trim().startsWith('_gid') ||
        cookie.trim().startsWith('_gat')
      );
      
      gaCookies.forEach(cookie => {
        const cookieName = cookie.split('=')[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    }

    // Clear marketing cookies if not consented
    if (!prefs.marketing) {
      // Clear Facebook Pixel cookies
      const fbCookies = document.cookie.split(';').filter(cookie => 
        cookie.trim().startsWith('_fb') || 
        cookie.trim().startsWith('fbp') ||
        cookie.trim().startsWith('fbc')
      );
      
      fbCookies.forEach(cookie => {
        const cookieName = cookie.split('=')[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    }
  }
}