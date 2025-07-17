import { Star, Quote, ArrowLeft, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Customers = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Enterprise Solutions Inc.',
      role: 'Solution Architect',
      image: '/Pic/Sarah.J.webp',
      content: 'RecruitIQ helped me transition from a senior developer role to a Solution Architect position at a Fortune 500 company. Their understanding of enterprise architecture requirements was exceptional.',
      rating: 5,
    },
    {
      name: 'Thomas Minacale',
      company: 'Global Tech Ventures',
      role: 'Program Manager',
      image: '/Pic/Thomas Minacale.webp',
      content: 'The team at RecruitIQ understood exactly what I was looking for in a Program Manager role. They matched me with a position that perfectly aligned with my technical background and leadership aspirations.',
      rating: 5,
    },
    {
      name: 'Carol Frugman',
      company: 'Innovation Labs',
      role: 'Senior Java Developer',
      image: '/Pic/Carol Frugman.webp',
      content: 'After 8 years in Java development, I wanted to work on cutting-edge microservices architecture. RecruitIQ found me the perfect role where I could leverage my Spring Boot expertise in a cloud-native environment.',
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
      title: 'Enterprise Architecture Transformation',
      client: 'Fortune 500 Financial Services',
      challenge: 'Need for experienced Solution Architect to lead digital transformation',
      solution: 'Placed senior architect with 10+ years enterprise experience',
      results: ['Reduced system complexity by 40%', 'Improved scalability by 300%', 'Delivered $2M cost savings'],
      image: '/Pic/Sarah.J.webp',
    },
    {
      title: 'Agile Program Management Excellence',
      client: 'Tech Startup Scaling Rapidly',
      challenge: 'Multiple development teams needed coordination and leadership',
      solution: 'Experienced Program Manager with technical background',
      results: ['Improved delivery speed by 60%', 'Reduced project risks by 80%', 'Enhanced team collaboration'],
      image: '/Pic/Thomas Minacale.webp',
    },
    {
      title: 'Java Development Excellence',
      client: 'Cloud-Native Platform Company',
      challenge: 'Need for senior Java developer with microservices expertise',
      solution: 'Placed expert Java developer with Spring Boot and cloud experience',
      results: ['Reduced API response time by 50%', 'Improved system reliability to 99.9%', 'Mentored 5 junior developers'],
      image: '/Pic/Carol Frugman.webp',
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
          {/* Company Name with Animation */}
          <div className="mb-4 animate-fade-in">
            <h2 className="font-cursive text-4xl md:text-6xl text-gradient-primary font-semibold animate-slide-up">
              RecruitIQ
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up delay-200 font-cursive">
            Our <span className="text-gradient-primary">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-300">
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