import { Target, Award, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUs() {
  const teamMembers = [
    {
      name: 'Dr. Adewale Johnson',
      role: 'CEO & Founder',
      description: 'Over 20 years of experience in the insurance industry.',
    },
    {
      name: 'Chioma Okafor',
      role: 'Head of Operations',
      description: 'Expert in claims processing and customer relations.',
    },
    {
      name: 'Ibrahim Musa',
      role: 'Senior Insurance Advisor',
      description: 'Specializes in corporate and life insurance solutions.',
    },
    {
      name: 'Fatima Bello',
      role: 'Customer Service Manager',
      description: 'Dedicated to providing exceptional client experiences.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4172af98] to-[#4172af] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">About Phindol Insurance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in protecting what matters most, with a
            commitment to excellence and personalized service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2015, Phindol Insurance Brokers emerged from a simple
                belief: that every individual and business deserves access to
                comprehensive, affordable insurance solutions tailored to their
                unique needs.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                What started as a small team of dedicated insurance
                professionals in Abuja has grown into one of Nigeria's most
                trusted insurance brokerages. Our success is built on a
                foundation of trust, expertise, and an unwavering commitment to
                our clients.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we serve thousands of individuals and businesses across
                Nigeria, providing peace of mind through comprehensive insurance
                solutions that truly protect what matters most.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIzMDUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team at work"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Target className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in service and expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Heart className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Care</h3>
              <p className="text-gray-600">
                We genuinely care about our clients' wellbeing and security.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust and mutual
                respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center">
                  <Users className="text-white" size={80} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Trusted by Thousands</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the growing number of individuals and businesses who have
            placed their trust in Phindol Insurance. We're committed to being
            there when you need us most.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl mb-2">5,000+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
