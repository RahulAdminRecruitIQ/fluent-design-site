import { Mail, Phone, MapPin, Clock, Send, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WorldMap } from '@/components/ui/world-map';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@therecruitiq.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Street, Suite 100',
      description: 'New York, NY 10001',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
    },
  ];

  const officeLocations = [
    {
      city: "New York",
      country: "USA",
      address: "123 Business Street, Suite 100",
      phone: "+1 (555) 123-4567",
      type: "Headquarters",
      lat: 40.7128,
      lng: -74.0060,
    },
    {
      city: "San Francisco",
      country: "USA",
      address: "456 Tech Avenue, Floor 15",
      phone: "+1 (555) 234-5678",
      type: "West Coast Hub",
      lat: 37.7749,
      lng: -122.4194,
    },
    {
      city: "Seattle",
      country: "USA",
      address: "654 Pacific Northwest Plaza",
      phone: "+1 (555) 567-8901",
      type: "Northwest Operations",
      lat: 47.6062,
      lng: -122.3321,
    },
  ];

  // Create connections from New York HQ to all other offices for the world map
  const worldMapConnections = officeLocations.slice(1).map(office => ({
    start: { 
      lat: officeLocations[0].lat, 
      lng: officeLocations[0].lng, 
      label: `${officeLocations[0].city} HQ` 
    },
    end: { 
      lat: office.lat, 
      lng: office.lng, 
      label: `${office.city} Office` 
    },
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up delay-200">
            Get in <span className="text-gradient-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-300">
            Connect with America's premier tech talent network. We're here to help you find the perfect tech professionals for your team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="floating-card p-6 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary icon-float" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* US Key Locations Section with World Map */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Our <span className="text-gradient-primary">Key Locations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Strategically positioned across major US tech hubs to serve you better and connect with top talent in key markets.
            </p>
          </div>

          {/* World Map */}
          <div className="floating-card p-8 mb-12 animate-slide-up delay-300">
            <div className="h-[600px] w-full">
              <WorldMap
                dots={worldMapConnections}
                lineColor="#ef4444"
              />
            </div>
          </div>

          {/* Office Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div
                key={`${office.city}-${office.country}`}
                className="floating-card p-6 animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg flex-shrink-0">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold">{office.city}</h3>
                      <span className="text-sm text-muted-foreground">({office.country})</span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-2">{office.type}</p>
                    <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                    <p className="text-accent text-sm font-medium">{office.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-left">
              <div className="floating-card p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Send us a <span className="text-gradient-accent">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Ready to scale your tech team? Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass-effect border-border/30 focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass-effect border-border/30 focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass-effect border-border/30 focus:border-primary"
                      placeholder="Talent Acquisition Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-effect border-border/30 focus:border-primary resize-none"
                      placeholder="Tell us about your tech talent needs..."
                    />
                  </div>

                  <Button type="submit" className="btn-gradient-primary w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="animate-slide-right">
              <div className="floating-card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose <span className="text-gradient-primary">Our Network</span>?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3 p-4 glass-effect rounded-lg">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Rapid Talent Matching</h4>
                      <p className="text-muted-foreground text-sm">Connect with pre-vetted tech professionals within 48 hours across all major US tech markets.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 glass-effect rounded-lg">
                    <Building2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Strategic Tech Hubs</h4>
                      <p className="text-muted-foreground text-sm">Access to top-tier developers, engineers, and tech leaders across 3 major US innovation centers.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 glass-effect rounded-lg">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Local Market Expertise</h4>
                      <p className="text-muted-foreground text-sm">Deep understanding of regional tech ecosystems, salary benchmarks, and hiring trends.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 glass-effect rounded-lg">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Key US Locations</h4>
                      <p className="text-muted-foreground text-sm">Offices in essential tech cities ensuring seamless collaboration and local support.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Ready to Scale Your Tech Team?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Schedule a free consultation to discuss your tech talent requirements and hiring goals.
                  </p>
                  <Button className="btn-gradient-accent w-full">
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Frequently Asked <span className="text-gradient-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground animate-slide-up delay-200">
              Quick answers to common questions about our US tech talent services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Do you provide talent in all your office locations?',
                answer: 'Yes, we have active talent networks in all major US tech hubs. Each location specializes in local market expertise while maintaining our national quality standards.',
              },
              {
                question: 'How quickly can you source tech talent?',
                answer: 'We typically present qualified candidates within 48-72 hours for most tech roles, with our extensive pre-vetted talent network across the US.',
              },
              {
                question: 'What types of tech roles do you specialize in?',
                answer: 'We specialize in software engineers, DevOps, data scientists, product managers, tech leads, and C-level tech executives across all major programming languages and frameworks.',
              },
              {
                question: 'Do you help with remote and hybrid tech roles?',
                answer: 'Absolutely! We excel at placing remote, hybrid, and on-site tech professionals, understanding the unique dynamics of distributed tech teams.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="floating-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
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
                Ready to Build Your <span className="text-gradient-primary">Dream Tech Team</span>?
              </h2>
              <p className="text-muted-foreground mb-8 animate-slide-up delay-200">
                Let's discuss your tech hiring needs and explore how our strategic network can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
                <Button className="btn-gradient-accent">
                  Start Hiring Today
                </Button>
                <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                  View Our Tech Talent Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;