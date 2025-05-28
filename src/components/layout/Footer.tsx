// Footer.tsx
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-sm text-white py-8 mt-auto rounded-lg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LAVAFAST</h3>
            <p className="text-white/80">
              Professional Laundry services for your finest apparel, luxury properties and exquisite yachts.
            </p>
            <h3 className="text-sm font-bold mb-4 mt-4">FOLLOW US</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <Twitter size={24} />
              </a>
            </div>
            </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Homes</li>
              <li>Yachts</li>
              <li>Garments</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>📧 info@lavafast.com</p>
              <p>📞 +34 646 39 67 35</p>
              <p>📍 Gran Via Puig de Galatzó 14 E, 07180, Santa Ponsa, Mallorca</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 LAVAFAST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;