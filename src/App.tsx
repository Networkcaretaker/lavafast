import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BubbleAnimation from './components/animation/Bubbles';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VillaService from './pages/VillaService';
import YachtService from './pages/YachtService';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        {/* Bubble animation as continuous background */}
        <div className="fixed inset-0 z-0">
          <BubbleAnimation />
        </div>
        
        {/* Main app content with routing */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navigation />
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/villa-service" element={<VillaService />} />
              <Route path="/yacht-service" element={<YachtService />} />
              <Route path="/contact" element={<Contact />} />
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
      </div>
    </Router>
  );
}

export default App;