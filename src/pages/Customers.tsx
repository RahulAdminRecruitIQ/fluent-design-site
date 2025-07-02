import { Star, Quote, ArrowLeft, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Customers = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Working with this team transformed our entire digital presence. The results exceeded our expectations, and our revenue increased by 150% within six months.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      company: 'StartupX',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      content: 'The level of professionalism and technical expertise is outstanding. They delivered our mobile app ahead of schedule and it has been a game-changer for our business.',
      rating: 5,
    },
    {
      name: 'David Chen',
      company: 'E-Commerce Plus',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Their e-commerce solution helped us scale from 100 to 10,000 orders per month. The platform is robust, secure, and user-friendly.',
      rating: 5,
    },
  ];

  const clients = [
    { name: 'TechCorp', logo: '🚀' },
    { name: 'StartupX', logo: '⭐' },
    { name: 'E-Commerce Plus', logo: '🛍️' },
    { name: 'Digital Agency', logo: '💡' },
    { name: 'FinTech Pro', logo: '💳' },
    { name: 'HealthCare Inc', logo: '🏥' },
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '150%', label: 'Average ROI' },
    { icon: Award, number: '98%', label: 'Success Rate' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Revolution',
      client: 'RetailCorp',
      challenge: 'Outdated online store with poor performance',
      solution: 'Modern e-commerce platform with advanced features',
      results: ['300% increase in sales', '50% faster load times', '85% mobile conversion rate'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    },
    {
      title: 'Mobile App Success',
      client: 'FitnessPro',
      challenge: 'Need for customer engagement platform',
      solution: 'Custom mobile app with social features',
      results: ['100K+ app downloads', '4.8 star rating', '60% user retention'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    },
    {
      title: 'Digital Transformation',
      client: 'ManufacturingCo',
      challenge: 'Legacy systems hindering growth',
      solution: 'Complete digital infrastructure overhaul',
      results: ['40% cost reduction', '200% productivity gain', '99.9% uptime'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-gradient-primary">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center floating-card p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4 icon-pulse" />
                  <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              What Our <span className="text-gradient-accent">Clients Say</span>
            </h2>
            <p className="text-muted-foreground animate-slide-up delay-200">
              Real feedback from real customers who have experienced our services.
            </p>
          </div>

          <div className="relative">
            <div className="floating-card p-8 md:p-12 text-center animate-fade-in">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 icon-float" />
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="glass-effect hover:bg-secondary/20"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="glass-effect hover:bg-secondary/20"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              <span className="text-gradient-primary">Case Studies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Detailed looks at how we've solved complex challenges for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="floating-card overflow-hidden group hover:scale-105 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{study.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Challenge:</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">Solution:</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-accent text-sm flex items-center">
                            <Star className="w-3 h-3 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
              Trusted by <span className="text-gradient-accent">Leading Companies</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="floating-card p-6 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 icon-float">{client.logo}</div>
                <div className="text-sm font-medium">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;