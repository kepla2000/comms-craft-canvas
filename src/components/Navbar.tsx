
import React, { useState } from 'react';
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
          <div className="relative text-2xl font-bold text-cpaas-500">
            <span className="text-gray-900">Comm</span>
            <span>Connect</span>
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-cpaas-500 rounded-full"></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="nav-link font-medium">Products</a>
            <a href="#" className="nav-link font-medium">Solutions</a>
            <a href="#" className="nav-link font-medium">Pricing</a>
            <a href="#" className="nav-link font-medium">Documentation</a>
          </div>
        )}

        <div className="flex items-center space-x-4">
          {!isMobile && (
            <>
              <a href="#" className="text-gray-700 hover:text-cpaas-500 transition-colors">Login</a>
              <Button className="bg-cpaas-500 hover:bg-cpaas-600 text-white">
                Get Started
              </Button>
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
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">Products</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">Solutions</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">Pricing</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">Documentation</a>
          <hr className="my-2" />
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">Login</a>
          <Button className="bg-cpaas-500 hover:bg-cpaas-600 text-white w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
