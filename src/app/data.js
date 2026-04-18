export function truncateWords(text, suffix = "...", wordLimit = 20) {
  if (!text) return "";

  const cleanText = text.replace(/<[^>]+>/g, ""); // remove HTML tags
  const words = cleanText.split(/\s+/);

  if (words.length <= wordLimit) return cleanText;

  return words.slice(0, wordLimit).join(" ") + suffix;
}

export async function apiRequest({
  url,
  method = "GET",
  body = null,
  headers = {},
}) {
  if (!url) {
    throw new Error("Requires a url");
  }

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body && method !== "GET") {
    options.body = typeof body === "string" ? body : JSON.stringify(body);
  }

  const response = await fetch(url, options);

  let result;
  const ContentType = response.headers.get("content-type");

  if (ContentType && ContentType?.includes("application/json")) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  if (!response.ok) {
    throw new Error(result?.message || `Request failed with status `);
  }

  return result;
}

const baseUrl = "https://localhost:6443";
//const baseUrl = "https://api.phindol.ng";

// Company Information
export const companyInfo = {
  name: "Phindol Insurance Brokers",
  tagline:
    "Providing comprehensive insurance solutions tailored to protect what matters most to you.",
  phone: "+234 810 0165 243, +234 811 6745 039",
  tel: "+2348100165243",
  wa: "+2348116745039",
  email: "info@phindol.ng",
  address: "29, Panama street, Maitama, Abuja, Nigeria",
  hours: "Mon-Fri: 8:00 AM - 6:00 PM",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61581051449746",
    twitter: "https://x.com/phindolbrokers",
    linkedin: "https://www.linkedin.com/company/phindolinsurancenrokers/",
    instagram: "https://www.instagram.com/phindolinsurancebrokers/",
    whatsapp: "https://wa.me/2348116745039",
  },
};

