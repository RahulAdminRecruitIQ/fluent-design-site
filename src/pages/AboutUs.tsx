import React from 'react';

const AboutUs = () => {
  const stats = [
    { number: '500+', label: '“Trusted by hundreds of professionals who’ve found the right fit”. “We’ve helped 500+ professionals land roles that fit, grow, and inspire. Our approach goes beyond placement — it’s about long-term success.”' },
    { number: '98%', label: '“Trusted to deliver — with one of the highest success           rates in the industry”with “Proven track record of successful placements and         client satisfaction”' },
    { number: '100%', label: 'Dedicated Account Managers for Every Client & Candidate with “Seamless Communication. Real-Time Updates.”' },
    { number: '5+', label: '“Professionals with deep, real-world experience — 5+ years across core technologies”' },
  ];

  const team = [
    {
      name: 'Ms. Markende',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },

    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },

    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },

  
    
  ];


  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Company Name with Animation */}
            <div className="mb-4 animate-fade-in">
              <h2 className="font-cursive text-4xl md:text-6xl text-gradient-primary font-semibold animate-slide-up">
                RecruitIQ
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up delay-200 font-cursive">
              About <span className="text-gradient-primary">Our Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-300">
              We are a passionate team dedicated to creating innovative solutions that transform businesses and drive success in the digital age.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center floating-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient-primary">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                To empower businesses worldwide with innovative technology solutions that drive growth, enhance efficiency, and create lasting value for our clients and their customers.
              </p>
              <p className="text-muted-foreground">
                We believe in the power of technology to transform industries and create opportunities for growth. Our team works tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <div className="animate-slide-right">
              <div className="floating-card p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To redefine and lead world in digital transformation by empowering people and organizations to embrace change, drive innovation, and shape the future.— enabling organizations to innovate boldly, scale intelligently, and lead confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              <span className="text-gradient-accent">Empowering Growth Through Purpose-Built Tech Talent Solutions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="floating-card p-8 md:p-12 animate-slide-up delay-200">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At the core of our offering is a team of seasoned experts in workforce strategy, project delivery, and specialized tech recruitment. We're not just filling roles — we're building high-performing teams that drive innovation and long-term value.
                </p>
                
                <p>
                  As an independently funded, self-directed firm, we're uniquely positioned to craft agile, scalable, and fully customized hiring solutions — free from one-size-fits-all constraints. Whether you're a high-growth startup or an enterprise scaling engineering capacity, we align with your goals and deliver talent that fits not just the role, but your culture and pace.
                </p>
                
                <p>
                  With deep experience across software development, DevOps, data engineering, product, and emerging tech roles, our niche focus ensures faster, smarter hires. We help you stay ahead of the curve — and ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Meet Our <span className="text-gradient-primary">Leadership Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Experienced professionals leading innovation and driving success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="floating-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;