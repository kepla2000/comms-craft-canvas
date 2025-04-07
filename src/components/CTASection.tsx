
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="bg-cpaas-500 rounded-3xl overflow-hidden relative">
          {/* Background decoration elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white"></div>
            <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full bg-white"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that are building better customer experiences with our communication APIs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/get-started">
                <Button size="lg" className="bg-white text-cpaas-600 hover:bg-gray-100 px-8">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            
            <p className="mt-6 text-white/70 text-sm">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
