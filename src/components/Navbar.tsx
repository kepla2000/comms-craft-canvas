
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center space-x-2">
          <Link to="/" className="relative text-2xl font-bold text-cpaas-500">
            <span className="text-gray-900">Comm</span>
            <span>Connect</span>
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-cpaas-500 rounded-full"></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/products" className="nav-link font-medium">Products</Link>
            <Link to="/solutions" className="nav-link font-medium">Solutions</Link>
            <Link to="/pricing" className="nav-link font-medium">Pricing</Link>
            <Link to="/documentation" className="nav-link font-medium">Documentation</Link>
          </div>
        )}

        <div className="flex items-center space-x-4">
          {!isMobile && (
            <>
              <Link to="/login" className="text-gray-700 hover:text-cpaas-500 transition-colors">Login</Link>
              <Link to="/get-started">
                <Button className="bg-cpaas-500 hover:bg-cpaas-600 text-white">
                  Get Started
                </Button>
              </Link>
            </>
          )}
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 px-4 flex flex-col space-y-4 animate-fade-in">
          <Link to="/products" className="px-4 py-2 hover:bg-gray-100 rounded-md">Products</Link>
          <Link to="/solutions" className="px-4 py-2 hover:bg-gray-100 rounded-md">Solutions</Link>
          <Link to="/pricing" className="px-4 py-2 hover:bg-gray-100 rounded-md">Pricing</Link>
          <Link to="/documentation" className="px-4 py-2 hover:bg-gray-100 rounded-md">Documentation</Link>
          <hr className="my-2" />
          <Link to="/login" className="px-4 py-2 hover:bg-gray-100 rounded-md">Login</Link>
          <Link to="/get-started">
            <Button className="bg-cpaas-500 hover:bg-cpaas-600 text-white w-full">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
