import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out our service',
    features: [
      '5 email analyses per month',
      'Basic data extraction',
      'Standard support',
      'Single user account',
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '20',
    description: 'Best for professionals and growing teams',
    features: [
      'Unlimited email analyses',
      'Advanced data extraction',
      'Priority support',
      'Team collaboration tools',
      'API access',
      'Custom dashboard',
    ],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Custom solution architecture',
      'Dedicated account manager',
      'Custom API integration',
      'SLA guarantees',
      'Advanced analytics',
      'Custom training sessions',
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-[#4DD0E1]/5 border-2 border-[#4DD0E1] shadow-xl'
                  : 'bg-white border border-gray-200'
              } p-8 transform hover:scale-[1.02] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#FFC857] text-white px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.price !== 'Custom' && <span className="text-gray-500">$</span>}
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4DD0E1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-[#FF6F61] text-white hover:bg-[#ff8577]'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need a custom solution?</h3>
              <p className="text-gray-600">Let's discuss how we can help your organization.</p>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
              Contact Our Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}