// Board Members
export const boardMembers = [
  {
    id: 1,
    name: "Amb.  Udoyen Victor Etim",
    position: "Chairman Board of Directors",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {},
  },
  {
    id: 2,
    name: "Mr. Obadiah Othman Aloko, fsi",
    position: "Non Executive Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: `Mr.  Obadiah Othman Aloko brings over 35 years of distinguished experience in Nigeria’s Foreign Service to our board. Born in 1962 in Kpangwa, Jenkwe, Obi LGA, Nasarawa State, he holds a B.Sc. in Political Science from Ahmadu Bello University, Zaria (1983), and an M.Sc. in International Relations from the University of Abuja (2007).
                            His illustrious diplomatic career includes pivotal roles in China, Cameroon, and Ghana, where he served as Deputy High Commissioner. Rising to the rank of Director in Nigeria’s Ministry of Foreign Affairs, Ambassador Aloko played a key role in shaping the nation’s international policies. His expertise in diplomacy, management, security, and trade negotiation has earned him multiple awards and recognition for his contributions to national and global engagements.
                            A passionate advocate for national development, Ambassador Aloko is deeply committed to youth empowerment in Nigeria. He is married with five children and brings a wealth of strategic insight and global perspective to our board.`,
    },
  },
  {
    id: 3,
    name: "Mr. Hamzat Ibrahim",
    position: "Non Executive Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: `Mr. Hamzat Ibrahim, born in 1960 in Bakori, Katsina State, brings over three decades of distinguished service in Nigeria’s Foreign Service to our board. He holds a B.Sc. in Business Administration from Ahmadu Bello University, Zaria (1985), complemented by professional training at the Foreign Service Academy and courses in computer appreciation, citizenship, and leadership in Lagos.
                        His illustrious diplomatic career spans impactful postings, including Namibia (1990), where he contributed to the Convention for a Democratic South Africa (CODESA), aiding the end of apartheid. He served in Morocco (2003–2007), coordinating the rescue and repatriation of over 3,500 undocumented Nigerians, and in Cameroon (2012–2015), where he played a key role in concluding the Greentree Agreement on Bakassi. As Ambassador Extraordinary and Plenipotentiary to Iran (2017–2020), with concurrent accreditation to Armenia, Azerbaijan, and Kazakhstan, he led Nigeria’s diplomatic efforts with distinction.
                        Mr. Ibrahim represented Nigeria in numerous high-level international engagements, including Bi-National Commissions with South Africa, China, and others, as well as summits like the African Union Summit in Kampala (2010) and the D8 Summit in Abuja (2010). As Director of the West Africa Division (2015–2016), he shaped Nigeria’s regional foreign policy. His contributions to global diplomacy, migration, and human rights have earned him widespread respect.
                        Retired in 2020, Ambassador Ibrahim brings strategic insight and a global perspective to our board, enhancing our mission for growth and impact.`,
    },
  },
  {
    id: 4,
    name: "Mrs. Ifeyinwa Angela Nworgu",
    position: "Non Executive Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: `Mrs. Ifeyinwa Angela Nworgu is a distinguished legal practitioner and expert in multilateral diplomacy, anti-money laundering (AML/CFT), anti-human trafficking, and international peace and security. With a career spanning over three decades, she brings unparalleled expertise to our board. Called to the Nigerian Bar in 1984, she practiced law before joining Nigeria’s Foreign Service, where she represented the nation with distinction across multiple global roles.
                        Her illustrious career includes serving as Nigeria’s Representative to the Sixth Committee of the United Nations (2006–2010), Senior Special Adviser on Legal Matters to the 64th President of the UN General Assembly (2010–2011), and Senior Special Adviser on Global Peace and Security to the 74th President of the UN General Assembly (2019–2020), where she was the Focal Point for Africa. As Director of the Nigerian Special Control Unit Against Money Laundering (2011–2013), she pioneered compliance frameworks for anti-money laundering and counter-terrorism financing. She also served as Consul in Rome, Italy (2015–2018), addressing human trafficking and migration challenges, and as Director of Legal at the Nigerian Ministry of Foreign Affairs (2013–2015, 2018–2019).
                        Since 2020, Mrs. Nworgu has been Chairman of the Board of Trustees at the Center for Fiscal Transparency and Integrity Watch (CeFTIW), a UNCAC Coalition Board Member representing Sub-Saharan Africa. She holds certificates in Corruption Studies from the University of Hong Kong and the Law of the Sea from the Rhodes Academy, and is a UNODC-certified Corruption Risk Assessor, a certified Management Consultant, and a Fellow of the Institute of Management Consultants.
                        Mrs. Nworgu’s global perspective and commitment to transparency and security enhance our board’s strategic vision.`,
    },
  },
  {
    id: 5,
    name: "Mr. Babatunde Tajudeen Shonubi",
    position: "Non Executive Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: `Ambassador Babatunde Tajudeen Shonubi brings over 35 years of exemplary service as a technocrat in Nigeria’s Foreign Service to our board. A graduate of the University of Ilorin with a Bachelor’s Degree in Education, he rose to the rank of Director on Special Grade Level 17 in the Ministry of Foreign Affairs, Abuja, demonstrating exceptional leadership and dedication.
                        His diplomatic career was enriched by specialized training at the Foreign Service Academy, the Citizenship and Leadership Training Centre (Sea School), and the Management Techniques Workshop at the Centre for Management Development. Renowned for his expertise in diplomacy, bureaucracy, analysis, communication, and time management, Ambassador Shonubi significantly advanced Nigeria’s interests through key overseas postings in Saudi Arabia, Cameroon, the United Arab Emirates, and other nations. His efforts bolstered Nigeria’s domestic and international policy frameworks.
                        Happily married with children, Ambassador Shonubi’s strategic vision and global experience strengthen our board’s commitment to impactful leadership and growth.`,
    },
  },
  {
    id: 6,
    name: "Omodele Stephen Adesogan",
    position: "MD/CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: `Omodele Stephen Adesogan is a highly accomplished insurance professional with nearly 30 years of experience in insurance brokerage, underwriting, and strategic leadership. A results-driven executive, he has held key managerial and executive positions across leading insurance firms in Nigeria, demonstrating exceptional expertise in business development, marketing, and corporate leadership.`,
    },
  },
];

// Management
export const management = [
  {
    id: 1,
    name: "Omodele S. Adesogan – MBA, ACII, ANIMN",
    position:
      "Pioneer Managing Director/Chief Executive Officer, Phindol Insurance Brokers Limited",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Stephen Omodele Adesogan is a highly accomplished insurance professional with nearly 30 years of experience in insurance brokerage, underwriting, and strategic leadership. A results-driven executive, he has held key managerial and executive positions across leading insurance firms in Nigeria, demonstrating exceptional expertise in business development, marketing, and corporate leadership.",
      "Career Highlights": `* 1994 – Began his career at Clarkson Edu & Partners, a leading insurance brokerage firm.
        * 1998 – Joined Whispering Hope Insurance Company (now Sterling Assurance) as Branch Manager; promoted to Head of Marketing in 2000.
        * 2003 – Joined Equity Indemnity Insurance (Now Sunu Insurance),and led Marketing and Underwriting Units at Equity Indemnity Insurance.
        * 2005 – Appointed Head of Marketing at Fire Equity & General Insurance Company Limited (now Custodian Insurance Company Limited).
        * 2007 – Became Managing Director/CEO of Fidelity Bond of Nigeria Limited (Insurance and Reinsurance Brokers).
        * 2010 – Served as Regional Manager, Abuja/North, at WAPIC Life.
        * 2013 – Appointed Managing Director/CEO of MIB Insurance Brokers Limited.
        * 2017 – Led Oracle Insurance Brokers.
        * 2023: Joined Fsl Ins Brokers and became the Acting Managing Director/CEO in 2024
        * 2025 – Assumed the role of Pioneer Managing Director/CEO of Phindol Insurance Brokers Limited.`,
      "Professional Development & Expertise":
        "Stephen has undergone extensive training in Marketing, Underwriting, Claims, Management, and Leadership. His visionary leadership and deep industry knowledge have been instrumental in driving business growth, fostering strategic partnerships, and enhancing operational excellence in the insurance sector",
    },
  },
  {
    id: 2,
    name: "Shehu Abdulrahman – MBA, MNIM , FNHR",
    position: "Director, Corporate Services",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Shehu Abdulrahman is a seasoned corporate executive with extensive expertise in Governance, Administration, Financial Management, Human Resources, and Strategic Business Operations. As the Director of Corporate Services at Phindol Insurance Brokers Limited, he plays a pivotal role in ensuring seamless administrative functions, financial oversight, and regulatory compliance while supporting business growth and operational efficiency.",
      "Career Highlights": `1990 – Began his career as a National Youth Service Corps (NYSC) member at Continental Merchant Bank Plc, Kano.
        1992 – Served as an Audit Officer at the Office of the Auditor-General for the Federation, Abuja, gaining foundational experience in financial oversight and compliance.
        1993 – Joined Guaranty Trust Bank Plc, and ranked up to the position of an Assistant Manager, where he played a key role in banking operations and financial management.
        1997 – Transitioned to the telecommunications sector as Sales & Channel Distribution Manager at Intercellular Nigeria Limited, overseeing Lagos and Abuja markets.
        2002 – Led corporate collections as Team Lead at MTN Nigeria Communications Plc, Lagos, streamlining revenue management.
        2004 – Appointed Senior Manager (Head, Corporate Sales) at Nigerian Telecommunications Limited Corporate HeadQuarters, Abuja, driving corporate sales strategy.
        2008 – Became Business Manager at Galaxy Backbone Limited, Abuja, managing corporate and government sector engagements especially all state governments.
        2011–2019: Served as Senior Special Assistant to the Kwara State Governor on Solid Minerals, Offering Consultancy Services on industry policies and development strategies for sustainable resource management, investment promotion, and economic diversification in the state.
        2016 – Took on an academic role as an Adjunct Lecturer on Business and Entrepreneurship at Kwara State University, sharing industry expertise with students.
        2019 – Transitioned into business and solid minerals consulting, leveraging extensive experience in governance and corporate leadership.
        2025 – Appointed Director, Corporate Services at Phindol Insurance Brokers Limited, overseeing corporate strategy, operations, and stakeholder relations.`,
      "Professional Development & Expertise":
        "Shehu Abdulrahman is a seasoned corporate executive with deep expertise in governance, administration, marketing, sales, and stakeholder engagement. With a diverse career spanning banking, telecommunications, government, and consulting, he brings a wealth of knowledge and leadership to Phindol Insurance Brokers Limited. His strategic approach to corporate management, financial oversight, and operational excellence continues to drive sustainable growth and business efficiency.",
    },
  },
  {
    id: 3,
    name: "Opeyemi Abimbola – ACIRLM, CIIN",
    position: "Head Marketing - Phindol Insurance Brokers Limited",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Opeyemi Abimbola is a dynamic marketing professional with expertise in strategic planning, client engagement, and business development within the public sector and parastatal organizations. As the Head of Marketing (Corporate & Parastatals) at Phindol Insurance Brokers Limited, she plays a pivotal role in driving market expansion and strengthening key institutional relationships. See more",
      "Career Highlights": `2010 – Began her career as an Administrative Assistant at Industrial and General Insurance PLC.
        2011 – Appointed Executive Assistant (Marketing) at Industrial and General Insurance PLC, supporting business development initiatives.
        2012 – Transitioned to the role of Executive Assistant (Branch Accountant), gaining expertise in financial operations.
        2014 – Promoted to Executive II (Branch Underwriter/Business Development) at Industrial and General Insurance PLC, where she played a key role in underwriting and expanding client relationships.
        2023 – Became Branch Manager at Oceanline Insurance Brokers Ltd, leading operations and business growth strategies.
        2025 – Appointed Head of Marketing (Public Sector & Parastatals) at Phindol Insurance Brokers Limited, overseeing strategic marketing initiatives and partnerships.",
      "Professional Development & Expertise" : "Opeyemi Abimbola brings a wealth of experience in insurance marketing, underwriting, and business development. With a background in financial operations, client engagement, and strategic planning, she has successfully managed teams, expanded market reach, and fostered long-term partnerships. Her commitment to excellence and results-driven approach continues to strengthen Phindol Insurance Brokers’ presence in the public sector.`,
    },
  },
  {
    id: 4,
    name: "Adewole Michael Tunde",
    position:
      "Head of Underwriting & Claims - Phindol Insurance Brokers Limited",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: `Adewole Michael Tunde is an accomplished insurance professional with over 12 years of experience spanning the shipping, logistics, and insurance sectors. As the Head of Underwriting & Claims at Phindol Insurance Brokers Limited, he plays a critical role in risk assessment, claims management, and ensuring seamless policy execution for clients.
        A  specialist in business development, bid and tender participation, and claims processing, Adewole is well-versed in industry best practices. His strong stakeholder management capabilities and deep understanding of underwriting principles enable him to drive operational excellence and customer satisfaction. See More`,
      "Career Highlights": `2013 – Began his career as an Insurance and Administrative Officer at Murphy Shipping and Commercial Services Ltd/MIB Insurance Brokers Ltd and Liberty & Trust Insurance Brokers Ltd, gaining foundational experience in underwriting and claims processing.
        2018 – Promoted to Manager, Technical & Team Lead at Liberty & Trust Insurance Brokers Ltd, overseeing underwriting operations and technical support.
        2025 – Appointed Head of Underwriting & Claims at Phindol Insurance Brokers Limited, leading risk assessment, claims management, and policy execution.`,
      "Professional Development & Expertise":
        "Adewole Michael T is a highly skilled insurance professional with extensive experience in underwriting, claims management, and business development. His expertise in stakeholder engagement, bid and tender participation, and operational efficiency has made him a key figure in the industry. With a strong work ethic and a detail-oriented approach, he continues to drive excellence in underwriting and claims processing at Phindol Insurance Brokers Limited.",
    },
  },
  {
    id: 5,
    name: "Hellen Ene Odukoya",
    position: "Head of Account - Phindol Insurance Brokers Limited",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Hellen Ene Odukoya is a results-driven accounting professional with a strong background in financial management, reporting, and corporate accounting. As the Head of Account at Phindol Insurance Brokers Limited, she oversees financial operations, ensuring accuracy, compliance, and efficiency in financial planning and execution",
      "Career Highlights": `2008 – Began her career as an Assistant Head Teacher at Dove Children School, Karmo, Abuja, developing leadership and organizational skills.
        2012 – Served as Sisters’ Welfare Coordinator for the Female Campus Students of DLBC, demonstrating her leadership and mentorship abilities.
        2017 – Completed her National Youth Service Corps (NYSC) as an Account Clerk in the Finance & Accounting Department at the Nigerian Institute of Leather Research and Science Technology, Zaria, Kaduna State.
        2017 – Acted as a Motivator for the PETS & HCT CDS group, focusing on sensitization efforts at the LACA Office, Ikere, Ekiti State.
        2025 – Appointed Head of Account at Phindol Insurance Brokers Limited, overseeing financial management, reporting, and compliance.`,
      "Professional Development & Expertise":
        "Helen Ene Odukoya is a skilled financial expert with a background in accounting, financial analysis, and strategic planning. With a B.Sc in Accounting from Ahmadu Bello University, Zaria, she has developed expertise in financial management, Microsoft Office applications, negotiation, and conflict resolution. Her leadership, communication, and time management skills make her a key figure in ensuring financial efficiency and regulatory compliance at Phindol Insurance Brokers Limited.",
    },
  },
];

