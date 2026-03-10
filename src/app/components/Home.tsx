import { Link } from 'react-router';
import { ArrowRight, Shield, Users, Clock, Phone, Filter, Percent, Car, Headphones, ClipboardCheck } from 'lucide-react';
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
                Better Cover. Lower Premium. We'll Find It.
              </h1>
              <p className="text-xl mb-8 text-brand-blue-100">
                Phindol Insurance compares 20+ top Nigerian insurers to find you
                the right cover at the right price. Policies that actually pay
                when you claim.
              </p>
              <div className="flex flex-row gap-4 min-w-0">
                <Link
                  to="/contact"
                  className="flex items-center min-w-0 whitespace-nowrap bg-[#4172af] text-white px-4 py-4 rounded-md hover:bg-[#4172af60] transition-colors text-[clamp(0.8rem,2vw,1rem)]"
                >
                  <span className="min-w-0 truncate">Get a Free Quote</span>
                  <ArrowRight className="ml-2 shrink-0" size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center min-w-0 whitespace-nowrap bg-white text-[#4172af] px-4 py-4 rounded-md hover:bg-gray-100 transition-colors text-[clamp(0.8rem,2vw,1rem)]"
                >
                  <span className="min-w-0 truncate">Call Now</span>
                  <Phone className="ml-2 shrink-0" size={20} />
                </Link>
              </div>
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

      {/* Infographics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <ClipboardCheck className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                Free comparisons from 20+ top insurers
              </h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Headphones className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                24/7 claims support in Abuja, Lagos, Kano & nationwide
              </h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Car className="text-[#4172af]" size={32} />
                <Percent className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                Save up to 40% on car insurance premiums
              </h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Filter className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                20+ Top insurers compared on every single quote
              </h3>
            </div>
          </div>
          <p className="text-2xl md:text-2xl text-center mb-12 text-gray-600">
            Licensed by NAICOM Trusted by Nigerians
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Why Phindol?
          </h2>
          <p className="text-2xl md:text-2xl text-center mb-12 text-gray-600">
            Nigeria's Smartest Way to Get Insured
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Shield className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                NAICOM Licensed - Fully Accountable
              </h3>
              <p className="text-gray-600">
                We operate under Nigeria's strictest regulatory standards. Your
                money, your policy, and your claims are protected from day one.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Users className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                One Request, 20+ Quotes Instantly
              </h3>
              <p className="text-gray-600">
                We pull live comparisons from over 20 top insurers
                simultaneously giving you the full market picture, not a single
                company's offer.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Clock className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                We Fight Your Corner When It Counts
              </h3>
              <p className="text-gray-600">
                Our 24/7 claims team advocates for you directly with insurers,
                so you get paid fairly and fast, without the runaround.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 text-[#14345d] rounded-full mb-4">
                <Clock className="text-[#4172af]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Save Up to 40%</h3>
              <p className="text-gray-600">
                Our clients consistently pay less for stronger coverage. If we
                can't beat your current premium, we'll tell you honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Car Insurance Brokers */}
            <div
              id="carInsuranceBrokers"
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Car Insurance Brokers"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">
                  Car Insurance Brokers
                </h3>
                <p className="text-gray-600 mb-4">
                  Affordable third-party & comprehensive car insurance quotes.
                  Best rates for drivers.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#4172af] hover:text-[#4172af]"
                >
                  Get Car Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Health Insurance Nigeria */}
            <div
              id="healthInsuranceNigeria"
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Health Insurance Nigeria"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">
                  Health Insurance Nigeria
                </h3>
                <p className="text-gray-600 mb-4">
                  Family & individual HMO plans from top providers. Coverage for
                  hospitals nationwide.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#4172af] hover:text-[#4172af]"
                >
                  Compare Health Plans
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Home & Property Insurance */}
            <div
              id="homePropertyInsurance"
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Home & Property Insurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">
                  Home & Property Insurance
                </h3>
                <p className="text-gray-600 mb-4">
                  Protect your home, renters, or property from fire, theft &
                  floods.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#4172af] hover:text-[#4172af]"
                >
                  Free Home Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Business Insurance */}
            <div
              id="businessInsurance"
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Insurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">
                  Business Insurance
                </h3>
                <p className="text-gray-600 mb-4">
                  Liability, professional indemnity & more for SMEs in Nigeria.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#4172af] hover:text-[#4172af]"
                >
                  Business Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Client Stories
          </h2>
          <p className="text-2xl md:text-2xl text-center mb-12 text-gray-600">
            Over 10,000 Nigerians trust Phindol to protect what matters most.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl mb-3 text-gray-900">
                "Phindol Insurance Brokers saved me 35% on my Toyota Corolla
                insurance in Abuja. Super fast!"
              </h3>
              <p className="text-gray-600">– Chinedu O., Abuja</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl mb-3 text-gray-900">
                "Best health insurance brokers in Nigeria. Seamless process!"
              </h3>
              <p className="text-gray-600">– Fatima A., Abuja</p>
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
            Get in touch with our expert team today for a free consultation and
            personalized quote.
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
