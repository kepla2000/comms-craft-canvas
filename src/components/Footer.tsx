
import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-white">
                <span>Comm</span>
                <span className="text-cpaas-500">Connect</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              CommConnect provides powerful communication APIs for businesses of all sizes. Build better customer experiences with our reliable and scalable platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SMS API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Voice API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chat API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Verification API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SDKs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CommConnect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
