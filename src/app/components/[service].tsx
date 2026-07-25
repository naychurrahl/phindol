import { useParams, Link } from "react-router";
import {
  Shield, Heart, Umbrella, TrendingUp, Users, Building2, Briefcase,
  FileText, Phone, Mail, Clock, CheckCircle, AlertCircle, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { NotFound } from "@/app/components/NotFound";
import { services as servicesFallback, type ServiceIcon, type ServiceItem } from "@/app/newData";
import { useLiveData } from "@/app/lib/useLiveData";

const icons: Record<ServiceIcon, LucideIcon> = {
  Shield, Heart, Umbrella, TrendingUp, Users, Building2, Briefcase,
  FileText, Phone, Mail, Clock, CheckCircle, AlertCircle,
};

function gridCols(count: number): string {
  switch (count) {
    case 2: return "md:grid-cols-2";
    case 3: return "md:grid-cols-3";
    case 4: return "md:grid-cols-2 lg:grid-cols-4";
    default: return "md:grid-cols-2 lg:grid-cols-3";
  }
}

export function Service() {
  const { slug } = useParams();
  const fallback = slug ? servicesFallback.find((s) => s.slug === slug) : undefined;
  const service = useLiveData<ServiceItem | undefined>(`services/${slug ?? ""}`, fallback);
  const detail = service?.detail;

  if (!detail) {
    return <NotFound />;
  }

  const { hero, benefits, coverage, extras = [], cta } = detail;

  return (
    <div>
      {/* Hero Section */}
      {hero.image ? (
        <section className="bg-gradient-blue-dark text-brand-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl mb-6 text-brand-white">{hero.title}</h1>
                <p className="text-xl text-brand-blue-100 mb-8">{hero.description}</p>
                {hero.ctaText && (
                  <Link to={hero.ctaLink ?? "/contact"} className="btn-success inline-flex items-center">
                    {hero.ctaText}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                )}
              </div>
              <div className="hidden md:block">
                <ImageWithFallback src={hero.image} alt={hero.title} className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-gradient-blue-dark text-brand-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-brand-white">{hero.title}</h1>
            <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto">{hero.description}</p>
            {hero.ctaText && (
              <Link to={hero.ctaLink ?? "/contact"} className="btn-success inline-flex items-center mt-8">
                {hero.ctaText}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12 text-heading">{benefits.title}</h2>
            <div className={`grid ${gridCols(benefits.items.length)} gap-8`}>
              {benefits.items.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <div key={i} className="card p-6">
                    <div className="icon-wrapper-blue mb-4">
                      <Icon className="icon-blue" size={32} />
                    </div>
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Coverage */}
      {coverage && (
        <section className="py-16 section-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-center mb-12 text-heading">{coverage.title}</h2>
            <div className={`grid ${gridCols(coverage.items.length)} gap-8`}>
              {coverage.items.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <div key={i} className="card p-8">
                    <div className="icon-wrapper-blue mb-4">
                      <Icon className="icon-blue" size={32} />
                    </div>
                    <h3 className="text-2xl mb-4">{item.title}</h3>
                    <p className="text-muted mb-6">{item.description}</p>
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start">
                          <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-brand-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {item.linkText && (
                      <Link to={item.linkHref ?? "/contact"} className="link-blue inline-flex items-center">
                        {item.linkText}
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Extras */}
      {extras.map((extra, i) => {
        if (extra.type === "quickContact") {
          return (
            <section key={i} className="py-12 bg-brand-blue-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card p-8">
                  <h2 className="text-2xl mb-6 text-heading text-center">{extra.title}</h2>
                  <div className={`grid ${gridCols(extra.items.length)} gap-6`}>
                    {extra.items.map((item, j) => {
                      const Icon = icons[item.icon];
                      return (
                        <div key={j} className="text-center">
                          <div className="icon-wrapper-blue mb-4 mx-auto">
                            <Icon className="icon-blue" size={28} />
                          </div>
                          <h3 className="text-lg mb-2 text-heading">{item.label}</h3>
                          <p className="text-brand-secondary text-lg">{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "steps") {
          return (
            <section key={i} className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center mb-12 text-heading">{extra.title}</h2>
                <div className={`grid ${gridCols(extra.items.length)} gap-8`}>
                  {extra.items.map((step) => (
                    <div key={step.number} className="relative">
                      <div className="card p-6 h-full">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-secondary text-brand-white rounded-full mb-4 text-xl">
                          {step.number}
                        </div>
                        <h3 className="text-xl mb-3">{step.title}</h3>
                        <p className="text-muted">{step.description}</p>
                      </div>
                      {step.number < extra.items.length && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-brand-blue-200">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "documents") {
          return (
            <section key={i} className="py-16 section-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center mb-12 text-heading">{extra.title}</h2>
                <div className={`grid ${gridCols(extra.groups.length)} gap-8 max-w-4xl mx-auto`}>
                  {extra.groups.map((group, j) => {
                    const Icon = icons[group.icon];
                    return (
                      <div key={j} className="card p-6">
                        <div className="icon-wrapper-blue mb-4">
                          <Icon className="icon-blue" size={32} />
                        </div>
                        <h3 className="text-xl mb-4">{group.title}</h3>
                        <ul className="space-y-2">
                          {group.items.map((item, k) => (
                            <li key={k} className="flex items-start">
                              <CheckCircle className="text-brand-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                              <span className="text-muted">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "tips") {
          return (
            <section key={i} className="py-16">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl mb-3 text-heading">{extra.title}</h3>
                      <ul className="space-y-2 text-muted">
                        {extra.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "calculator") {
          return (
            <section key={i} className="py-16">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card p-8">
                  <h2 className="text-3xl mb-6 text-center text-heading">{extra.title}</h2>
                  <p className="text-muted text-center mb-8">{extra.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {extra.fields.map((field, j) => (
                      <div key={j}>
                        <label className="block text-brand-primary mb-2">{field.label}</label>
                        <input
                          type="number"
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary"
                        />
                      </div>
                    ))}
                  </div>
                  <button className="btn-primary w-full mt-6">{extra.buttonText}</button>
                  <p className="text-sm text-brand-gray-500 text-center mt-4">{extra.note}</p>
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "industries") {
          return (
            <section key={i} className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center mb-12 text-heading">{extra.title}</h2>
                <div className={`grid ${gridCols(extra.items.length)} gap-6`}>
                  {extra.items.map((industry, j) => (
                    <div key={j} className="bg-brand-blue-50 p-6 rounded-lg text-center hover-bg-blue-50 transition-colors">
                      <p className="text-brand-primary">{industry}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "claimForm") {
          return (
            <section key={i} className="py-16 section-light">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card p-8">
                  <h2 className="text-3xl mb-6 text-heading text-center">{extra.title}</h2>
                  <p className="text-muted text-center mb-8">{extra.description}</p>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-brand-primary mb-2">Full Name *</label>
                        <input type="text" required className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary" />
                      </div>
                      <div>
                        <label className="block text-brand-primary mb-2">Policy Number *</label>
                        <input type="text" required className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-brand-primary mb-2">Email *</label>
                        <input type="email" required className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary" />
                      </div>
                      <div>
                        <label className="block text-brand-primary mb-2">Phone Number *</label>
                        <input type="tel" required className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-brand-primary mb-2">Insurance Type *</label>
                      <select required className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary">
                        <option value="">Select insurance type</option>
                        <option value="life">Life Insurance</option>
                        <option value="corporate">Corporate Insurance</option>
                        <option value="property">Property Insurance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-brand-primary mb-2">Date of Incident *</label>
                      <input type="date" required className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary" />
                    </div>
                    <div>
                      <label className="block text-brand-primary mb-2">Describe the Incident *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Please provide detailed information about what happened..."
                        className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-brand-primary mb-2">Upload Documents</label>
                      <input type="file" multiple className="w-full px-4 py-3 border border-brand-gray-300 rounded-md focus-ring-secondary" />
                      <p className="text-sm text-brand-gray-500 mt-2">You can upload multiple files (Max 10MB each)</p>
                    </div>
                    <button type="submit" className="btn-primary w-full text-lg">Submit Claim</button>
                  </form>
                </div>
              </div>
            </section>
          );
        }

        if (extra.type === "faq") {
          return (
            <section key={i} className="py-16">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center mb-12 text-heading">{extra.title}</h2>
                <div className="space-y-4">
                  {extra.items.map((item, j) => (
                    <div key={j} className="card p-6">
                      <h3 className="text-lg mb-2 text-heading">{item.question}</h3>
                      <p className="text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* CTA */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-brand-white">{cta.title}</h2>
          <p className="text-xl mb-8 text-brand-blue-100">{cta.description}</p>
          <Link to={cta.ctaLink} className="btn-white inline-flex items-center text-lg">
            {cta.ctaText}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
