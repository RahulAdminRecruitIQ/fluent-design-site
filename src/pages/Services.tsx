import { Users, Search, Target, Cog, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Staffing and Recruiting Services',
      description: 'End-to-end recruitment solutions for technical roles, from junior developers to senior architects.',
      features: ['Full-stack Developer Recruitment', 'DevOps & Cloud Engineers', 'Data Scientists & ML Engineers', 'Product & UX Professionals'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      details: 'Our comprehensive staffing services cover the entire recruitment lifecycle, from sourcing and screening to onboarding. We specialize in finding top-tier technical talent across all levels of experience.',
    },
    {
      icon: Search,
      title: 'Search Services',
      description: 'Executive search and specialized talent acquisition for leadership and niche technical positions.',
      features: ['C-Suite Technology Leaders', 'Principal Engineers & Architects', 'Technical Directors', 'Specialized Skill Sets'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      details: 'Our executive search practice focuses on identifying and attracting exceptional technical leaders who can drive innovation and scale engineering organizations.',
    },
    {
      icon: Target,
      title: 'Talent Advisory Services',
      description: 'Strategic consulting to optimize your hiring processes and build high-performing engineering teams.',
      features: ['Hiring Strategy Development', 'Compensation Benchmarking', 'Team Structure Design', 'Technical Assessment Framework'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      details: 'We provide strategic guidance to help you make informed decisions about talent acquisition, team building, and organizational design in the tech space.',
    },
    {
      icon: Cog,
      title: 'Managed Delivery Services',
      description: 'Complete project teams and managed services for software development and technical initiatives.',
      features: ['Dedicated Development Teams', 'Project-based Delivery', 'Technical Leadership', 'Agile Team Management'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      details: 'Our managed delivery services provide you with complete, pre-assembled teams that can hit the ground running on your most critical technical projects.',
    },
    {
      icon: TrendingUp,
      title: 'Workforce Management Services',
      description: 'Comprehensive workforce planning and management solutions for technical organizations.',
      features: ['Workforce Planning & Analytics', 'Contractor Management', 'Skills Gap Analysis', 'Talent Pipeline Development'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      details: 'We help you optimize your technical workforce through strategic planning, analytics, and comprehensive management of both permanent and contract resources.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your technical requirements, team dynamics, and company culture to understand your exact needs.',
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Develop a customized recruitment strategy and talent acquisition roadmap aligned with your business goals.',
    },
    {
      step: '03',
      title: 'Sourcing & Screening',
      description: 'Leverage our extensive network and advanced screening processes to identify the best technical talent.',
    },
    {
      step: '04',
      title: 'Delivery & Integration',
      description: 'Seamlessly integrate new hires into your team with ongoing support and performance monitoring.',
    },
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up delay-200">
            Our <span className="text-gradient-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-300">
            Comprehensive tech talent solutions designed to accelerate your engineering capabilities and drive innovation across your organization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="floating-card group hover:scale-105 transition-all duration-500 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 animated-underline">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <p className="text-sm text-muted-foreground/80 mb-6 leading-relaxed">{service.details}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full btn-gradient-primary group">
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Our <span className="text-gradient-accent">Hiring Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              A proven methodology that ensures we deliver the right technical talent for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full text-2xl font-bold text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
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
                <span className="text-gradient-primary">We Help You Hire. You Focus on Building.</span>
              </h2>
              <p className="text-muted-foreground mb-6 animate-slide-up delay-200">
                Stop spending valuable time on lengthy recruitment processes. Our specialized team handles every aspect of technical hiring — from sourcing and screening to final placement — so you can concentrate on what you do best: creating innovative solutions.
              </p>
              <p className="text-muted-foreground/80 mb-8 animate-slide-up delay-300">
                Whether you need a single senior engineer or an entire development team, we deliver pre-vetted, culture-fit candidates who are ready to contribute from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
                <Button asChild className="btn-gradient-accent">
                  <Link to="/contact">
                    Tech Hiring, Done Right — Let's Talk.
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                  View Our Expertise
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;