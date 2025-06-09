// src/pages/Contact.tsx
import React from 'react';
import WhatsApp from '../components/contact/Whatsapp';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-12">
      <div className="max-w-6xl mx-auto"> 
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-white/90">
                <p>📧 <a href="mailto:info@lavafast.es" target="_blank" rel="noopener noreferrer">info@lavafast.es</a></p>
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
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/90">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="py-4 text-emerald-300/90">
                <p>Out of hours service available on request</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;