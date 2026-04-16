import React, { useState } from "react";
import { Target, Award, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  boardMembers as bm,
  teamMembers as tm,
  customerRelations as cm,
} from "../data";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const boardMembers = await bm();
const teamMembers = await tm();
const customerRelations = await cm();

const domNode = document.getElementById("overlays");

export function AboutUs() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hayStack, setHaystack] = useState<any[]>([]);

  return (
    <>
      {createPortal(
        selectedId && (
          <Modal
            modeKey={selectedId}
            toggleMode={setSelectedId}
            hayStack={hayStack}
          />
        ),
        domNode!,
      )}
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-blue-dark text-brand-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-brand-white">
              About Phindol Insurance
            </h1>
            <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto">
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
                <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
                <p className="text-muted mb-4 text-lg">
                  Founded in 2015, Phindol Insurance Brokers emerged from a
                  simple belief: that every individual and business deserves
                  access to comprehensive, affordable insurance solutions
                  tailored to their unique needs.
                </p>
                <p className="text-muted mb-4 text-lg">
                  What started as a small team of dedicated insurance
                  professionals in Abuja has grown into one of Nigeria's most
                  trusted insurance brokerages. Our success is built on a
                  foundation of trust, expertise, and an unwavering commitment
                  to our clients.
                </p>
                <p className="text-muted text-lg">
                  Today, we serve thousands of individuals and businesses across
                  Nigeria, providing peace of mind through comprehensive
                  insurance solutions that truly protect what matters most.
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

        {/* Our Mission */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIzMDUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our team at work"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
                <p className="text-muted mb-4 text-lg">
                  Founded in 2015, Phindol Insurance Brokers emerged from a
                  simple belief: that every individual and business deserves
                  access to comprehensive, affordable insurance solutions
                  tailored to their unique needs.
                </p>
                <p className="text-muted mb-4 text-lg">
                  What started as a small team of dedicated insurance
                  professionals in Abuja has grown into one of Nigeria's most
                  trusted insurance brokerages. Our success is built on a
                  foundation of trust, expertise, and an unwavering commitment
                  to our clients.
                </p>
                <p className="text-muted text-lg">
                  Today, we serve thousands of individuals and businesses across
                  Nigeria, providing peace of mind through comprehensive
                  insurance solutions that truly protect what matters most.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Our Mission and Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center items-stretch">
              <div className="border-solid border-2 p-8 rounded-xl">
                <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
                <p className="text-muted mb-4 text-lg">
                  Streamlined, cost-effective insurance providing lasting
                  financial security for clients and Shareholders.
                </p>
              </div>
              <div className="border-solid border-2 p-8 rounded-xl">
                <h2 className="text-3xl md:text-4xl mb-6">Our Vision</h2>
                <p className="text-muted mb-4 text-lg">
                  To be Innovative, integrity led while delivering reliable
                  insurance solutions that secure futures for clients and
                  long-term value for Shareholders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Our Vision</h2>
                <p className="text-muted mb-4 text-lg">
                  Founded in 2015, Phindol Insurance Brokers emerged from a
                  simple belief: that every individual and business deserves
                  access to comprehensive, affordable insurance solutions
                  tailored to their unique needs.
                </p>
                <p className="text-muted mb-4 text-lg">
                  What started as a small team of dedicated insurance
                  professionals in Abuja has grown into one of Nigeria's most
                  trusted insurance brokerages. Our success is built on a
                  foundation of trust, expertise, and an unwavering commitment
                  to our clients.
                </p>
                <p className="text-muted text-lg">
                  Today, we serve thousands of individuals and businesses across
                  Nigeria, providing peace of mind through comprehensive
                  insurance solutions that truly protect what matters most.
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
        </section> */}

        {/* Our Values */}
        <section className="py-16 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-7 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  P
                </div>
                <h3 className="text-xl mb-3">Professionalism</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  H
                </div>
                <h3 className="text-xl mb-3">Hospitality</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  I
                </div>
                <h3 className="text-xl mb-3">Innovation</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  N
                </div>
                <h3 className="text-xl mb-3">Negotiation</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  D
                </div>
                <h3 className="text-xl mb-3">Dogeddness</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  O
                </div>
                <h3 className="text-xl mb-3">openness</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4">
                  L
                </div>
                <h3 className="text-xl mb-3">loyalty</h3>
              </div>
              {/* <div className="text-center">
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
                  We build lasting relationships based on trust and mutual
                  respect.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Our Board */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Board Members
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => {
                    console.log("clicked", member);
                    setSelectedId(member.id);
                    setHaystack(boardMembers);
                    document.body.classList.add("overflow-hidden");
                  }}
                  className="card overflow-hidden"
                >
                  <div className="bg-gradient-blue-radial h-48 flex items-center justify-center">
                    {/* <Users className="text-brand-white" size={80} /> */}
                    <ImageWithFallback
                      /* src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" */
                      src={member.image}
                      alt="Car Insurance Brokers"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-2">{member.name}</h3>
                    <p
                      className="text-brand-secondary mb-3"
                      style={{ fontWeight: 600 }}
                    >
                      {member.position}
                    </p>
                    <p className="text-muted text-sm">{member.meta.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Management */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Management Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => {
                    setSelectedId(member.id);
                    setHaystack(teamMembers);
                    document.body.classList.add("overflow-hidden");
                  }}
                  className="card overflow-hidden"
                >
                  <div className="bg-gradient-blue-radial h-48 flex items-center justify-center">
                    {/* <Users className="text-brand-white" size={80} /> */}
                    <ImageWithFallback
                      /* src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" */
                      src={member.image}
                      alt="Car Insurance Brokers"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-2">{member.name}</h3>
                    <p
                      className="text-brand-secondary mb-3"
                      style={{ fontWeight: 600 }}
                    >
                      {member.position}
                    </p>
                    <p className="text-muted text-sm">{member.meta.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Customer Relations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Customer Relations Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {customerRelations.map((member) => (
                <div
                  key={member.id}
                  onClick={() => {
                    setSelectedId(member.id);
                    setHaystack(teamMembers);
                    document.body.classList.add("overflow-hidden");
                  }}
                  className="card overflow-hidden"
                >
                  <div className="bg-gradient-blue-radial h-48 flex items-center justify-center">
                    {/* <Users className="text-brand-white" size={80} /> */}
                    <ImageWithFallback
                      /* src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" */
                      src={member.image}
                      alt="Car Insurance Brokers"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-2">{member.name}</h3>
                    <p
                      className="text-brand-secondary mb-3"
                      style={{ fontWeight: 600 }}
                    >
                      {member.position}
                    </p>
                    <p className="text-muted text-sm">{member.meta.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
