
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, Copy, Check } from 'lucide-react';

const ApiPlayground = () => {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  
  const apiSample = `// Install SDK: npm install @commconnect/sdk

import { CommConnect } from '@commconnect/sdk';

// Initialize client
const client = new CommConnect({
  apiKey: 'YOUR_API_KEY'
});

// Send a simple SMS
async function sendMessage() {
  try {
    const result = await client.messages.create({
      to: '+1234567890',
      from: '+0987654321',
      body: 'Hello from CommConnect!'
    });
    
    console.log('Message sent!', result.id);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const simulateSendMessage = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <section id="api-playground" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our API</h2>
          <p className="text-lg text-gray-600">
            See how easy it is to integrate our communication APIs into your application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Code Example */}
          <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-3">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm">Send SMS Example</div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white"
                onClick={copyToClipboard}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <pre className="p-6 overflow-auto text-gray-300 text-sm">
              <code>{apiSample}</code>
            </pre>
          </div>
          
          {/* Interactive Demo */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl font-semibold flex items-center">
                <MessageSquare className="text-cpaas-500 mr-2" />
                Send a Test Message
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cpaas-500 focus:border-cpaas-500 outline-none transition"
                  defaultValue="+1 (555) 000-0000"
                  readOnly
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cpaas-500 focus:border-cpaas-500 outline-none transition"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cpaas-500 focus:border-cpaas-500 outline-none transition min-h-[120px]"
                  defaultValue="Hello from CommConnect! This is a test message from the API playground."
                />
              </div>
              
              <Button 
                className="w-full bg-cpaas-500 hover:bg-cpaas-600 text-white"
                onClick={simulateSendMessage}
                disabled={sending || sent}
              >
                {sending ? (
                  <>
                    <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Test Message
                  </>
                )}
              </Button>
              
              <div className="mt-4 text-sm text-gray-500 text-center">
                No real message will be sent. This is a simulation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPlayground;
