
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: "Messaging APIs",
      description: "Connect with your customers on their preferred channels.",
      products: [
        {
          name: "SMS API",
          description: "Send and receive text messages globally with high deliverability.",
          features: ["Global coverage", "Two-way messaging", "Delivery reports", "Unicode support"]
        },
        {
          name: "WhatsApp API",
          description: "Engage customers through rich WhatsApp business messaging.",
          features: ["Rich media support", "Message templates", "Quick replies", "Business profile"]
        },
        {
          name: "RCS Business Messaging",
          description: "The next evolution of SMS with rich features and branding.",
          features: ["Rich cards", "Suggested replies", "Brand verification", "Analytics"]
        }
      ]
    },
    {
      title: "Voice & Video",
      description: "Create seamless voice and video experiences.",
      products: [
        {
          name: "Voice API",
          description: "Build voice calling into your applications with clear quality.",
          features: ["Programmable calls", "IVR capabilities", "Call recording", "Text-to-speech"]
        },
        {
          name: "Video API",
          description: "Enable face-to-face interactions in your applications.",
          features: ["HD video quality", "Screen sharing", "Room management", "Recording options"]
        },
        {
          name: "Number Masking",
          description: "Protect privacy with temporary phone number proxies.",
          features: ["Anonymous communication", "Customizable rules", "Call recording", "Analytics"]
        }
      ]
    },
    {
      title: "Authentication",
      description: "Verify and protect user identities securely.",
      products: [
        {
          name: "Verification API",
          description: "Secure user verification through SMS, voice, and email.",
          features: ["OTP generation", "Multiple channels", "Fraud prevention", "Customizable templates"]
        },
        {
          name: "Two-Factor Authentication",
          description: "Add an extra layer of security to user logins.",
          features: ["Multiple factors", "API integration", "Self-service portal", "Audit logs"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Communication Products & APIs</h1>
              <p className="text-xl text-gray-600">
                Powerful, flexible APIs to add messaging, voice, and verification capabilities to your applications.
              </p>
            </div>
            
            {productCategories.map((category, index) => (
              <div key={index} className="mb-20">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, pIndex) => (
                    <div key={pIndex} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-cpaas-600">{product.name}</h3>
                        <p className="text-gray-600 mb-5">{product.description}</p>
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-cpaas-500 mr-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-2">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
