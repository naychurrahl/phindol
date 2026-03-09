import { Target, Award, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { teamMembers } from '../data';

export function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-blue-dark text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-brand-white">About Phindol Insurance</h1>
          <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto">
            Your trusted partner in protecting what matters most, with a commitment to excellence and personalized service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-muted mb-4 text-lg">
                Founded in 2015, Phindol Insurance Brokers emerged from a simple belief: that every individual and business deserves access to comprehensive, affordable insurance solutions tailored to their unique needs.
              </p>
              <p className="text-muted mb-4 text-lg">
                What started as a small team of dedicated insurance professionals in Abuja has grown into one of Nigeria's most trusted insurance brokerages. Our success is built on a foundation of trust, expertise, and an unwavering commitment to our clients.
              </p>
              <p className="text-muted text-lg">
                Today, we serve thousands of individuals and businesses across Nigeria, providing peace of mind through comprehensive insurance solutions that truly protect what matters most.
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
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                <Target className="icon-blue" size={40} />
              </div>
              <h3 className="text-xl mb-3">Integrity</h3>
              <p className="text-muted">
                We operate with honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                <Award className="icon-blue" size={40} />
              </div>
              <h3 className="text-xl mb-3">Excellence</h3>
              <p className="text-muted">
                We strive for the highest standards in service and expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                <Heart className="icon-blue" size={40} />
              </div>
              <h3 className="text-xl mb-3">Care</h3>
              <p className="text-muted">
                We genuinely care about our clients' wellbeing and security.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                <Users className="icon-blue" size={40} />
              </div>
              <h3 className="text-xl mb-3">Partnership</h3>
              <p className="text-muted">
                We build lasting relationships based on trust and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card overflow-hidden">
                <div className="bg-gradient-blue-radial h-48 flex items-center justify-center">
                  <Users className="text-brand-white" size={80} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{member.name}</h3>
                  <p className="text-brand-secondary mb-3" style={{ fontWeight: 600 }}>{member.position}</p>
                  <p className="text-muted text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-brand-white">
            Trusted by Thousands
          </h2>
          <p className="text-xl mb-8 text-brand-blue-100">
            Join the growing number of individuals and businesses who have placed their trust in Phindol Insurance. We're committed to being there when you need us most.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>5,000+</div>
              <div className="text-brand-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>10+</div>
              <div className="text-brand-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 700 }}>98%</div>
              <div className="text-brand-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
