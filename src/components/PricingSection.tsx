
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type PricingPeriod = 'monthly' | 'annual';

const PricingSection = () => {
  const [period, setPeriod] = useState<PricingPeriod>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and startups',
      monthlyPrice: '$49',
      annualPrice: '$39',
      features: [
        'Up to 1,000 SMS messages',
        '100 voice minutes',
        '10 hours of video',
        'Basic analytics',
        'Email support',
        'Single API key'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Professional',
      description: 'For growing businesses with advanced needs',
      monthlyPrice: '$99',
      annualPrice: '$79',
      features: [
        'Up to 10,000 SMS messages',
        '1,000 voice minutes',
        '100 hours of video',
        'Advanced analytics',
        'Priority support',
        'Multiple API keys',
        'Number masking',
        'Webhook integrations'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonVariant: 'default' as const
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: [
        'Unlimited messages',
        'Unlimited voice minutes',
        'Unlimited video hours',
        'Dedicated account manager',
        '24/7 phone support',
        'SLA guarantees',
        'Custom integrations',
        'On-premise deployment options',
        'Advanced security features'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that works best for your needs, with no hidden fees.
          </p>
          
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                period === 'monthly' 
                ? 'bg-white shadow-sm text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition flex items-center ${
                period === 'annual' 
                ? 'bg-white shadow-sm text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annual
              <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl overflow-hidden ${
                plan.popular 
                  ? 'bg-white border-2 border-cpaas-500 shadow-xl transform md:scale-105 z-10' 
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-cpaas-500 text-white text-xs font-bold py-1 px-4 transform translate-x-8 rotate-45">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {period === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                {plan.monthlyPrice !== 'Custom' && (
                  <span className="text-gray-500 ml-2">per month</span>
                )}
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant} 
                className={`w-full ${plan.popular ? 'bg-cpaas-500 hover:bg-cpaas-600 text-white' : ''}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
