import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { companyInfo, services } from '../data';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      insuranceType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our expert team. We're here to help you find the
            perfect insurance solution.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our insurance products? Need help with a
                claim? Our dedicated team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg mb-1 text-gray-900">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      Phindol Insurance Brokers
                      <br />
                      Central Business District
                      <br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg mb-1 text-gray-900">Phone</h3>
                    <p className="text-gray-600">{`${companyInfo.phone}`}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      24/7 Emergency Hotline
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-600">{`${companyInfo.email}`}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg mb-1 text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwZmFtaWx5fGVufDF8fHx8MTc3MjI0NDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Insurance protection"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl mb-6 text-gray-900">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="insuranceType"
                      className="block text-gray-700 mb-2"
                    >
                      Insurance Type *
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select insurance type</option>
                      <option value="life">Life Insurance</option>
                      <option value="corporate">Corporate Insurance</option>
                      <option value="property">Property Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8 text-gray-900">
            Visit Our Office
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
                <p className="text-gray-600 text-lg">
                  Phindol Insurance Brokers
                </p>
                <p className="text-gray-500">
                  Central Business District, Abuja
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  [Google Maps integration would be displayed here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact an expert now for a free consultation and personalized
            insurance quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="mr-2" size={20} />
              Call Us Now
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 transition-colors text-lg"
            >
              <Mail className="mr-2" size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
