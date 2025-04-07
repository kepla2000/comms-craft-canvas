
import React from 'react';
import { Code, Globe, Lock, Shield, Zap, Smartphone, MessageCircle, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-cpaas-500" />,
    title: 'High Performance',
    description: 'Low latency communication APIs built for scale, with 99.99% uptime guarantee.'
  },
  {
    icon: <Globe className="h-6 w-6 text-cpaas-500" />,
    title: 'Global Reach',
    description: 'Connect with customers across 190+ countries with localized services.'
  },
  {
    icon: <Lock className="h-6 w-6 text-cpaas-500" />,
    title: 'Enterprise Security',
    description: 'GDPR compliant with end-to-end encryption and secure authentication.'
  },
  {
    icon: <Code className="h-6 w-6 text-cpaas-500" />,
    title: 'Developer Friendly',
    description: 'Comprehensive SDKs for all major programming languages and platforms.'
  },
  {
    icon: <Shield className="h-6 w-6 text-cpaas-500" />,
    title: 'Advanced Compliance',
    description: 'Built-in compliance with telecommunication regulations worldwide.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-cpaas-500" />,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into your communication channels performance.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-cpaas-500" />,
    title: 'Omnichannel Support',
    description: 'Seamlessly switch between messaging, voice and video channels.'
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-cpaas-500" />,
    title: 'Intelligent Routing',
    description: 'Smart message and call routing based on availability and skills.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Communication</h2>
          <p className="text-lg text-gray-600">
            Our comprehensive platform provides all the tools you need to build powerful communication experiences for your users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 bg-cpaas-100 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