// Customer Relations
export const customerRelations = [
  {
    id: 1,
    name: "Opeyemi Abimbola",
    position: "Head Marketing",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Serves as Head of Marketing, bringing over 15 years of experience in the insurance industry and customer relationship management. She leads corporate and parastatal engagement efforts, designing targeted campaigns and partnership programs that strengthen client trust and open new business channels.",
    },
  },
  {
    id: 2,
    name: "Faith Olasunkanmi Ekundayo",
    position: "Marketing executive",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Is a seasoned marketing executive whose extensive background in sales informs every engagement she leads. She excels at translating strategic insights into personalized communication plans that resonate with individual customers, fostering loyalty and advocacy. Faith designs and executes multi‑channel campaigns—ranging from targeted email sequences to social media activations—that consistently boost customer lifetime value and drive measurable growth.",
    },
  },
  {
    id: 3,
    name: "M. A. Abdul Rahman",
    position: "Marketing executive",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "A results-driven marketing executive with a strong focus on understanding customer needs and behaviors. Abdul Rahman designs targeted campaigns—from awareness to post‑purchase engagement—that speak directly to segmented audiences and drive measurable outcomes.",
    },
  },
  {
    id: 4,
    name: "Abubakar Yusuf",
    position: "Marketing executive",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Abubakar is dedicated to ensuring customer satisfaction at every touchpoint. With expertise in CRM tools and customer advocacy, he proactively addresses client needs, helping businesses build meaningful and lasting relationships with their audience.",
    },
  },
  {
    id: 5,
    name: "Beatrice  Orugun",
    position: "Marketing executive",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Beatrice is dedicated to deepening customer relationships through engagement and loyalty initiatives. Drawing on detailed market analysis and direct customer feedback, Beatrice crafts programs that reward repeat business and encourage brand advocacy. She oversees the design and rollout of tiered loyalty schemes, personalized email journeys, and targeted in‑app notifications—each element calibrated to drive incremental engagement and measurable uplift in retention rates",
    },
  },
  {
    id: 6,
    name: "Sholademi Noah Surudara",
    position: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Noah excels at bridging the gap between customer needs and innovative insurance solutions. His professional journey has been defined by a commitment to helping clients understand and access the best products while also driving brand awareness and business growth through strategic digital initiatives.",
    },
  },
  {
    id: 7,
    name: "Aniche Lilian",
    position: "Customer/Complaints Representative",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Lilian Aniche is a dedicated Customer and Complaints Representative at Phindol Insurance Brokers Limited, where she plays a key role in ensuring client satisfaction and resolving issues with professionalism and empathy. With a calm demeanor and a strong commitment to service excellence, she works tirelessly to address concerns, streamline communication, and build trust with clients.",
    },
  },
];

