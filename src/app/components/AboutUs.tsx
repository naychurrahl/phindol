import React, { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { truncateWords, countWords } from "@/app/newData";
import Modal from "@/app/components/Modal";
import { createPortal } from "react-dom";
import { Loading } from "@/app/components/ui/Loading";
import { useLiveData } from "@/app/lib/useLiveData";

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

interface StaffWithGroup extends Staff {
  group: string;
}

interface TeamGroup {
  id: number;
  name: string;
  title: string;
  sort_order: number;
  visible: boolean;
}

interface CompanyValue {
  id: number;
  title: string;
  description: string | null;
}

interface Partner {
  id: number;
  name: string;
  image: string;
}

interface Company {
  story: string | null;
  mission: string | null;
  vision: string | null;
}

export function AboutUs() {
  // Groups themselves come from the live /team-groups list (admin-
  // controlled order + visibility); /teams (no group segment) returns
  // every member across every group in one call, tagged with which
  // group they're in, so we're not calling a hook once per group.
  const { data: groups, loading: groupsLoading } = useLiveData<TeamGroup[]>("team-groups");
  const { data: allMembers, loading: membersLoading } = useLiveData<StaffWithGroup[]>("teams");
  const { data: partners, loading: partnersLoading } = useLiveData<Partner[]>("partners");
  const { data: values, loading: valuesLoading } = useLiveData<CompanyValue[]>("company-values");
  const { data: companyInfo, loading: companyLoading } = useLiveData<Company>("companies");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hayStack, setHaystack] = useState<any[]>([]);

  if (groupsLoading || membersLoading || partnersLoading || valuesLoading || companyLoading) return <Loading />;
  if (!groups || !allMembers || !partners || !values || !companyInfo) return null;

  const storyParagraphs = (companyInfo.story ?? "").split(/\n\s*\n/).filter((p) => p.trim());

  const visibleGroups = [...groups]
    .filter((g) => g.visible)
    .sort((a, b) => a.sort_order - b.sort_order);

  function Card({ title = "Poorly Named Group", group, cols=3 }: CardInterface) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Our {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {group.map((member) => (
              <div
                key={member.id}
                onClick={() => {
                  setSelectedId(member.id);
                  setHaystack(group);
                  document.body.classList.add("overflow-hidden");
                }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] card overflow-hidden flex flex-col items-center justify-center"
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
        {storyParagraphs.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
                  {storyParagraphs.map((p, i) => (
                    <p key={i} className="text-muted mb-4 text-lg last:mb-0">
                      {p.trim()}
                    </p>
                  ))}
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
        )}

        {/* Our Mission and Vision */}
        {(companyInfo.mission || companyInfo.vision) && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center items-stretch">
                {companyInfo.mission && (
                  <div className="border-solid border-2 p-8 rounded-xl">
                    <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
                    <p className="text-muted mb-4 text-lg">{companyInfo.mission}</p>
                  </div>
                )}
                {companyInfo.vision && (
                  <div className="border-solid border-2 p-8 rounded-xl">
                    <h2 className="text-3xl md:text-4xl mb-6">Our Vision</h2>
                    <p className="text-muted mb-4 text-lg">{companyInfo.vision}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Our Values */}
        <section className="py-16 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Core Values
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {values.map((v) => (
                <div key={v.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-50 rounded-full mb-4 text-3xl md:text-4xl">
                    {v.title.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="text-xl mb-3">{v.title}</h3>
                  {v.description && <p className="text-muted text-sm">{v.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team groups -- admin-controlled which ones show, and in what order */}
        {visibleGroups.map((g) => (
          <Card
            key={g.id}
            group={allMembers.filter((m) => m.group === g.name)}
            title={g.title}
          />
        ))}

        {/* Our Partners */}
        <section className="py-16 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Our Clients
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map(
                (member: { id: number; name: string; image: string }) => (
                  <div
                    key={member.id}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] card bg-transparent overflow-hidden flex flex-col items-center justify-center"
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
