import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BubbleAnimation from './components/animation/Bubbles';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PropertyService from './pages/PropertyService';
import YachtService from './pages/YachtService';
import ApparelService from './pages/ApparelService';
import DeliveryService from './pages/DeliveryService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { CookieManager } from './utils/cookieManager';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize tracking based on cookie preferences
    const preferences = CookieManager.getPreferences();
    if (preferences) {
      if (preferences.analytics) {
        CookieManager.initializeGoogleAnalytics();
      }
      if (preferences.marketing) {
        CookieManager.initializeMarketingTools();
      }
      // Clean up cookies for disabled categories
      CookieManager.clearNonEssentialCookies();
    }
  }, []);

  return (
    <Router>
      <div className="relative w-full min-h-screen">
        {/* Bubble animation as continuous background */}
        <div className="fixed inset-0 z-0">
          <BubbleAnimation />
        </div>
        
        {/* Main app content with routing */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <ScrollToTop />
          <Navigation />
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/property-service" element={<PropertyService />} />
              <Route path="/yacht-service" element={<YachtService />} />
              <Route path="/apparel-service" element={<ApparelService />} />
              <Route path="/delivery-service" element={<DeliveryService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* 404 Route */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-gray-600 mb-8">Page not found</p>
                    <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
        
        {/* Cookie Banner - appears on top of everything */}
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;