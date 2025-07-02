import { Code, Palette, Globe, Smartphone, Database, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Performance Optimization'],
      price: 'Starting at $2,999',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'App Store Publishing', 'Push Notifications'],
      price: 'Starting at $4,999',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that engage and convert.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,999',
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      features: ['Shopify/WooCommerce', 'Payment Processing', 'Inventory Management', 'Analytics'],
      price: 'Starting at $3,999',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server infrastructure and database solutions.',
      features: ['Cloud Architecture', 'Database Design', 'API Development', 'DevOps'],
      price: 'Starting at $2,499',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security audits and implementation.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
      price: 'Starting at $1,499',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your needs and define project requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create detailed roadmap and technical specifications.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using agile development methodology.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploy and support your project for ongoing success.',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-gradient-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
            Comprehensive digital solutions tailored to your business needs. From web development to mobile apps, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="floating-card p-8 group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary icon-float" />
                    </div>
                    <div className="text-2xl font-bold text-gradient-accent">
                      {service.price}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 animated-underline">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full btn-gradient-primary group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
              Our <span className="text-gradient-accent">Development Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              A proven methodology that ensures successful project delivery every time.
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
                Ready to Start Your <span className="text-gradient-primary">Project</span>?
              </h2>
              <p className="text-muted-foreground mb-8 animate-slide-up delay-200">
                Let's discuss your needs and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
                <Button className="btn-gradient-accent">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                  View Portfolio
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