// Company Values
export const companyValues = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    id: 2,
    title: "Client-Centric",
    description:
      "Your needs and satisfaction are at the heart of everything we do.",
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "We strive for excellence in service delivery and professional expertise.",
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "We embrace innovative solutions to meet evolving insurance needs.",
  },
];

// Services
export const services = [
  {
    id: 1,
    title: "Risk Assessment/Management",
    slug: "Risk-Assessment-Management",
    description:
      "We are committed to helping you safeguard your business and assets with expert risk assessment and management solutions. Our team analyzes potential risks, identifies vulnerabilities, and provides tailored strategies to minimize financial and operational threats. Whether it’s regulatory compliance, business continuity, or loss prevention, we offer proactive solutions to keep you protected.",
    icon: null,
    cta: "Get in touch today to learn more about how we can help.",
  },
  {
    id: 2,
    title: "Surveying",
    slug: "surveying",
    description:
      "Accurate insurance coverage starts with a thorough assessment.Our expert surveying services help identify risks, determine asset values, and ensure you have the right protection in place. Whether for property, business, or specialized assets, we provide detailed evaluations to support informed insurance decisions.",
    icon: "Building2",
    cta: "Contact us today to schedule a survey!",
  },
  {
    id: 3,
    title: "Client Services",
    slug: "client-services",
    description:
      "We prioritize your peace of mind with personalized client services tailored to your unique insurance needs. From policy guidance and claims assistance to risk management support, our team is here to provide expert advice and seamless service. Whether you’re an individual or a business, we ensure you get the protection and support you deserve.",
    icon: "FileText",
    cta: "Reach out to us today for exceptional client care.",
  },
  {
    id: 4,
    title: "Claims Management",
    slug: "claims-management",
    description:
      "Filing an insurance claim can be complex, but we make the process smooth and hassle-free. Our dedicated claim management team assists you every step of the way—from documentation and submission to follow-ups and settlements—ensuring you get the compensation you deserve as quickly as possible. Let us handle your claims with expertise and efficiency.",
    icon: "FileText",
    cta: "Contact us today!",
  },
  {
    id: 5,
    title: "Competitive Pricing",
    slug: "competitive-pricing",
    description:
      "We believe quality insurance should be both reliable and affordable. We partner top Insurance Companies to provide you with the best coverage at the most competitive rates. Whether for personal or business needs, we tailor cost-effective solutions without compromising protection.",
    icon: "FileText",
    cta: "Get a quote today and discover the best value for your insurance needs",
  },
  {
    id: 6,
    title: "Consultancy",
    slug: "consultancy",
    description:
      "Making the right insurance decisions requires expert guidance. Our consultancy services provide personalized advice to help you choose the best coverage, manage risks, and optimize your policies. From business insurance to personal coverage, our team works closely with you to identify the most suitable policies. We assess your current coverage, recommend improvements, and ensure you’re not underinsured or overpaying.",
    icon: "FileText",
    cta: "Contact us today for professional insurance advice tailored to your needs.",
  },
];

