import { ArrowRight, Sparkles, Zap, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with local support',
    },
  ];

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
            <div className="inline-flex items-center space-x-2 floating-card px-4 py-2 mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary icon-pulse" />
              <span className="text-sm font-medium">Welcome to the Future</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-200">
              <span className="text-gradient-primary">Revolutionary</span>
              <br />
              Digital Solutions
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up delay-300">
              Transform your business with cutting-edge technology and innovative solutions that drive growth and success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
              <Button className="btn-gradient-primary group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Why Choose <span className="text-gradient-accent">Our Platform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Experience the power of modern technology with features designed for tomorrow's challenges.
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
                Ready to <span className="text-gradient-primary">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 animate-slide-up delay-200">
                Join thousands of satisfied customers who have revolutionized their operations with our platform.
              </p>
              <Button className="btn-gradient-accent animate-slide-up delay-300">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;