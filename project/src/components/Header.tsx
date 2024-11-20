import React from 'react';
import { Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Mail className="h-8 w-8 text-[#4DD0E1]" />
            <span className="ml-2 text-xl font-semibold text-gray-900">EmailInsights</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <button className="text-gray-600 hover:text-gray-900 font-medium">Log In</button>
            <button className="bg-[#FF6F61] text-white px-4 py-2 rounded-lg hover:bg-[#ff8577] transition-colors">
              Get Started Free
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </nav>
    </header>
  );
}