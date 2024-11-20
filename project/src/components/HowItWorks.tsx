import React from 'react';
import { Upload, Cpu, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Upload or Paste Emails",
    description: "Drag & drop email files or paste content directly into our intuitive interface.",
  },
  {
    icon: Cpu,
    title: "Automatic Analysis",
    description: "Our AI-powered tools analyze the content to identify key details instantly.",
  },
  {
    icon: BarChart,
    title: "View Results Instantly",
    description: "Access structured insights in your dashboard for quick decision-making.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#4DD0E1]/20 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-white rounded-xl p-8 text-center relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4DD0E1]/10 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#4DD0E1]" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF6F61] rounded-full text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-8 -translate-y-1/2 translate-x-1/2 z-10">
                      <div className="w-full h-full bg-white rounded-full border-2 border-[#4DD0E1]/20 flex items-center justify-center">
                        <svg 
                          className="w-4 h-4 text-[#4DD0E1]" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#FF6F61] text-white px-8 py-3 rounded-lg hover:bg-[#ff8577] transition-colors inline-flex items-center gap-2">
            Get Started Now
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}