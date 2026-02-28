import { Link } from 'react-router';
import { ArrowRight, Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Protect What Matters Most – Tailored Insurance Solutions for You
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive insurance coverage designed to secure your future and give you peace of mind.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 transition-colors text-lg"
              >
                Get a Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632961974688-fae53de3cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMHRlYW0lMjB0cnVzdHxlbnwxfHx8fDE3NzIzMDUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diverse professionals team"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Why Choose Phindol Insurance?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Comprehensive Coverage</h3>
              <p className="text-gray-600">
                Wide range of insurance products tailored to meet your specific needs and budget.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to providing personalized service and guidance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Fast Claims Processing</h3>
              <p className="text-gray-600">
                Quick and efficient claims handling to get you the support you need when it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Our Insurance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Life Insurance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Life insurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">Life Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Secure your family's financial future with our comprehensive life insurance plans designed to provide peace of mind.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Term and whole life options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Flexible coverage amounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Affordable premiums</span>
                  </li>
                </ul>
                <Link
                  to="/services/life-insurance"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Corporate Insurance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate insurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">Corporate Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Protect your business with tailored corporate insurance solutions covering assets, liability, and employee welfare.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Property and liability coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Employee benefits packages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Customized business solutions</span>
                  </li>
                </ul>
                <Link
                  to="/services/corporate-insurance"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch with our expert team today for a free consultation and personalized quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
          >
            Contact an Expert Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
