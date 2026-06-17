import React, { useState } from "react";
import { Target, Award, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  boardMembers,
  management,
  customerRelations,
  partners,
  truncateWords,
  countWords,
} from "@/app/data";
import Modal from "@/app/components/Modal";
import { createPortal } from "react-dom";

const domNode = document.getElementById("overlays");

interface CardInterface {
  group: Staff[];
  title?: string;
  cols?: number;
};

interface Staff {
  id: number;
  name: string;
  position: string;
  image: string;
  meta: {[key: string]: any};
}

export function AboutUs() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hayStack, setHaystack] = useState<any[]>([]);
  
  function Card({ title = "Poorly Named Group", group, cols=3 }: CardInterface) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Our {title}
          </h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-${cols} gap-8`}>
            {group.map((member) => (
              <div
                key={member.id}
                onClick={() => {
                  setSelectedId(member.id);
                  setHaystack(group);
                  document.body.classList.add("overflow-hidden");
                }}
                className="card overflow-hidden flex flex-col items-center justify-center"
              >
                <div className="bg-gradient-blue-radial h-48 aspect-[2/3] flex items-center justify-center">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
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
                  <p className="text-muted text-sm">{`${truncateWords(member.meta.bio, " ... Read more.", 30 - (countWords(member.name) + countWords(member.position)))}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
                  src="/stock/story.jpg"
                  alt="Our team at work"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

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

        {/* Our Values */}
        <section className="py-16 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-7 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4 text-3xl md:text-4xl text-center mb-12">
                  P
                </div>
                <h3 className="text-xl mb-3">Professionalism</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full text-3xl md:text-4xl text-center mb-12">
                  H
                </div>
                <h3 className="text-xl mb-3">Hospitality</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full text-3xl md:text-4xl text-center mb-12">
                  I
                </div>
                <h3 className="text-xl mb-3">Innovation</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full text-3xl md:text-4xl text-center mb-12">
                  N
                </div>
                <h3 className="text-xl mb-3">Negotiation</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full text-3xl md:text-4xl text-center mb-12">
                  D
                </div>
                <h3 className="text-xl mb-3">Dogeddness</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full text-3xl md:text-4xl text-center mb-12">
                  O
                </div>
                <h3 className="text-xl mb-3">openness</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full text-3xl md:text-4xl text-center mb-12">
                  L
                </div>
                <h3 className="text-xl mb-3">loyalty</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Board */}
        <Card group={boardMembers} title="Board Members" />

        {/* Our Management */}
        <Card group={management} title="Management Team" />

        {/* Our Customer Relations */}
        <Card
          group={customerRelations}
          title={"Customer Relations Team"}
          cols={4}
        />

        {/* Our Partners */}
        <section className="py-16 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Clients
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {partners.map(
                (member: { id: number; name: string; image: string }) => (
                  <div
                    key={member.id}
                    className="card bg-transparent overflow-hidden flex flex-col items-center justify-center"
                  >
                    <div className="h-48 flex items-center justify-center">
                      {/* <Users className="text-brand-white" size={80} /> */}
                      <ImageWithFallback
                        /* src="https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" */
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-contain object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2">{member.name}</h3>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
