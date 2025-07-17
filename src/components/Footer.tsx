import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Talent Pool', path: '/customers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'Tech Recruitment', path: '/services#tech-recruitment' },
    { name: 'Staff Augmentation', path: '/services#staff-augmentation' },
    { name: 'Contract Hiring', path: '/services#contract-hiring' },
    { name: 'Permanent Placement', path: '/services#permanent-placement' },
    { name: 'Executive Search', path: '/services#executive-search' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card/60 backdrop-blur-xl border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/701dd089-6545-4ee7-8e74-7ab9dad361ec.png" 
                alt="The RecruitIQ" 
                className="w-16 h-16 logo-animated-small rounded-full object-cover border border-primary/30 shadow-md"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold text-gradient-primary">The RecruitIQ</h3>
                <p className="text-sm text-muted-foreground">Tech Talent Partners</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              America's premier tech talent partner, connecting exceptional professionals with innovative companies across the United States.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary/50 hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-orange-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-red-400 transition-colors text-sm animated-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground text-sm hover:text-orange-400 transition-colors animated-underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@therecruitiq.com" className="text-sm text-foreground hover:text-red-400 transition-colors">
                    hello@therecruitiq.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a className="text-sm text-foreground hover:text-orange-400 transition-colors">
                    
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Wyoming, USA </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 The RecruitIQ. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
