
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Phone, ShieldCheck, Users, Building, ShoppingCart, Headphones, Globe } from 'lucide-react';

const Solutions = () => {
  const industrySolutions = [
    {
      icon: Building,
      industry: "Financial Services",
      description: "Secure communications for banking, payment verification and financial alerts.",
      useCases: [
        "Secure transaction notifications",
        "Fraud alerts and verification",
        "Account updates and balance notifications",
        "Appointment scheduling"
      ]
    },
    {
      icon: ShoppingCart,
      industry: "Retail & E-commerce",
      description: "Enhance customer experience with order updates and personalized messaging.",
      useCases: [
        "Order confirmations and delivery updates",
        "Abandoned cart reminders",
        "Promotional campaigns",
        "Customer feedback collection"
      ]
    },
    {
      icon: Headphones,
      industry: "Customer Service",
      description: "Streamline support with efficient communication channels.",
      useCases: [
        "Customer support messaging",
        "Virtual assistants and chatbots",
        "Call deflection",
        "Case management notifications"
      ]
    },
    {
      icon: Globe,
      industry: "Travel & Hospitality",
      description: "Keep travelers informed with real-time updates and assistance.",
      useCases: [
        "Booking confirmations",
        "Travel itinerary updates",
        "Check-in reminders",
        "Emergency notifications"
      ]
    }
  ];

  const businessSolutions = [
    {
      title: "Customer Engagement",
      icon: MessageSquare,
      description: "Build stronger relationships with your customers through personalized communication.",
      features: [
        "Automated notifications",
        "Marketing campaigns",
        "Two-way conversations",
        "Customer feedback"
      ]
    },
    {
      title: "Contact Center Solutions",
      icon: Phone,
      description: "Enhance your contact center with voice, messaging, and automation capabilities.",
      features: [
        "IVR systems",
        "Call routing",
        "Agent dashboard",
        "Analytics and reporting"
      ]
    },
    {
      title: "Authentication & Security",
      icon: ShieldCheck,
      description: "Protect user accounts and verify identities with secure authentication methods.",
      features: [
        "Two-factor authentication",
        "Phone verification",
        "Fraud prevention",
        "Privacy protection"
      ]
    },
    {
      title: "Team Collaboration",
      icon: Users,
      description: "Enable seamless communication within your organization and with partners.",
      features: [
        "Video conferencing",
        "Team messaging",
        "File sharing",
        "Virtual meetings"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Communication Solutions</h1>
              <p className="text-xl text-gray-600">
                Tailored solutions to solve communication challenges across industries and use cases.
              </p>
            </div>
            
            {/* Business Solutions */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Business Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {businessSolutions.map((solution, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 p-6">
                    <div className="bg-cpaas-50 p-3 rounded-full w-fit mb-4">
                      <solution.icon className="h-6 w-6 text-cpaas-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-5">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-cpaas-500 mr-2"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Industry Solutions */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industrySolutions.map((solution, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    <div className="p-8 md:w-1/3 bg-gradient-to-br from-cpaas-500 to-cpaas-600 text-white flex flex-col justify-center items-center text-center">
                      <solution.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-xl font-bold">{solution.industry}</h3>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-gray-600 mb-5">{solution.description}</p>
                      <h4 className="font-medium mb-3">Popular Use Cases:</h4>
                      <ul className="space-y-2 mb-6">
                        {solution.useCases.map((useCase, uIndex) => (
                          <li key={uIndex} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-cpaas-500 mr-2"></div>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-2" variant="outline">
                        Explore Solution <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team of experts can help you design and implement the perfect communication solution for your specific needs.
              </p>
              <Button size="lg">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
