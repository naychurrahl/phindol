import { Link } from 'react-router';
import { FileText, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function ClaimsSupport() {
  const claimSteps = [
    {
      number: 1,
      title: 'Report Your Claim',
      description: 'Contact us immediately via phone, email, or our online form to report your claim.',
    },
    {
      number: 2,
      title: 'Provide Documentation',
      description: 'Submit all required documents including policy details, incident reports, and supporting evidence.',
    },
    {
      number: 3,
      title: 'Claim Assessment',
      description: 'Our claims team will review your submission and may schedule an assessment if needed.',
    },
    {
      number: 4,
      title: 'Approval & Payment',
      description: 'Once approved, your claim will be processed and payment disbursed within the agreed timeframe.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Claims & Support</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help you through every step of the claims process. Our dedicated team ensures fast, fair, and hassle-free claim settlements.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl mb-6 text-gray-900 text-center">Need Immediate Assistance?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Phone className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">24/7 Hotline</h3>
                <p className="text-blue-600 text-xl">+234 XXX XXX XXXX</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Mail className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Email Support</h3>
                <p className="text-blue-600 text-lg">claims@phindolinsurance.com</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Response Time</h3>
                <p className="text-gray-700 text-lg">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            How to File a Claim
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {claimSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.number < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-blue-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Required Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Life Insurance Claims</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Original policy document</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Death certificate (original)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Claimant's ID and proof of relationship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Medical reports (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Police report (if accidental death)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Corporate Insurance Claims</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Policy document and schedule</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Incident report with full details</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Photographs of damage/loss</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Police report (if theft/vandalism)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Repair estimates or invoices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-3 text-gray-900">Important Tips for Filing Claims</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Report your claim as soon as possible after the incident</li>
                  <li>• Keep all original documents and make copies for your records</li>
                  <li>• Take photographs of any damage or loss</li>
                  <li>• Do not dispose of damaged property until the claim is settled</li>
                  <li>• Cooperate fully with the claims assessor</li>
                  <li>• Keep track of all communication regarding your claim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Claim Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl mb-6 text-gray-900 text-center">
              File a Claim Online
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Submit your claim details and our team will get back to you within 24 hours.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Policy Number *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Insurance Type *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select insurance type</option>
                  <option value="life">Life Insurance</option>
                  <option value="corporate">Corporate Insurance</option>
                  <option value="property">Property Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date of Incident *</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Describe the Incident *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Please provide detailed information about what happened..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Upload Documents</label>
                <input
                  type="file"
                  multiple
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-2">
                  You can upload multiple files (Max 10MB each)
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition-colors text-lg"
              >
                Submit Claim
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg mb-2 text-gray-900">How long does the claims process take?</h3>
              <p className="text-gray-600">
                Most claims are processed within 7-14 business days after all required documents are submitted. Complex claims may take longer, but we keep you informed throughout the process.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg mb-2 text-gray-900">Can I track my claim status?</h3>
              <p className="text-gray-600">
                Yes! Once your claim is submitted, you'll receive a claim reference number. Contact our support team with this number to get real-time updates on your claim status.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg mb-2 text-gray-900">What if my claim is denied?</h3>
              <p className="text-gray-600">
                If your claim is denied, we'll provide a detailed explanation. You have the right to appeal the decision by providing additional information or documentation that supports your claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our support team is available 24/7 to assist you with your claims and answer any questions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
