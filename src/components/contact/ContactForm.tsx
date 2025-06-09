// src/components/contact/ContactForm.tsx
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous status when user starts typing
    if (formStatus.type !== 'idle') {
      setFormStatus({ type: 'idle', message: '' });
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your name.' });
      return false;
    }
    
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your email address.' });
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your message.' });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // For local development - use emulator
      // For production - use deployed function
      const isLocal = window.location.hostname === 'localhost';
      const apiUrl = isLocal 
        ? 'http://localhost:5001/lavafast-laundry-service/europe-west1/sendContactEmail'
        : 'https://europe-west1-lavafast-laundry-service.cloudfunctions.net/sendContactEmail';

      console.log('Submitting to:', apiUrl);
      console.log('Form data:', formData);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok && result.success) {
        // Success
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // Error from function
        setFormStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Error sending message:', error);
      setFormStatus({
        type: 'error',
        message: 'Unable to send message. Please check your internet connection and try again.'
      });
    }
  };

  const getStatusColor = () => {
    switch (formStatus.type) {
      case 'loading': return 'text-blue-400';
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      default: return '';
    }
  };

  const getButtonText = () => {
    switch (formStatus.type) {
      case 'loading': return 'Sending...';
      case 'success': return 'Message Sent!';
      default: return 'Send Message';
    }
  };

  const isFormDisabled = formStatus.type === 'loading' || formStatus.type === 'success';

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 ${className}`}>
      <h2 className="text-xl font-bold text-white mb-6">Get In Touch</h2>
      
      {/* Status Message */}
      {formStatus.message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${getStatusColor()} bg-white/10`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isFormDisabled}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white/60 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Your Name"
            required
          />
        </div>
        
        <div>
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isFormDisabled}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white/60 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-white mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isFormDisabled}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white/60 focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Your message..."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isFormDisabled}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            formStatus.type === 'success'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : formStatus.type === 'loading'
              ? 'bg-blue-500 text-white cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:enabled:bg-blue-700'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {getButtonText()}
        </button>
      </form>
      
      {/* Reset form button after success */}
      {formStatus.type === 'success' && (
        <button
          onClick={() => {
            setFormStatus({ type: 'idle', message: '' });
          }}
          className="w-full mt-3 py-2 rounded-lg font-medium text-white/80 hover:text-white transition-colors border border-white/30 hover:border-white/60"
        >
          Send Another Message
        </button>
      )}
    </div>
  );
};

export default ContactForm;