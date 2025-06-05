import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-emerald-300" />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-white/90">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <div className="text-white/90 space-y-4">
              <p>
                Lavafast Laundry Service ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
              <p>
                This policy applies to our laundry services for luxury yachts, villas, and personal garments 
                in Mallorca, Spain.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <div className="text-white/90 space-y-4">
              <h3 className="text-lg font-semibold text-emerald-300">Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Billing and delivery addresses</li>
                <li>Service preferences and special instructions</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication records and service history</li>
              </ul>

              <h3 className="text-lg font-semibold text-emerald-300 mt-6">Website Usage Data</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral sources and search terms</li>
                <li>Device information and screen resolution</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <div className="text-white/90">
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and manage our laundry services</li>
                <li>Process payments and manage billing</li>
                <li>Communicate about your orders and services</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and ensure security</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
            <div className="text-white/90 space-y-4">
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience. 
                You can manage your cookie preferences through our cookie banner.
              </p>
              
              <h3 className="text-lg font-semibold text-emerald-300">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Necessary Cookies:</strong> Essential for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics)</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Information Sharing</h2>
            <div className="text-white/90 space-y-4">
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, delivery services)</li>
                <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
              </ul>
              <p>
                <strong>We do not sell or rent your personal information to third parties for marketing purposes.</strong>
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
            <div className="text-white/90 space-y-4">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet is 100% secure. While we strive 
                to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR)</h2>
            <div className="text-white/90 space-y-4">
              <p>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <div className="text-white/90 space-y-4">
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required by law.
              </p>
              <p>
                Service records are typically retained for 7 years for accounting and legal purposes.
              </p>
            </div>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
            <div className="text-white/90 space-y-4">
              <p>
                Your information may be transferred to and processed in countries outside the European 
                Economic Area (EEA) that may not have equivalent data protection laws.
              </p>
              <p>
                When we transfer your data, we ensure appropriate safeguards are in place to protect 
                your information in accordance with GDPR requirements.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
            <div className="text-white/90 space-y-4">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on our website with an updated "Last Updated" date.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <div className="text-white/90 space-y-4">
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-300" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:privacy@lavafast.es" className="text-emerald-300 hover:text-emerald-200">
                      privacy@lavafast.es
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-300" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <a href="tel:+34646396735" className="text-emerald-300 hover:text-emerald-200">
                      +34 646 396 735
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-300 mt-1" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>
                      Lavafast Laundry Service<br />
                      Gran Via Puig de Galazo 14 E<br />
                      07180 Santa Ponsa<br />
                      Mallorca, Spain
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm">
                <strong>Data Protection Officer:</strong> If you have concerns about how we handle your 
                personal data, you may also contact the Spanish Data Protection Authority (AEPD).
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;