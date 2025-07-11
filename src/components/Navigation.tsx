import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onLogoClick?: () => void;
}

const Navigation = ({ onLogoClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Syrine Jemal', path: '/syrine-jemal' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Light Gray-Blue Gradient Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200/80 via-slate-100/75 to-blue-50/80 backdrop-blur-lg border-b border-white/20 shadow-sm"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo - Updated Image */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <img 
                src="/lovable-uploads/5978ed5c-e855-45cd-bef2-5c802797ef89.png" 
                alt="SJA Logo" 
                className="h-8 w-auto drop-shadow-sm"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Added margin-right to shift items to the right */}
          <div className="hidden md:flex items-center space-x-8 mr-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-black hover:text-white transition-colors drop-shadow-sm group"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontSize: '17px',
                  fontWeight: '300',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                }}
              >
                {item.name}
                {/* White underline on hover */}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                {/* Active state underline */}
                {isActive(item.path) && (
                  <span 
                    className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-black transition-all duration-200"
                    style={{ width: '100%' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black drop-shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/30 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-black hover:text-white transition-colors py-2 group"
                  style={{
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '300',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {/* White underline on hover for mobile */}
                  <span className="absolute bottom-[0px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  {/* Active state underline for mobile */}
                  {isActive(item.path) && (
                    <span 
                      className="absolute bottom-[0px] left-0 h-[1px] bg-black transition-all duration-200"
                      style={{ width: '100%' }}
                    />
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
