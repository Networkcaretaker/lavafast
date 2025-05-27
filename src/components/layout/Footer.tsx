// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-sm text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LAVAFAST</h3>
            <p className="text-white/80">
              Premium luxury services for villa rentals and yacht charters.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Villa Rentals</li>
              <li>Yacht Charters</li>
              <li>Concierge Services</li>
              <li>Event Planning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>📧 info@lavafast.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Luxury Avenue</p>
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