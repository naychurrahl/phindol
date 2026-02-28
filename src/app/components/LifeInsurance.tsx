import { Link } from 'react-router';
import { Heart, Shield, Umbrella, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LifeInsurance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">Life Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Secure your family's financial future with comprehensive life insurance coverage designed to provide peace of mind and protection.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
              >
                Get a Quote
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy family"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Life Insurance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Why You Need Life Insurance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Financial Protection</h3>
              <p className="text-gray-600">
                Ensures your loved ones are financially secure in the event of your passing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Peace of Mind</h3>
              <p className="text-gray-600">
                Know that your family will be taken care of no matter what happens.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Future Planning</h3>
              <p className="text-gray-600">
                Build wealth and achieve long-term financial goals with investment-linked policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Our Life Insurance Plans
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Term Life Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Umbrella className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Term Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Affordable coverage for a specific period, perfect for young families and those with temporary financial obligations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Coverage for 10, 20, or 30 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Lower premiums than whole life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Option to convert to permanent insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Renewable coverage options</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Whole Life Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Whole Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Lifetime coverage with a cash value component that grows over time, providing both protection and savings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Lifelong coverage guarantee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Builds cash value over time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Fixed premiums that never increase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Option to borrow against cash value</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Calculator */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl mb-6 text-gray-900 text-center">
              Calculate Your Coverage Needs
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Use our simple calculator to estimate how much life insurance coverage you need.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Annual Income</label>
                <input
                  type="number"
                  placeholder="₦5,000,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Number of Dependents</label>
                <input
                  type="number"
                  placeholder="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Outstanding Debts</label>
                <input
                  type="number"
                  placeholder="₦10,000,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Existing Savings</label>
                <input
                  type="number"
                  placeholder="₦2,000,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Calculate Coverage
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              This is an estimate only. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a personalized life insurance quote today and secure your family's financial future.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
