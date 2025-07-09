import { Building2, Handshake, TrendingUp, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const partners = [
    // Corporate Partners
    { 
      name: 'Hexaware', 
      logo: 'https://www.hexaware.com/wp-content/uploads/2021/04/hexaware-logo-white.png',
      type: 'corporate'
    },
    { 
      name: 'Persistent Systems', 
      logo: 'https://www.persistent.com/wp-content/uploads/2021/03/persistent-logo-white.png',
      type: 'corporate'
    },
    { 
      name: 'JPMorgan Chase', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Logo.png',
      type: 'corporate'
    },
    { 
      name: 'Bank of America', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Bank-of-America-Logo.png',
      type: 'corporate'
    },
    { 
      name: 'Brillio', 
      logo: 'https://www.brillio.com/wp-content/uploads/2023/05/brillio-logo-white.svg',
      type: 'corporate'
    },
    { 
      name: 'Tech Mahindra', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tech-Mahindra-Logo.png',
      type: 'corporate'
    },
    { 
      name: 'Capgemini', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Capgemini-Logo.png',
      type: 'corporate'
    },
    { 
      name: 'Aon', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Aon-Logo.png',
      type: 'corporate'
    },
    { 
      name: 'Optum', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Optum-Logo.png',
      type: 'corporate'
    },
    
    // Government Clients
    { 
      name: 'Texas HHSC', 
      logo: 'https://www.hhs.texas.gov/sites/default/files/images/about-hhs/communications-events/hhs-logo-header.png',
      type: 'government'
    },
    { 
      name: 'State of Virginia', 
      logo: 'https://www.virginia.gov/media/governorvirginiagov/images/featured/seal-of-virginia.png',
      type: 'government'
    },
    { 
      name: 'Virginia DOT', 
      logo: 'https://www.virginiadot.org/info/resources/VDOT_logo_blue.png',
      type: 'government'
    },
    { 
      name: 'California DMV', 
      logo: 'https://www.dmv.ca.gov/portal/wp-content/uploads/2020/06/dmv-logo.png',
      type: 'government'
    },
    { 
      name: 'Florida DOT', 
      logo: 'https://www.fdot.gov/images/fdot-logo-blue.png',
      type: 'government'
    },
    { 
      name: 'New York State', 
      logo: 'https://www.ny.gov/sites/default/files/2021-05/NYS-Logo-blue.png',
      type: 'government'
    },
    { 
      name: 'Illinois DHFS', 
      logo: 'https://www2.illinois.gov/gov/PublishingImages/Illinois-Logo-blue.png',
      type: 'government'
    },
    { 
      name: 'Georgia DHS', 
      logo: 'https://dhs.georgia.gov/sites/dhs.georgia.gov/files/DHS-logo-blue.png',
      type: 'government'
    },
    { 
      name: 'Ohio DOT', 
      logo: 'https://www.transportation.ohio.gov/static/ODOT-Logo-blue.png',
      type: 'government'
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Access to Top Talent',
      description: 'Connect with pre-screened, highly skilled professionals ready to contribute immediately.',
    },
    {
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'Scale your teams quickly with our extensive network of tech professionals.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Leverage our partnerships to access talent across multiple markets and time zones.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All our partners maintain the highest standards of excellence and professionalism.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Strategic Partners' },
    { number: '10K+', label: 'Professionals Placed' },
    { number: '95%', label: 'Partner Satisfaction' },
    { number: '24/7', label: 'Global Support' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient-primary">Talent Delivery Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
            We collaborate with top-tier partners who enable seamless sourcing, vetting, and placement of high-performing tech talent across North America.
          </p>
        </div>
      </section>

      {/* Moving Partners Logos */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
              Trusted by <span className="text-gradient-accent">Industry Leaders</span>
              <span className="text-muted-foreground"> & </span>
              <span className="text-gradient-primary">Government Agencies</span>
            </h2>
          </div>

          {/* Moving logos container */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${partner.name}`}
                  className="flex-shrink-0 floating-card p-6 text-center group hover:scale-105 transition-all duration-500 min-w-[200px]"
                >
                  <div className="h-16 mb-3 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-12 max-w-32 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = `https://via.placeholder.com/120x40/3B82F6/FFFFFF?text=${partner.name.replace(/\s+/g, '+')}`;
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium whitespace-nowrap">{partner.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {partner.type === 'government' ? 'Government' : 'Corporate'}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${partner.name}`}
                  className="flex-shrink-0 floating-card p-6 text-center group hover:scale-105 transition-all duration-500 min-w-[200px]"
                >
                  <div className="h-16 mb-3 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-12 max-w-32 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = `https://via.placeholder.com/120x40/3B82F6/FFFFFF?text=${partner.name.replace(/\s+/g, '+')}`;
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium whitespace-nowrap">{partner.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {partner.type === 'government' ? 'Government' : 'Corporate'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center floating-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Partnership <span className="text-gradient-accent">Benefits</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Discover the advantages of partnering with The RecruitIQ and our extensive network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="floating-card p-6 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary icon-float" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Partnership <span className="text-gradient-primary">Models</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Flexible partnership options designed to meet your unique business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology Partners',
                description: 'Leading tech companies leveraging our talent network for their projects.',
                features: ['Direct talent access', 'Dedicated account management', 'Custom solutions'],
                icon: Building2,
              },
              {
                title: 'Consulting Partners',
                description: 'Professional services firms expanding their capabilities through our network.',
                features: ['Skill augmentation', 'Project-based teams', 'Flexible engagement'],
                icon: Handshake,
              },
              {
                title: 'Enterprise Partners',
                description: 'Large organizations building long-term talent acquisition strategies.',
                features: ['Strategic planning', 'Volume hiring', 'Ongoing support'],
                icon: Globe,
              },
            ].map((model, index) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="floating-card p-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-primary icon-float" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{model.title}</h3>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="floating-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
                Ready to <span className="text-gradient-primary">Partner</span> with Us?
              </h2>
              <p className="text-muted-foreground mb-8 animate-slide-up delay-200">
                Join our network of industry leaders and unlock access to top-tier tech talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
                <Button className="btn-gradient-accent">
                  Become a Partner
                </Button>
                <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;