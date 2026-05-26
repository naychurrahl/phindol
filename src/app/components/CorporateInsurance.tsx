import { Link } from 'react-router';
import { Building2, Shield, Users, Briefcase, CheckCircle, ArrowRight, FileText, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function CorporateInsurance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">Corporate Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive insurance solutions to protect your business, assets, and employees, helping you grow with confidence.
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
                src="https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Corporate Insurance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Why Your Business Needs Insurance
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Asset Protection</h3>
              <p className="text-gray-600">
                Safeguard your property, equipment, and inventory.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Employee Welfare</h3>
              <p className="text-gray-600">
                Provide health and safety coverage for your team.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Liability Coverage</h3>
              <p className="text-gray-600">
                Protect against legal claims and lawsuits.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Business Continuity</h3>
              <p className="text-gray-600">
                Ensure operations continue after disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Our Corporate Insurance Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Building2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Property Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive coverage for your business premises, equipment, and inventory.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Building and contents coverage</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Fire and natural disaster protection</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Theft and vandalism coverage</span>
                </li>
              </ul>
            </div>

            {/* Liability Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">General Liability</h3>
              <p className="text-gray-600 mb-4">
                Protection against third-party claims for bodily injury and property damage.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Public liability coverage</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Product liability insurance</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Professional indemnity</span>
                </li>
              </ul>
            </div>

            {/* Employee Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Employee Benefits</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health and welfare packages for your workforce.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Group health insurance</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Group life insurance</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Workman's compensation</span>
                </li>
              </ul>
            </div>

            {/* Business Interruption */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Business Interruption</h3>
              <p className="text-gray-600 mb-4">
                Coverage for lost income and operating expenses during disruptions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Lost income replacement</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Operating expense coverage</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Temporary relocation costs</span>
                </li>
              </ul>
            </div>

            {/* Professional Indemnity */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Briefcase className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Professional Indemnity</h3>
              <p className="text-gray-600 mb-4">
                Protection for professionals against claims of negligence or errors.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Legal defense costs</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Compensation payments</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Errors and omissions cover</span>
                </li>
              </ul>
            </div>

            {/* Cyber Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Cyber Insurance</h3>
              <p className="text-gray-600 mb-4">
                Protection against data breaches and cyber attacks in the digital age.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Data breach response</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Cyber liability coverage</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700">Business interruption losses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Tailored Solutions for Your Industry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Manufacturing', 'Retail & Hospitality', 'Technology & IT', 'Healthcare', 'Construction', 'Financial Services', 'Education', 'Professional Services'].map((industry, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                <p className="text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a customized corporate insurance package tailored to your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg"
          >
            Request a Business Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
