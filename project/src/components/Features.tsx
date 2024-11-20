import React from 'react';
import { Mail, Calendar, User, Upload, BarChart2, Users, Code2, PieChart, BookOpen } from 'lucide-react';
import FeatureColumn from './FeatureColumn';

const featureColumns = [
  {
    title: "Core Functionalities",
    features: [
      {
        icon: Mail,
        title: "Autoresponder Analyzer",
        description: "Analyze autoresponder emails to extract names, return dates, alternate contacts, and more in seconds."
      },
      {
        icon: User,
        title: "Name Extraction",
        description: "Automatically extract names from email signatures or message content with precision."
      },
      {
        icon: Calendar,
        title: "Return Date Identification",
        description: "Identify clear return dates from messages like 'I'll be back on [date]' effortlessly."
      }
    ]
  },
  {
    title: "Workflow Enhancers",
    features: [
      {
        icon: Upload,
        title: "Drag & Drop Email Upload",
        description: "Easily upload email files or paste email content directly into the platform for instant analysis."
      },
      {
        icon: BarChart2,
        title: "Real-Time Analysis Dashboard",
        description: "Track all your email analyses in one place, with real-time updates and data visualization."
      },
      {
        icon: BookOpen,
        title: "Contact Finder",
        description: "Discover alternate contacts for follow-ups when the primary contact is unavailable."
      }
    ]
  },
  {
    title: "For Teams & Advanced Users",
    features: [
      {
        icon: Users,
        title: "Collaborative Dashboards",
        description: "Share analysis results with your team and collaborate on autoresponder workflows seamlessly."
      },
      {
        icon: Code2,
        title: "API Access for Automation",
        description: "Integrate our analysis engine directly into your workflow with our developer-friendly API."
      },
      {
        icon: PieChart,
        title: "Usage Analytics",
        description: "Gain insights into autoresponder trends with advanced analytics tools for teams."
      }
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage email responses effectively, from basic analysis to advanced team collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureColumns.map((column, index) => (
            <FeatureColumn key={index} {...column} />
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
              alt="Team member"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Want to see it in action?</h3>
              <p className="text-gray-600 mt-1">Schedule a personalized demo with our team</p>
            </div>
          </div>
          <button className="bg-[#FF6F61] text-white px-6 py-3 rounded-lg hover:bg-[#ff8577] transition-colors">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}