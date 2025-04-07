
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO, TechGrowth Inc.',
    company: 'TechGrowth',
    content: "CommConnect has transformed how we communicate with our customers. The APIs are reliable and the integration was seamless. We've seen a 40% improvement in customer engagement since switching.",
    rating: 5
  },
  {
    name: 'Michael Chang',
    position: 'Lead Developer, HealthConnect',
    company: 'HealthConnect',
    content: "We needed a secure communication platform for our healthcare app. CommConnect not only provided all the security features we required but also made compliance with healthcare regulations straightforward.",
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    position: 'Product Manager, RetailBoost',
    company: 'RetailBoost',
    content: "The omnichannel capabilities of CommConnect helped us create a unified customer experience. Implementation was quick, and their support team was there every step of the way.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">
            See what our customers have to say about using CommConnect for their communication needs.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm min-w-[350px] md:min-w-[400px] flex-shrink-0"
              >
                <div className="flex mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-medium text-gray-700 mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by 10,000+ businesses worldwide</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, i) => (
              <div key={i} className="text-xl font-semibold text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
