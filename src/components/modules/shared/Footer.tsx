"use client"

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

// Types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface FooterProps {
  logo?: {
    text: string;
    initial: string;
  };
  tagline?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  contactInfo?: ContactInfo;
  newsletterTitle?: string;
  copyrightText?: string;
  footerLinks?: FooterLink[];
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'For Clients',
    links: [
      { label: 'Find Freelancers', href: '#' },
      { label: 'Post a Project', href: '#' },
      { label: 'Enterprise Solutions', href: '#' },
      { label: 'Success Stories', href: '#' },
      { label: 'Resources', href: '#' }
    ]
  },
  {
    title: 'For Freelancers',
    links: [
      { label: 'Find Work', href: '#' },
      { label: 'Create Profile', href: '#' },
      { label: 'Community Hub', href: '#' },
      { label: 'Freelancer Reviews', href: '#' },
      { label: 'Events', href: '#' }
    ]
  }
];

const defaultSocialLinks: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

const defaultContactInfo: ContactInfo = {
  address: '123 Market Street, Suite 456\nSan Francisco, CA 94103',
  phone: '+1 (555) 123-4567',
  email: 'support@servicesphere.com'
};

const defaultFooterLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Settings', href: '#' }
];

export const Footer: React.FC<FooterProps> = ({
  logo = { text: 'ServiceSphere', initial: 'S' },
  tagline = "The world's largest freelance marketplace. Connect with top talent and get work done efficiently and securely.",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  contactInfo = defaultContactInfo,
  newsletterTitle = 'Subscribe to Newsletter',
  copyrightText = '© 2024 ServiceSphere Inc. All rights reserved.',
  footerLinks = defaultFooterLinks
}) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Newsletter subscription:', email);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{logo.initial}</span>
              </div>
              <span className="text-xl font-bold text-gray-900">{logo.text}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {tagline}
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-gray-900 font-bold text-lg">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-orange-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-bold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-600 text-sm">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-gray-900 font-semibold text-base mb-3">{newsletterTitle}</h4>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">{copyrightText}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};