import { Building2, Handshake, TrendingUp, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partners = [
    // Industry Categories
    { 
      name: 'Service Implementation Partners (SI)', 
      
    },
    { 
      name: 'Manufacturing Partners', 
      
    },
    { 
      name: 'Insurance Partners', 
      
    },
    { 
      name: 'Health & Welfare (HRO) Partners', 
      
    },
    { 
      name: 'Financial Partners', 
      
    },
    { 
      name: 'Automotive Partners', 
      
    },
    { 
      name: 'Engineering Partners', 
      
    },
    { 
      name: 'US Government & Federal Partners', 
      
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
    { number: '10+', label: 'Strategic Partners and Growing --' },
    { number: '500+', label: 'Tech Professionals Placed and Growing --' },
    { number: '95%', label: 'Customer/ Partner Satisfaction & Growing' },
    { number: '100%', label: 'Highly Talented Technical Recruitment Team & Growing' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Company Name with Animation */}
          <div className="mb-4 animate-fade-in">
            <h2 className="font-cursive text-4xl md:text-6xl text-gradient-primary font-semibold animate-slide-up">
              RecruitIQ
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up delay-200 font-cursive">
            <span className="text-gradient-primary">Talent Delivery Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-300">
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
                  className="flex-shrink-0 floating-card p-8 text-center group hover:scale-105 transition-all duration-500 min-w-[250px] h-32 flex flex-col justify-center"
                >
                  <div className={`text-lg font-bold mb-2 whitespace-nowrap transition-colors group-hover:text-primary font-cursive ${
                    partner.type === 'government' 
                      ? 'italic font-space text-accent' 
                      : 'text-primary'
                  }`}>
                    {partner.name}
                  </div>
                  {partner.type === 'government' && (
                    <div className="text-xs text-muted-foreground">
                      Government
                    </div>
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${partner.name}`}
                  className="flex-shrink-0 floating-card p-8 text-center group hover:scale-105 transition-all duration-500 min-w-[250px] h-32 flex flex-col justify-center"
                >
                  <div className={`text-lg font-bold mb-2 whitespace-nowrap transition-colors group-hover:text-primary font-cursive ${
                    partner.type === 'government' 
                      ? 'italic font-space text-accent' 
                      : 'text-primary'
                  }`}>
                    {partner.name}
                  </div>
                  {partner.type === 'government' && (
                    <div className="text-xs text-muted-foreground">
                      Government
                    </div>
                  )}
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
                <Link to="/contact">
                  <Button className="btn-gradient-accent">
                    Become a Partner
                  </Button>
                </Link>
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