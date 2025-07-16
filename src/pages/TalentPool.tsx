import { CheckCircle, Users, Target, Award, ArrowRight, Upload, MessageSquare, UserCheck, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import generated images
import talentHero from '@/assets/talent-hero.jpg';
import cloudDevOps from '@/assets/cloud-devops.jpg';
import softwareDevelopers from '@/assets/software-developers.jpg';
import dataEngineers from '@/assets/data-engineers.jpg';
import cybersecurity from '@/assets/cybersecurity.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';

const TalentPool = () => {
  const talentTypes = [
    {
      title: 'Cloud & DevOps Engineers',
      description: 'AWS, Azure, GCP specialists building scalable infrastructure and automation pipelines.',
      image: cloudDevOps,
      skills: ['AWS/Azure/GCP', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines']
    },
    {
      title: 'Software Developers',
      description: 'Full-stack and specialized developers creating robust applications and systems.',
      image: softwareDevelopers,
      skills: ['Java', 'Python', 'React', 'Node.js', 'Microservices']
    },
    {
      title: 'Data Engineers & Analysts',
      description: 'Data pipeline architects and analytics experts turning data into insights.',
      image: dataEngineers,
      skills: ['Spark', 'SQL', 'Python', 'ETL/ELT', 'Data Warehousing']
    },
    {
      title: 'Site Reliability Engineers',
      description: 'SREs ensuring system reliability, performance, and seamless operations.',
      image: cybersecurity,
      skills: ['Monitoring', 'Automation', 'Performance Tuning', 'Incident Response']
    },
    {
      title: 'Cybersecurity Experts',
      description: 'Security professionals protecting digital assets and ensuring compliance.',
      image: cybersecurity,
      skills: ['Security Architecture', 'Penetration Testing', 'Compliance', 'Risk Management']
    },
    {
      title: 'Technical Project Managers',
      description: 'Leaders bridging technical teams and business objectives for successful delivery.',
      image: softwareDevelopers,
      skills: ['Agile/Scrum', 'Technical Leadership', 'Stakeholder Management', 'Delivery']
    }
  ];

  const valueProps = [
    {
      icon: Target,
      title: 'Transparent Process',
      description: 'No hidden steps, clear communication, and honest feedback throughout your journey.'
    },
    {
      icon: Users,
      title: 'High-Growth Opportunities',
      description: 'Access to cutting-edge startups and established enterprises pushing innovation forward.'
    },
    {
      icon: Briefcase,
      title: 'Flexible Work Models',
      description: 'Remote, hybrid, and on-site opportunities that match your lifestyle and career goals.'
    },
    {
      icon: Award,
      title: 'Career Growth Focus',
      description: 'We match you with roles that advance your skills and accelerate your career trajectory.'
    }
  ];

  const testimonials = [
    {
      quote: "They understood exactly what I was looking for and helped me land a role within two weeks.",
      name: "DevOps Engineer",
      location: "Dallas, TX",
      image: testimonial1
    },
    {
      quote: “They quickly understood my goals and aligned me with the right opportunity — I landed the role in under two weeks.",
      name: "Data Engineer, Northern Trust", 
      location: "New Jersey, NJ",
      
    },
    {
      quote: “They matched my skills and expectations precisely, resulting in an offer from a company I genuinely align with — all within two weeks.",
      name: "Business Analyst, BA (JMPC)", 
      location: "New York, NY",
  
    },
  {
      quote: “From the very first call, they understood my profile and priorities — and helped me land a role faster than I expected.",
      name: "Solution Architect- Citi Bank", 
      location: "LA,CA",
      
    },
  
    
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Submit Your Profile',
      description: 'Upload your resume or apply to specific roles that match your expertise.',
      icon: Upload
    },
    {
      step: 2,
      title: 'Technical Alignment',
      description: 'Initial screening to understand your skills, goals, and ideal opportunities.',
      icon: MessageSquare
    },
    {
      step: 3,
      title: 'Interview Preparation',
      description: 'Coaching and feedback to ensure you are prepared for successful interviews.',
      icon: UserCheck
    },
    {
      step: 4,
      title: 'Offer & Onboarding',
      description: 'Support through negotiations and smooth transition into your new role.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${talentHero})` }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-20">
          {/* Company Name with Animation */}
          <div className="mb-4 animate-fade-in">
            <h2 className="font-cursive text-4xl md:text-6xl text-gradient-primary font-semibold animate-slide-up">
              RecruitIQ
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up delay-200 font-cursive">
            Empowering <span className="text-gradient-primary">Top Tech Talent</span><br />
            Across North America
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-slide-up delay-300">
            We Champion the Talent That Drives Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-up delay-400">
            From cloud engineers to DevOps experts — we help top-tier tech talent thrive in roles that matter. 
            Connect with opportunities at high-growth companies that value your expertise and career aspirations.
          </p>
          <div className="mt-10 animate-slide-up delay-500">
            <Button className="btn-gradient-primary mr-4 text-lg px-8 py-3">
              Join Our Talent Network
            </Button>
            <Button variant="outline" className="glass-effect hover:bg-secondary/20 text-lg px-8 py-3">
              View Open Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Who We <span className="text-gradient-accent">Work With</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
              We specialize in placing highly-skilled professionals in critical cloud infrastructure, 
              automation, and engineering roles — both contract and full-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentTypes.map((talent, index) => (
              <div
                key={talent.title}
                className="floating-card group hover:scale-105 transition-all duration-500 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={talent.image} 
                    alt={talent.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{talent.title}</h3>
                  <p className="text-muted-foreground mb-4">{talent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Talent Works With Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Why Talent <span className="text-gradient-primary">Works With Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
              We don't just fill roles — we build careers. Our talent-first approach ensures each 
              opportunity is aligned with your long-term goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div
                  key={prop.title}
                  className="floating-card p-6 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary icon-float" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground text-sm">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Success <span className="text-gradient-accent">Stories</span>
            </h2>
            <p className="text-muted-foreground animate-slide-up delay-200">
              Hear from talented professionals who found their perfect match through our network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="floating-card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <blockquote className="text-lg mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-primary font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              How It <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="text-muted-foreground animate-slide-up delay-200">
              Our streamlined process gets you from application to your dream role efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform -translate-x-1/2 z-0" />
                  )}
                  <div className="floating-card p-6 relative z-10 group hover:scale-105 transition-all duration-500">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent icon-float" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
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
              Quick answers to common questions about joining our talent network.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Do you support remote placements?',
                answer: 'Absolutely! We work with companies offering remote, hybrid, and on-site opportunities across North America. Many of our placements are fully remote positions with top-tier tech companies.',
              },
              {
                question: "What's your average hiring timeline?",
                answer: 'Our average time from initial screening to offer is 2-3 weeks. For urgent roles, we can often expedite the process and present qualified candidates within 48-72 hours.',
              },
              {
                question: 'Do you work with both contract and full-time roles?',
                answer: 'Yes, we place talent in both contract-to-hire and direct full-time positions. We work closely with you to understand your preference and career goals.',
              },
              {
                question: 'What level of experience do you work with?',
                answer: 'We primarily focus on mid-senior to senior-level professionals with 3+ years of experience in their specialized field. We occasionally work with exceptional junior talent for specific client needs.',
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

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="floating-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
                Ready for Your Next <span className="text-gradient-primary">Great Opportunity</span>?
              </h2>
              <p className="text-muted-foreground mb-8 animate-slide-up delay-200">
                Join thousands of tech professionals who have found their ideal roles through our network. 
                Let's accelerate your career journey together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
                <Button className="btn-gradient-primary group text-lg px-8 py-3">
                  Submit Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="glass-effect hover:bg-secondary/20 text-lg px-8 py-3">
                  View Open Roles
                </Button>
                <Link to="/contact">
                  <Button className="btn-gradient-accent text-lg px-8 py-3">
                    Join Our Talent Network
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentPool;
