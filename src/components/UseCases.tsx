
import React from 'react';
import { ArrowRight, ShoppingCart, Users, Headphones, Building2, MessageSquare } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      title: 'E-commerce',
      icon: <ShoppingCart className="h-8 w-8 text-cpaas-500" />,
      description: 'Send order confirmations, shipping updates, and abandoned cart notifications through SMS, WhatsApp, and other channels.',
      link: '#'
    },
    {
      title: 'Customer Support',
      icon: <Headphones className="h-8 w-8 text-cpaas-500" />,
      description: 'Provide seamless support experiences across channels with intelligent routing and unified conversation history.',
      link: '#'
    },
    {
      title: 'Banking & Finance',
      icon: <Building2 className="h-8 w-8 text-cpaas-500" />,
      description: 'Secure authentication, transaction alerts, and personalized financial notifications through verified channels.',
      link: '#'
    },
    {
      title: 'Healthcare',
      icon: <Users className="h-8 w-8 text-cpaas-500" />,
      description: 'HIPAA-compliant appointment reminders, telehealth solutions, and patient engagement tools.',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Industry</h2>
          <p className="text-lg text-gray-600">
            Our communications platform powers experiences across various industries and use cases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <div className="inline-block p-3 bg-cpaas-100 rounded-lg mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <a href={useCase.link} className="inline-flex items-center text-cpaas-600 font-medium hover:text-cpaas-700">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-cpaas-500 to-blue-700 text-white rounded-xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Not seeing your industry?</h3>
              <p className="text-white/90 text-lg">
                Our platform is customizable for any communication need. Talk to our experts about your specific requirements.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center md:justify-end">
              <button className="bg-white text-cpaas-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
