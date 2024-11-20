import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Zap, Clock, Lock, BarChart, Code } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 backdrop-blur-3xl" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 floating">
              Seize Control of Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Email Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform autoresponders into actionable insights instantly. Work smarter, not harder.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/register"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Smart Email Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-600" />}
              title="Instant Analysis"
              description="Process emails in real-time and get structured data instantly"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-indigo-600" />}
              title="Time Tracking"
              description="Automatically extract return dates and availability information"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-indigo-600" />}
              title="Secure Processing"
              description="Enterprise-grade security for your sensitive email data"
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8 text-indigo-600" />}
              title="Advanced Analytics"
              description="Get insights and patterns from your email responses"
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="API Access"
              description="Integrate with your existing workflow through our API"
            />
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered"
              description="Smart analysis using cutting-edge machine learning"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Email Workflow?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of businesses that trust Outseizr for their communication needs.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white/60 backdrop-blur-lg rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;