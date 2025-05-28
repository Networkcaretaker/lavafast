import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourpage',
      icon: Facebook,
      hoverColor: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourpage',
      icon: Instagram,
      hoverColor: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/yourcompany',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourpage',
      icon: Twitter,
      hoverColor: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Choose Your Style</h2>
      
      {/* Option 1: Simple Icons */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Option 1: Simple & Clean</h3>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${social.hoverColor} transition-colors duration-300`}
                aria-label={`Follow us on ${social.name}`}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Option 2: Circular with Background */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Option 2: Circular Background</h3>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                aria-label={`Follow us on ${social.name}`}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Option 3: Luxury Gradient Style */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Option 3: Luxury Style (Recommended)</h3>
        <div className="flex justify-center gap-5">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
                aria-label={`Follow us on ${social.name}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <IconComponent size={22} className="relative z-10" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Option 4: Minimal with Brand Colors */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Option 4: Brand Colors</h3>
        <div className="flex justify-center gap-4">
          <a
            href={socialLinks[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
            aria-label="Follow us on Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href={socialLinks[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={socialLinks[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={socialLinks[3].url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
            aria-label="Follow us on Twitter"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
        <div className="text-gray-300 mb-2">// Simple implementation for your footer:</div>
        <div className="text-blue-300">const</div> <div className="text-yellow-300">SocialIcons</div> = () => (
        <br />
        &nbsp;&nbsp;&lt;<span className="text-red-300">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"flex justify-center gap-4"</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-300">a</span> <span className="text-blue-300">href</span>=<span className="text-green-300">"https://facebook.com/yourpage"</span>&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-300">Facebook</span> <span className="text-blue-300">size</span>={'{24}'} /&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-red-300">a</span>&gt;
        <br />
        &nbsp;&nbsp;&lt;/<span className="text-red-300">div</span>&gt;
        <br />
        );
      </div>
    </div>
  );
};

export default SocialMediaIcons;