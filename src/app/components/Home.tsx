import { Link } from 'react-router';
import { ArrowRight, Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-blue text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-white">
                Protect What Matters Most – Tailored Insurance Solutions for You
              </h1>
              <p className="text-xl mb-8 text-brand-blue-100">
                Comprehensive insurance coverage designed to secure your future and give you peace of mind.
              </p>
              <Link
                to="/contact"
                className="btn-success inline-flex items-center text-lg"
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
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Why Choose Phindol Insurance?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="icon-wrapper-blue mb-4">
                <Shield className="icon-blue" size={32} />
              </div>
              <h3 className="text-xl mb-3">Comprehensive Coverage</h3>
              <p className="text-muted">
                Wide range of insurance products tailored to meet your specific needs and budget.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="icon-wrapper-blue mb-4">
                <Users className="icon-blue" size={32} />
              </div>
              <h3 className="text-xl mb-3">Expert Team</h3>
              <p className="text-muted">
                Experienced professionals dedicated to providing personalized service and guidance.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="icon-wrapper-blue mb-4">
                <Clock className="icon-blue" size={32} />
              </div>
              <h3 className="text-xl mb-3">Fast Claims Processing</h3>
              <p className="text-muted">
                Quick and efficient claims handling to get you the support you need when it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Our Insurance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Life Insurance */}
            <div className="card card-hover overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Life insurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">Life Insurance</h3>
                <p className="text-muted mb-4">
                  Secure your family's financial future with our comprehensive life insurance plans designed to provide peace of mind.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-brand-primary">Term and whole life options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-brand-primary">Flexible coverage amounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-brand-primary">Affordable premiums</span>
                  </li>
                </ul>
                <Link
                  to="/services/life-insurance"
                  className="link-blue inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Corporate Insurance */}
            <div className="card card-hover overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate insurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3">Corporate Insurance</h3>
                <p className="text-muted mb-4">
                  Protect your business with tailored corporate insurance solutions covering assets, liability, and employee welfare.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-brand-primary">Property and liability coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-brand-primary">Employee benefits packages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-brand-primary">Customized business solutions</span>
                  </li>
                </ul>
                <Link
                  to="/services/corporate-insurance"
                  className="link-blue inline-flex items-center"
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
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-brand-white">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8 text-brand-blue-100">
            Get in touch with our expert team today for a free consultation and personalized quote.
          </p>
          <Link
            to="/contact"
            className="btn-white inline-flex items-center text-lg"
          >
            Contact an Expert Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