// Gallery
export const gallery = async () => {
  const gallery = await apiRequest({ url: `${baseUrl}/gallery` });

  return {
    galleryImages: gallery.galleryImages,
    galleryCategories: gallery.galleryCategories,
  };

  return [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1740818576358-7596eb883cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBtZWV0aW5nJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjMwNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Client Consultation",
      category: "clients",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NzIyMzM1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Partnership Agreement",
      category: "events",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1611736539111-2245a9f97a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NzIzMDcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Team Collaboration",
      category: "team",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkb2N1bWVudHMlMjBzaWduaW5nfGVufDF8fHx8MTc3MjMwNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Policy Documentation",
      category: "clients",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIyOTgzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Our Modern Office",
      category: "office",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZXByZXNlbnRhdGl2ZXxlbnwxfHx8fDE3NzIyNjgyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Customer Service Excellence",
      category: "team",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzcyMjYzMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Annual Conference",
      category: "events",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIzMDUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Team Strategy Meeting",
      category: "team",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1632961974688-fae53de3cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMHRlYW0lMjB0cnVzdHxlbnwxfHx8fDE3NzIzMDUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Diverse Professional Team",
      category: "team",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Corporate Office Space",
      category: "office",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Happy Client Families",
      category: "clients",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwZmFtaWx5fGVufDF8fHx8MTc3MjI0NDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Insurance Protection",
      category: "clients",
    },
  ];
};

