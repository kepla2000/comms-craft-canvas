
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Search, Book, Code, FileText, BookOpen, MessageSquare, Phone, Video, CheckCircle, Copy, Terminal } from 'lucide-react';

const Documentation = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          <section className="py-16">
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-6">Documentation</h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to integrate and build with CommConnect APIs
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-cpaas-500 focus:border-cpaas-500"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Quick Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition">
                  <Book className="h-6 w-6 text-cpaas-500 mb-2" />
                  <span className="text-gray-800 text-sm text-center">Quick Start</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition">
                  <Code className="h-6 w-6 text-cpaas-500 mb-2" />
                  <span className="text-gray-800 text-sm text-center">API Reference</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition">
                  <FileText className="h-6 w-6 text-cpaas-500 mb-2" />
                  <span className="text-gray-800 text-sm text-center">Guides</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition">
                  <BookOpen className="h-6 w-6 text-cpaas-500 mb-2" />
                  <span className="text-gray-800 text-sm text-center">SDK Docs</span>
                </div>
              </div>
              
              <Tabs defaultValue="getting-started" className="w-full" onValueChange={setActiveCategory}>
                <TabsList className="w-full flex overflow-x-auto space-x-2 bg-gray-100 p-1 mb-8">
                  <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                  <TabsTrigger value="sms-api">SMS API</TabsTrigger>
                  <TabsTrigger value="voice-api">Voice API</TabsTrigger>
                  <TabsTrigger value="video-api">Video API</TabsTrigger>
                  <TabsTrigger value="verification">Verification</TabsTrigger>
                  <TabsTrigger value="sdks">SDKs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="getting-started" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Getting Started with CommConnect</h2>
                  <p className="text-gray-600 mb-6">
                    Follow these simple steps to start building with CommConnect APIs.
                  </p>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                    <div className="p-5 border-b border-gray-200">
                      <h3 className="text-xl font-medium">1. Create an account</h3>
                      <p className="text-gray-600 mt-2">Sign up for CommConnect and get your API credentials</p>
                    </div>
                    <div className="p-5 border-b border-gray-200">
                      <h3 className="text-xl font-medium">2. Install the SDK</h3>
                      <p className="text-gray-600 mt-2">Choose your preferred programming language and install our SDK</p>
                      <div className="mt-4 bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">npm install command</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code className="text-sm font-mono">npm install @commconnect/sdk</code>
                      </div>
                    </div>
                    <div className="p-5 border-b border-gray-200">
                      <h3 className="text-xl font-medium">3. Initialize the client</h3>
                      <p className="text-gray-600 mt-2">Configure the SDK with your API credentials</p>
                      <div className="mt-4 bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">JavaScript</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre className="text-sm font-mono overflow-x-auto">
{`const CommConnect = require('@commconnect/sdk');

const client = new CommConnect({
  apiKey: 'your_api_key',
  apiSecret: 'your_api_secret'
});`}
                        </pre>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-medium">4. Make your first API call</h3>
                      <p className="text-gray-600 mt-2">Send an SMS message using the CommConnect API</p>
                      <div className="mt-4 bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">JavaScript</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre className="text-sm font-mono overflow-x-auto">
{`client.messages.create({
  from: '+1234567890',
  to: '+1098765432',
  body: 'Hello from CommConnect!'
})
.then(message => console.log('Message sent with ID:', message.id))
.catch(error => console.error('Error:', error));`}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <Terminal className="h-8 w-8 text-cpaas-500 mb-3" />
                      <h3 className="text-lg font-medium mb-2">API Reference</h3>
                      <p className="text-gray-600 mb-4">Comprehensive API documentation with examples</p>
                      <Button variant="outline" className="w-full">View Reference</Button>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <BookOpen className="h-8 w-8 text-cpaas-500 mb-3" />
                      <h3 className="text-lg font-medium mb-2">Tutorials</h3>
                      <p className="text-gray-600 mb-4">Step-by-step guides for common use cases</p>
                      <Button variant="outline" className="w-full">View Tutorials</Button>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <MessageSquare className="h-8 w-8 text-cpaas-500 mb-3" />
                      <h3 className="text-lg font-medium mb-2">Sample Apps</h3>
                      <p className="text-gray-600 mb-4">Example applications using our APIs</p>
                      <Button variant="outline" className="w-full">View Samples</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sms-api" className="mt-6">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="h-8 w-8 text-cpaas-500 mr-3" />
                    <h2 className="text-2xl font-bold">SMS API Documentation</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our SMS API allows you to send and receive text messages globally with high deliverability.
                  </p>
                  
                  {/* Content would go here */}
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-500">SMS API documentation content would be displayed here.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="voice-api" className="mt-6">
                  <div className="flex items-center mb-6">
                    <Phone className="h-8 w-8 text-cpaas-500 mr-3" />
                    <h2 className="text-2xl font-bold">Voice API Documentation</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Build voice calling into your applications with clear quality and global reach.
                  </p>
                  
                  {/* Content would go here */}
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-500">Voice API documentation content would be displayed here.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="video-api" className="mt-6">
                  <div className="flex items-center mb-6">
                    <Video className="h-8 w-8 text-cpaas-500 mr-3" />
                    <h2 className="text-2xl font-bold">Video API Documentation</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Enable face-to-face interactions in your applications with our Video API.
                  </p>
                  
                  {/* Content would go here */}
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-500">Video API documentation content would be displayed here.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="verification" className="mt-6">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-cpaas-500 mr-3" />
                    <h2 className="text-2xl font-bold">Verification API Documentation</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Secure user verification through SMS, voice, and email channels.
                  </p>
                  
                  {/* Content would go here */}
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-500">Verification API documentation content would be displayed here.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="sdks" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">SDK Documentation</h2>
                  <p className="text-gray-600 mb-6">
                    Our SDKs make it easy to integrate CommConnect APIs in your preferred programming language.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">JavaScript</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">Python</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">Java</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">PHP</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">Ruby</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">.NET</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">Go</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="font-bold mb-2">Swift</div>
                      <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
