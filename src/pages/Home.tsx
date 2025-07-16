
import { ArrowRight, Users, TrendingUp, Globe, Shield, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Elite Tech Talent',
      description: 'Access to top-tier developers, engineers, and tech professionals',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '95% placement success rate with Fortune 500 companies',
    },
    {
      icon: Globe,
      title: 'Nationwide Reach',
      description: 'Serving clients across all major US tech hubs',
    },
  ];

  const stats = [
    { number: '100+', label: 'Elite Tech Professionals - Curated network of senior developers, architects, and engineering leaders across full-stack, cloud, AI/ML, and emerging technologies.' },
    { number: '50+', label: 'Fortune Tech Giants Partnerships - Trusted by industry leaders to deliver exceptional technical talent for mission-critical projects and digital transformation initiatives.' },
    { number: '95%', label: 'Placement Success Rate - Proven track record of successful long-term placements with comprehensive technical vetting and cultural fit assessment.' },
    { number: '100+', label: 'Technical Competencies Evaluated - From React/Node.js to Kubernetes, from cybersecurity to machine learning, covering the full spectrum of modern tech stacks.' },
  ];

  const handleFindTalent = () => {
    navigate('/customers');
  };

  const handleGetStarted = () => {
    navigate('/contact');
    // Scroll to the contact form section after navigation
    setTimeout(() => {
      const contactFormSection = document.querySelector('form');
      if (contactFormSection) {
        contactFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse delay-100" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-500" />

          <div className="relative z-10">
            {/* Company Name with Animation */}
            <div className="mb-4 animate-fade-in">
              <h2 className="font-cursive text-4xl md:text-6xl text-gradient-primary font-semibold animate-slide-up">
                The RecruitIQ
              </h2>
            </div>
            
            <div className="inline-flex items-center space-x-2 floating-card px-4 py-2 mb-8 animate-slide-up delay-200">
              <Star className="w-4 h-4 text-primary icon-pulse" />
              <span className="text-sm font-medium">America's Premier Tech Talent Partner</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-300 font-cursive">
              <span className="text-gradient-primary">Connecting</span>
              <br />
              Tech Talent with Innovation
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up delay-400">
              We bridge the gap between exceptional tech professionals and forward-thinking companies across the United States.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
              <Button onClick={handleFindTalent} className="btn-gradient-primary group">
                Find Talent
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                Join Our Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="floating-card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Why Choose <span className="text-gradient-accent">The RecruitIQ</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Your trusted partner in building high-performing tech teams with America's finest talent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="floating-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary icon-float" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
                <span className="text-gradient-primary">Add Specialized Talent</span> Across Your Organization
              </h2>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up delay-200">
                Strategically expand your technical capabilities with precision-matched professionals who integrate seamlessly 
                into your existing teams. From scaling development operations and implementing DevSecOps practices to advancing 
                AI initiatives and modernizing legacy systems, we deliver the specialized expertise your organization needs to 
                accelerate innovation, enhance productivity, and maintain competitive advantage in today's rapidly evolving 
                technology landscape.
              </p>
              <div className="flex justify-center animate-slide-up delay-300">
                <Button onClick={handleGetStarted} className="btn-gradient-accent">
                  Begin Your Search Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
