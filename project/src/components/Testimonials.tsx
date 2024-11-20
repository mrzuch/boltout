import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Sales Operations',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&h=100',
    content: 'EmailInsights has transformed how we handle out-of-office responses. The automated analysis saves our team hours every week.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Customer Success Manager',
    company: 'CloudScale',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100',
    content: 'The accuracy of return date extraction is incredible. It\'s become an essential tool for our customer support workflow.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'HR Director',
    company: 'Global Systems',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
    content: 'Managing employee availability has never been easier. The dashboard gives us perfect visibility into team schedules.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#4DD0E1]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations are transforming their email management with EmailInsights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg relative transform hover:scale-[1.02] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4DD0E1]/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium text-[#4DD0E1]">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFC857] fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <span className="font-medium">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#FFC857] fill-current" />
              ))}
            </div>
            <span className="text-sm">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}