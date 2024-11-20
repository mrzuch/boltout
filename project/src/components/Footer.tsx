import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-[#4DD0E1]" />
              <span className="ml-2 text-xl font-semibold text-white">EmailInsights</span>
            </div>
            <p className="text-sm">
              Transforming email management with intelligent automation and actionable insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#4DD0E1] transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@emailinsights.com" className="hover:text-[#4DD0E1] transition-colors">
                  support@emailinsights.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4DD0E1] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-sm">
                123 Innovation Drive<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} EmailInsights. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">Cookies</a>
              <a href="#" className="hover:text-[#4DD0E1] transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}