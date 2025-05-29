// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import WhatsApp from '../contact/Whatsapp';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-sm text-white py-8 mt-auto rounded-lg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex-shrink-0">
              <img 
                src="/text_logo_white.svg" 
                alt="LAVAFAST Logo" 
                className="object-contain mx-auto max-w-32 md:max-w-44 pb-6"
              />
            </div>
            <p className="text-white/80">
              Professional Laundry services for your finest apparel, luxury properties and exquisite yachts.
            </p>
            <h3 className="text-sm font-bold mb-4 mt-6">FOLLOW US</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-emerald-300 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-emerald-300 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-emerald-300 hover:text-blue-700">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-emerald-300 hover:text-blue-400">
                <Twitter size={24} />
              </a>
            </div>
            </div>
          <div>
            <h4 className="font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/property-service" className=" text-white/80 hover:text-emerald-300/80">
                  Homes
                </Link>
              </li>
              <li><Link to="/yacht-service" className=" text-white/80 hover:text-emerald-300/80">Yachts</Link></li>
              <li><Link to="/apparel-service" className=" text-white/80 hover:text-emerald-300/80">Apparel</Link></li>
              <li><Link to="/delivery-service" className=" text-white/80 hover:text-emerald-300/80">Delivery</Link></li>
              <li><Link to="/events" className=" text-white/80 hover:text-emerald-300/80">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <div className="space-y-2 text-white/80">
              <p>📧 <a href="mailto:info@lavafast.com" target="_blank">info@lavafast.com</a></p>
              <p>📞 +34 646 39 67 35</p>
              <p>📍 Gran Via Puig de Galatzó 14 E, 07180, Santa Ponsa, Mallorca</p>
              <div className="my-4">
                <WhatsApp
                  phoneNumber="+34646396735"
                  message="Hello! I'm interested in your laundry services."
                  size="sm"
                  className="my-2"
                >
                  Contact us on WhatsApp
                </WhatsApp>
              </div>
              
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