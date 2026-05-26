import { Link } from 'react-router';
import { Heart, Shield, Umbrella, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function LifeInsurance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-blue-dark text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6 text-brand-white">Life Insurance</h1>
              <p className="text-xl text-brand-blue-100 mb-8">
                Secure your family's financial future with comprehensive life insurance coverage designed to provide peace of mind and protection.
              </p>
              <Link
                to="/contact"
                className="btn-success inline-flex items-center"
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
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Why You Need Life Insurance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="icon-wrapper-blue mb-4">
                <Shield className="icon-blue" size={32} />
              </div>
              <h3 className="text-xl mb-3">Financial Protection</h3>
              <p className="text-muted">
                Ensures your loved ones are financially secure in the event of your passing.
              </p>
            </div>
            <div className="card p-6">
              <div className="icon-wrapper-blue mb-4">
                <Heart className="icon-blue" size={32} />
              </div>
              <h3 className="text-xl mb-3">Peace of Mind</h3>
              <p className="text-muted">
                Know that your family will be taken care of no matter what happens.
              </p>
            </div>
            <div className="card p-6">
              <div className="icon-wrapper-blue mb-4">
                <TrendingUp className="icon-blue" size={32} />
              </div>
              <h3 className="text-xl mb-3">Future Planning</h3>
              <p className="text-muted">
                Build wealth and achieve long-term financial goals with investment-linked policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Our Life Insurance Plans
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Term Life Insurance */}
            <div className="card p-8">
              <div className="icon-wrapper-blue mb-4">
                <Umbrella className="icon-blue" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Term Life Insurance</h3>
              <p className="text-muted mb-6">
                Affordable coverage for a specific period, perfect for young families and those with temporary financial obligations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Coverage for 10, 20, or 30 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Lower premiums than whole life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Option to convert to permanent insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Renewable coverage options</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="link-blue inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Whole Life Insurance */}
            <div className="card p-8">
              <div className="icon-wrapper-blue mb-4">
                <Users className="icon-blue" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Whole Life Insurance</h3>
              <p className="text-muted mb-6">
                Lifetime coverage with a cash value component that grows over time, providing both protection and savings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Lifelong coverage guarantee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Builds cash value over time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Fixed premiums that never increase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-primary">Option to borrow against cash value</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="link-blue inline-flex items-center"
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
          <div className="card p-8">
            <h2 className="text-3xl mb-6 text-center">
              Calculate Your Coverage Needs
            </h2>
            <p className="text-muted text-center mb-8">
              Use our simple calculator to estimate how much life insurance coverage you need.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-brand-primary mb-2">Annual Income</label>
                <input
                  type="number"
                  placeholder="₦5,000,000"
                  className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary"
                />
              </div>
              <div>
                <label className="block text-brand-primary mb-2">Number of Dependents</label>
                <input
                  type="number"
                  placeholder="3"
                  className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary"
                />
              </div>
              <div>
                <label className="block text-brand-primary mb-2">Outstanding Debts</label>
                <input
                  type="number"
                  placeholder="₦10,000,000"
                  className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary"
                />
              </div>
              <div>
                <label className="block text-brand-primary mb-2">Existing Savings</label>
                <input
                  type="number"
                  placeholder="₦2,000,000"
                  className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary"
                />
              </div>
            </div>
            <button className="btn-primary w-full mt-6">
              Calculate Coverage
            </button>
            <p className="text-sm text-brand-gray-500 text-center mt-4">
              This is an estimate only. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-brand-white">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl mb-8 text-brand-blue-100">
            Let our experts help you find the perfect life insurance plan for your needs.
          </p>
          <Link
            to="/contact"
            className="btn-white inline-flex items-center text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