export const partners = [
  {
    id: 1,
    name: "Dr. Johnson",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGFmcmljYW58ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "With over 20 years in the insurance industry, Dr. Johnson leads Phindol with vision and expertise.",
    },
  },
  {
    id: 2,
    name: "Chiomy Okafor",
    position: "Head of Corporate Insurance",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwYWZyaWNhbnxlbnwxfHx8fDE3MjQyNjM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Chioma specializes in creating tailored insurance solutions for businesses of all sizes.",
    },
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    position: "Director of Claims",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHN1aXR8ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Ibrahim ensures that every claim is processed efficiently and fairly, providing peace of mind to our clients.",
    },
  },
  {
    id: 4,
    name: "Fatima Bello",
    position: "Senior Life Insurance Advisor",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGlqYWJ8ZW58MXx8fHwxNzI0MjYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    meta: {
      bio: "Fatima has helped hundreds of families secure their financial future with comprehensive life insurance plans.",
    },
  },
];

// Blog
export const blog = async () => {
  const blog = await apiRequest({ url: `${baseUrl}/blog` });

  //console.log(blog);

  return {
    blogPosts: blog.blogPosts,
    blogCategories: blog.blogCategories,
  };

  return [
    {
      id: 1,
      title: "Understanding Life Insurance: A Comprehensive Guide for Families",
      excerpt:
        "Learn everything you need to know about choosing the right life insurance policy for your family's future security and peace of mind.",
      author: "Dr. Adewale Johnson",
      date: "February 15, 2026",
      readTime: "5 min read",
      category: "Life Insurance",
      image:
        "https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: `
      <p>Life insurance is one of the most important financial decisions you'll make for your family. It provides financial security and peace of mind, ensuring that your loved ones are protected even when you're no longer around to provide for them.</p>

      <h2>What is Life Insurance?</h2>
      <p>Life insurance is a contract between you and an insurance company. In exchange for premium payments, the insurance company provides a lump-sum payment, known as a death benefit, to your beneficiaries after your death.</p>

      <h2>Types of Life Insurance</h2>
      <p>There are two main types of life insurance:</p>
      
      <h3>1. Term Life Insurance</h3>
      <p>Term life insurance provides coverage for a specific period, typically 10, 20, or 30 years. It's the most affordable option and is ideal for temporary needs like mortgage protection or income replacement while your children are young.</p>

      <h3>2. Whole Life Insurance</h3>
      <p>Whole life insurance provides lifelong coverage and includes a savings component called cash value. While premiums are higher, this policy builds value over time that you can borrow against or withdraw.</p>

      <h2>How Much Coverage Do You Need?</h2>
      <p>A general rule of thumb is to have coverage worth 10-12 times your annual income. However, your specific needs depend on factors like:</p>
      <ul>
        <li>Outstanding debts (mortgage, loans)</li>
        <li>Number of dependents</li>
        <li>Future education costs</li>
        <li>Final expenses</li>
        <li>Existing savings and investments</li>
      </ul>

      <h2>Why Choose Phindol Insurance?</h2>
      <p>At Phindol Insurance, we understand that every family is unique. Our experienced advisors work with you to assess your needs and find the perfect policy that fits your budget and provides comprehensive protection for your loved ones.</p>

      <p>Ready to secure your family's future? Contact us today for a free consultation and personalized quote.</p>
    `,
    },
    {
      id: 2,
      title: "5 Reasons Why Every Business Needs Corporate Insurance",
      excerpt:
        "Discover why corporate insurance is essential for protecting your business assets, employees, and long-term growth.",
      author: "Chioma Okafor",
      date: "February 10, 2026",
      readTime: "4 min read",
      category: "Corporate Insurance",
      image:
        "https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: `
      <p>Running a business comes with numerous risks. From property damage to liability claims, unexpected events can threaten your company's financial stability and future growth. Here are five compelling reasons why corporate insurance is essential.</p>

      <h2>1. Protects Your Assets</h2>
      <p>Your business assets—from equipment and inventory to your office space—represent significant investments. Corporate insurance protects these assets against damage from fire, theft, natural disasters, and other covered perils.</p>

      <h2>2. Covers Liability Claims</h2>
      <p>Accidents happen, and when they do on your business premises, you could be held liable. General liability insurance protects your business against claims of bodily injury, property damage, and personal injury.</p>

      <h2>3. Ensures Business Continuity</h2>
      <p>Business interruption insurance covers lost income and operating expenses if your business is forced to close temporarily due to a covered event. This ensures you can continue paying bills and employees even when operations are disrupted.</p>

      <h2>4. Attracts and Retains Talent</h2>
      <p>Offering comprehensive employee benefits, including health insurance and workers' compensation, helps you attract top talent and maintain a motivated workforce.</p>

      <h2>5. Required by Law and Contracts</h2>
      <p>Many types of business insurance are legally required, and most commercial contracts require proof of insurance before engagement. Having proper coverage ensures compliance and opens doors to new opportunities.</p>

      <h2>Get Started Today</h2>
      <p>Don't leave your business vulnerable. Contact Phindol Insurance for a customized corporate insurance package that meets your specific needs and budget.</p>
    `,
    },
    {
      id: 3,
      title: "How to File an Insurance Claim: Step-by-Step Guide",
      excerpt:
        "A detailed walkthrough of the claims process to help you navigate it smoothly and get the support you need quickly.",
      author: "Ibrahim Musa",
      date: "February 5, 2026",
      readTime: "6 min read",
      category: "Claims & Support",
      image:
        "https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkb2N1bWVudHMlMjBzaWduaW5nfGVufDF8fHx8MTc3MjMwNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: `
      <p>Filing an insurance claim can seem daunting, but understanding the process makes it much easier. Here's a comprehensive guide to help you navigate the claims process smoothly.</p>

      <h2>Step 1: Report the Incident Immediately</h2>
      <p>Contact your insurance provider as soon as possible after the incident. Most policies have specific time limits for reporting claims. At Phindol Insurance, you can reach our 24/7 claims hotline at any time.</p>

      <h2>Step 2: Document Everything</h2>
      <p>Gather all relevant documentation:</p>
      <ul>
        <li>Your policy number and details</li>
        <li>Date, time, and location of the incident</li>
        <li>Photos or videos of damage</li>
        <li>Police report (if applicable)</li>
        <li>Witness statements and contact information</li>
        <li>Medical reports (for injury claims)</li>
        <li>Receipts and invoices</li>
      </ul>

      <h2>Step 3: Complete the Claim Form</h2>
      <p>Fill out the claim form accurately and completely. Provide detailed information about what happened and the extent of the damage or loss. Incomplete forms can delay the process.</p>

      <h2>Step 4: Submit Required Documents</h2>
      <p>Along with your claim form, submit all supporting documentation. Keep copies of everything you submit for your records.</p>

      <h2>Step 5: Cooperate with the Claims Adjuster</h2>
      <p>An insurance adjuster may need to inspect the damage or investigate the claim. Be available for inspections and provide any additional information requested promptly.</p>

      <h2>Step 6: Review the Settlement Offer</h2>
      <p>Once your claim is assessed, you'll receive a settlement offer. Review it carefully and ask questions if anything is unclear. You have the right to negotiate or appeal if you disagree with the decision.</p>

      <h2>Tips for a Smooth Claims Process</h2>
      <ul>
        <li>Keep detailed records of all communications</li>
        <li>Don't dispose of damaged property until authorized</li>
        <li>Be honest and accurate in your statements</li>
        <li>Follow up regularly on your claim status</li>
        <li>Know your policy coverage and limits</li>
      </ul>

      <h2>We're Here to Help</h2>
      <p>At Phindol Insurance, we're committed to making the claims process as smooth as possible. Our dedicated claims team is here to support you every step of the way.</p>
    `,
    },
    {
      id: 4,
      title: "Term vs. Whole Life Insurance: Which is Right for You?",
      excerpt:
        "Compare the benefits and drawbacks of term and whole life insurance to make an informed decision for your family.",
      author: "Fatima Bello",
      date: "January 28, 2026",
      readTime: "7 min read",
      category: "Life Insurance",
      image:
        "https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwZmFtaWx5fGVufDF8fHx8MTc3MjI0NDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "<p>Choosing between term and whole life insurance is one of the most important decisions you'll make. Both have unique benefits tailored to different needs and financial situations.</p>",
    },
    {
      id: 5,
      title: "Protecting Your Business from Cyber Threats with Insurance",
      excerpt:
        "Learn how cyber insurance can safeguard your business against data breaches, ransomware, and other digital threats.",
      author: "Ibrahim Musa",
      date: "January 20, 2026",
      readTime: "5 min read",
      category: "Corporate Insurance",
      image:
        "https://images.unsplash.com/photo-1611736539111-2245a9f97a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NzIzMDcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "<p>In today's digital age, cyber threats are more prevalent than ever. Cyber insurance protects your business from the financial impact of data breaches and cyberattacks.</p>",
    },
    {
      id: 6,
      title: "Common Insurance Myths Debunked",
      excerpt:
        "Separate fact from fiction as we address the most common misconceptions about insurance coverage.",
      author: "Dr. Adewale Johnson",
      date: "January 15, 2026",
      readTime: "4 min read",
      category: "Insurance Tips",
      image:
        "https://images.unsplash.com/photo-1740818576358-7596eb883cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBtZWV0aW5nJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjMwNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "<p>Many misconceptions about insurance prevent people from getting the coverage they need. Let's clear up some of the most common myths.</p>",
    },
  ];
};

// Testimonials
export const testimonials = async () => {
  return await apiRequest({ url: `${baseUrl}/testimonials` });

  return [
    {
      id: 1,
      name: "Oluwaseun Adeyemi",
      company: "TechCorp Nigeria",
      text: "Phindol Insurance made the process of securing our corporate insurance seamless. Their team is professional, responsive, and genuinely cares about our needs.",
      rating: 5,
    },
    {
      id: 2,
      name: "Amaka Nwankwo",
      company: "Private Client",
      text: "After losing my husband, the life insurance payout helped me secure my children's future. Phindol handled everything with compassion and efficiency.",
      rating: 5,
    },
    {
      id: 3,
      name: "Chukwudi Okonkwo",
      company: "Okonkwo Enterprises",
      text: "Their claims support is outstanding. When we had a fire incident, they processed our claim quickly and helped us get back on our feet.",
      rating: 5,
    },
  ];
};
