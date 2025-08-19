import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onLogoClick?: () => void;
}

const Navigation = ({ onLogoClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'SYRINE JEMAL', path: '/syrine-jemal' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SJA LABS', path: '/sj-labs' },
    { name: 'PUBLICATIONS', path: '/publications' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <img
                src="/assets/logo24.png"
                alt="SJA Logo"
                className=" relative z-50 h-12 w-auto "
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 mr-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white hover:text-gray-300 transition-colors drop-shadow-sm group font-mont text-[15px] font-light tracking-[0.25em]"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                {isActive(item.path) && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-white" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white drop-shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/30 bg-black/90 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative text-white hover:text-gray-300 transition-colors py-2 group"
                  style={{
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '300',
                    letterSpacing: '0.8px',
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-[0px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  {isActive(item.path) && (
                    <span className="absolute bottom-[0px] left-0 h-[1px] bg-white w-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
