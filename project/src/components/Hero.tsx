import React from 'react';
import { ArrowRight, Inbox } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#4DD0E1]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Turn Automated Email Responses into{' '}
          <span className="relative whitespace-nowrap text-[#4DD0E1]">
            <span className="relative">Actionable Insights</span>
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
          Our platform analyzes autoresponder emails to extract names, return dates, and alternate contacts in seconds.
        </p>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="bg-[#FF6F61] text-white px-8 py-3 rounded-lg hover:bg-[#ff8577] transition-colors flex items-center gap-2">
            Try for Free
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="border-2 border-[#4DD0E1] text-[#4DD0E1] px-8 py-3 rounded-lg hover:bg-[#4DD0E1]/10 transition-colors">
            Learn More
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <Inbox className="h-64 w-64 text-[#4DD0E1] opacity-20 absolute -top-8 -left-8" />
            <div className="relative bg-white rounded-xl shadow-xl p-8 max-w-2xl">
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}