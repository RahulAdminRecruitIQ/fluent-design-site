import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Briefcase, Star, Mail, Menu, X, Handshake } from 'lucide-react';

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Partners', path: '/partners', icon: Handshake },
    { name: 'Talent Pool', path: '/customers', icon: Star },
    { name: 'Contact Us', path: '/contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Logo in top left corner with animation */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/" className="block">
          <img 
            src="/lovable-uploads/701dd089-6545-4ee7-8e74-7ab9dad361ec.png" 
            alt="The RecruitIQ" 
            className="w-[89px] h-[89px] md:w-[112px] md:h-[112px] logo-animated rounded-full object-cover border-2 border-primary/20 shadow-lg"
          />
        </Link>
      </div>

      {/* Floating Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'scale-95' : 'scale-100'
        }`}
      >
        {/* Desktop Navigation - Increased width and spacing */}
        <div className="hidden lg:flex items-center space-x-1 floating-card px-8 py-3 min-w-[800px]">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isOrange = index % 2 === 0; // Alternate between red and orange
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center space-x-2 px-5 py-2 rounded-lg transition-all duration-300 group whitespace-nowrap ${
                  isActive(item.path)
                    ? `${isOrange ? 'bg-orange-500' : 'bg-red-500'} text-white shadow-lg`
                    : `hover:bg-secondary/50 ${isOrange ? 'text-orange-400 hover:text-orange-300' : 'text-red-400 hover:text-red-300'}`
                }`}
              >
                <Icon 
                  className={`w-4 h-4 transition-all duration-300 ${
                    isActive(item.path) ? 'icon-pulse' : 'group-hover:icon-float'
                  }`} 
                />
                <span className="text-sm font-medium">{item.name}</span>
                
                {/* Animated dot indicator */}
                <div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    isOrange ? 'bg-orange-400' : 'bg-red-400'
                  } transition-all duration-300 ${
                    isActive(item.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Tablet Navigation - Medium screens */}
        <div className="hidden md:flex lg:hidden items-center space-x-1 floating-card px-6 py-3 min-w-[700px]">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isOrange = index % 2 === 0;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 group whitespace-nowrap ${
                  isActive(item.path)
                    ? `${isOrange ? 'bg-orange-500' : 'bg-red-500'} text-white shadow-lg`
                    : `hover:bg-secondary/50 ${isOrange ? 'text-orange-400 hover:text-orange-300' : 'text-red-400 hover:text-red-300'}`
                }`}
              >
                <Icon 
                  className={`w-4 h-4 transition-all duration-300 ${
                    isActive(item.path) ? 'icon-pulse' : 'group-hover:icon-float'
                  }`} 
                />
                <span className="text-xs font-medium">{item.name}</span>
                
                {/* Animated dot indicator */}
                <div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    isOrange ? 'bg-orange-400' : 'bg-red-400'
                  } transition-all duration-300 ${
                    isActive(item.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="floating-card p-3"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 icon-bounce text-red-400" />
            ) : (
              <Menu className="w-6 h-6 icon-float text-orange-400" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full mt-2 right-0 floating-card overflow-hidden transition-all duration-500 ${
              isMobileMenuOpen
                ? 'opacity-100 transform scale-100 translate-y-0'
                : 'opacity-0 transform scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="py-2 min-w-[200px]">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isOrange = index % 2 === 0;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 transition-all duration-300 animate-slide-up ${
                      isActive(item.path)
                        ? `${isOrange ? 'bg-orange-500' : 'bg-red-500'} text-white`
                        : `hover:bg-secondary/50 ${isOrange ? 'text-orange-400 hover:text-orange-300' : 'text-red-400 hover:text-red-300'}`
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-5 h-5 icon-float" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;