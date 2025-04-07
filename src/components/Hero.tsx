
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageSquare, Phone, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cpaas-100/70 to-white -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cpaas-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cpaas-200/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Communication API</span>
                <br />
                <span className="text-cpaas-500">Without Limits</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Build powerful communication experiences with our suite of APIs for messaging, voice, video, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cpaas-500 hover:bg-cpaas-600 text-white px-8">
                  Start Building
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-cpaas-300 text-gray-700">
                  View Documentation
                </Button>
              </div>
              
              <div className="mt-10 flex items-center text-sm text-gray-500">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                      {i}
                    </div>
                  ))}
                </div>
                <span>Over 5,000+ developers trust our platform</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative bg-white rounded-xl shadow-xl p-6 md:ml-8 animate-float">
              <div className="absolute -top-3 -left-3 bg-cpaas-500 rounded-lg p-2 shadow-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Messaging API</h3>
              <p className="text-gray-600 mb-4">Send and receive messages across SMS, WhatsApp, Facebook Messenger, and more from a single API.</p>
              <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                <code className="text-gray-800">
{`// Send a message with a single API call
await client.messages.create({
  to: '+1234567890',
  from: '+1098765432',
  body: 'Hello from CommConnect!'
});`}
                </code>
              </pre>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform translate-y-8 bg-white rounded-xl shadow-xl p-6 w-5/6 z-10 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -top-3 -left-3 bg-green-500 rounded-lg p-2 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Voice API</h3>
              <p className="text-gray-600">Make and receive calls, build IVR systems, and add voice capabilities to your applications.</p>
            </div>
            
            <div className="absolute bottom-0 left-8 transform translate-y-12 bg-white rounded-xl shadow-xl p-6 w-3/4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute -top-3 -left-3 bg-purple-500 rounded-lg p-2 shadow-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Video API</h3>
              <p className="text-gray-600">Embed real-time video communication in your applications with just a few lines of code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
