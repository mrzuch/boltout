import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureColumnProps {
  title: string;
  features: Feature[];
}

export default function FeatureColumn({ title, features }: FeatureColumnProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>
      <div className="space-y-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#4DD0E1]/10 rounded-lg group-hover:bg-[#4DD0E1]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[#4DD0E1]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center mt-2 text-[#4DD0E1] hover:text-[#3ba8b7] font-medium"
                  >
                    Learn more
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
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
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}