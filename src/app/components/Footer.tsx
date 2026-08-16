import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { useLiveData } from "@/app/lib/useLiveData";

interface Company {
  name: string;
  tagline: string;
  address: string;
  tel: string;
  wa: string;
  email: string;
  social: { whatsapp: string; facebook: string; instagram: string; linkedin: string; twitter: string };
}

interface Service {
  id: number;
  slug?: string;
  title: string;
  detail?: unknown;
}

export function  Footer() {
  const { data: companyInfo } = useLiveData<Company>("companies");
  const { data: services } = useLiveData<Service[]>("services");

  // Nothing to show until the company profile loads -- no stand-in
  // content, just no footer yet rather than a full-page block on
  // persistent site chrome.
  if (!companyInfo) return null;

  return (
    <footer
      style={{
        backgroundColor: "var(--brand-gray-900)",
        color: "var(--brand-gray-300)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span
                className="text-2lg"
                style={{ color: "var(--brand-blue-500)" }}
              >
                {companyInfo.name.split(" ")[0]}
              </span>
              <span
                className="text-2lg ml-1"
                style={{ color: "var(--brand-white)" }}
              >
                {companyInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <p className="text-sm mb-4">{companyInfo.tagline}</p>
            <div className="flex space-x-4">
              <a
                href={companyInfo.social.whatsapp}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
                target="_blank"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href={companyInfo.social.facebook}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
                target="_blank"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href={companyInfo.social.instagram}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
                target="_blank"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={companyInfo.social.linkedin}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
                target="_blank"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={companyInfo.social.twitter}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
                target="_blank"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4" style={{ color: "var(--brand-white)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about/#partners"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4" style={{ color: "var(--brand-white)" }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              {(services ?? []).map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.detail ? `/services/${service.slug}` : `/#${service.slug}`}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "inherit" }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4" style={{ color: "var(--brand-white)" }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.tel}`}
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  {companyInfo.tel},
                </a>
                <a
                  href={`tel:${companyInfo.wa}`}
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  {companyInfo.wa}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "inherit" }}
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 pt-8"
          style={{ borderTop: "1px solid var(--brand-gray-700)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: "inherit" }}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}