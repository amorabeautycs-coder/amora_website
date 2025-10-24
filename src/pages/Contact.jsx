import React, { useState } from 'react';
import { dataClient } from '@/api/dataClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await dataClient.integrations.Core.SendEmail({
        to: 'Amorabeautycs@gmail.com',
        subject: `Contact Form: ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          
          Message:
          ${formData.message}
        `,
      });

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-ivory py-20">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
          <h1
            className="text-4xl md:text-7xl text-navy mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            We'd love to hear from you
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div
            className="lg:col-span-3 p-10 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(197, 162, 93, 0.25)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            {submitSuccess && (
              <Alert
                className="mb-8 rounded-xl"
                style={{
                  border: '1px solid rgba(197, 162, 93, 0.25)',
                  background: 'rgba(250, 248, 245, 0.85)',
                }}
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="w-4 h-4 text-gold" aria-hidden="true" />
                <AlertDescription className="text-sm text-gray-700" style={{ fontWeight: 300 }}>
                  Thank you. Your message has been sent successfully.
                </AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive" className="mb-8 rounded-xl" role="alert">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div>
                <Label
                  htmlFor="name"
                  className="text-xs tracking-[0.2em] uppercase text-navy mb-3 block"
                  style={{ fontWeight: 400 }}
                >
                  Full Name <span className="text-gold" aria-label="required">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg h-12"
                  style={{
                    border: '1px solid rgba(197, 162, 93, 0.25)',
                    background: 'rgba(250, 248, 245, 0.5)',
                  }}
                  placeholder="John Doe"
                  aria-required="true"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-xs tracking-[0.2em] uppercase text-navy mb-3 block"
                  style={{ fontWeight: 400 }}
                >
                  Email Address <span className="text-gold" aria-label="required">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg h-12"
                  style={{
                    border: '1px solid rgba(197, 162, 93, 0.25)',
                    background: 'rgba(250, 248, 245, 0.5)',
                  }}
                  placeholder="john@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-xs tracking-[0.2em] uppercase text-navy mb-3 block"
                  style={{ fontWeight: 400 }}
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg h-12"
                  style={{
                    border: '1px solid rgba(197, 162, 93, 0.25)',
                    background: 'rgba(250, 248, 245, 0.5)',
                  }}
                  placeholder="+1 (866) 242-9068"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-xs tracking-[0.2em] uppercase text-navy mb-3 block"
                  style={{ fontWeight: 400 }}
                >
                  Message <span className="text-gold" aria-label="required">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="rounded-lg"
                  style={{
                    border: '1px solid rgba(197, 162, 93, 0.25)',
                    background: 'rgba(250, 248, 245, 0.5)',
                  }}
                  placeholder="Tell us how we can help you..."
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/90 text-white py-6 rounded-xl text-sm tracking-wider uppercase"
                style={{ fontWeight: 400, letterSpacing: '0.15em' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2
                className="text-xs tracking-[0.2em] uppercase text-navy mb-6"
                style={{ fontWeight: 400 }}
              >
                Contact
              </h2>
              <div className="space-y-4 text-sm text-gray-600" style={{ fontWeight: 300 }}>
                <p>
                  <a
                    href="mailto:Amorabeautycs@gmail.com"
                    className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm"
                    aria-label="Email us at Amorabeautycs@gmail.com"
                  >
                    Amorabeautycs@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+15551234567"
                    className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold rounded-sm"
                    aria-label="Call us at +1 (866) 242-9068"
                  >
                    +1 (866) 242-9068
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2
                className="text-xs tracking-[0.2em] uppercase text-navy mb-6"
                style={{ fontWeight: 400 }}
              >
                Address
              </h2>
              <address
                className="text-sm text-gray-600 not-italic leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                3663 Las Vegas Blvd S. Las Vegas, NV 89109
              </address>
            </div>

            <div
              className="p-8 rounded-xl"
              style={{
                background: 'rgba(250, 248, 245, 0.85)',
                border: '1px solid rgba(197, 162, 93, 0.25)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
              }}
            >
              <h2
                className="text-xs tracking-[0.2em] uppercase text-navy mb-6"
                style={{ fontWeight: 400 }}
              >
                Business Hours
              </h2>
              <div className="space-y-3 text-sm" style={{ fontWeight: 300 }}>
                <div className="flex justify-between text-gray-600">
                  <span>Monday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tuesday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Wednesday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Thursday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Friday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Saturday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Sunday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
