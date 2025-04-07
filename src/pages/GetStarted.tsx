import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, CircleHelp, Layers, Loader2, MessageSquare, Phone, Video } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const registerSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  phone: z.string().optional(),
  needs: z.enum(['sms', 'voice', 'video', 'verification', 'whatsapp', 'other']),
  requirements: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type RegisterValues = z.infer<typeof registerSchema>;

const GetStarted = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      needs: 'sms',
      requirements: '',
      termsAccepted: false as any,
    },
  });

  const onSubmit = (values: RegisterValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration successful!",
        description: "We'll be in touch shortly to get you started.",
      });
      
      // Reset form
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          <section className="py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with CommConnect</h1>
              <p className="text-xl text-gray-600">
                Join thousands of businesses building better communication experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-cpaas-50 flex items-center justify-center mb-4">
                    <CircleHelp className="h-6 w-6 text-cpaas-500" />
                  </div>
                  <CardTitle>14-Day Free Trial</CardTitle>
                  <CardDescription>
                    Explore all features with full access to our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>No credit card required</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Full access to all APIs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>$10 free credit included</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Technical support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white lg:col-span-2">
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                  <CardDescription>
                    Fill out the form below to get started with CommConnect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Inc." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Product Manager" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="needs"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>What are you primarily interested in?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                              >
                                <div className="flex items-center space-x-2 bg-white p-3 border border-gray-200 rounded-md">
                                  <RadioGroupItem value="sms" id="sms" />
                                  <label htmlFor="sms" className="flex items-center cursor-pointer">
                                    <MessageSquare className="h-4 w-4 mr-2 text-cpaas-500" />
                                    <span>SMS API</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 border border-gray-200 rounded-md">
                                  <RadioGroupItem value="voice" id="voice" />
                                  <label htmlFor="voice" className="flex items-center cursor-pointer">
                                    <Phone className="h-4 w-4 mr-2 text-cpaas-500" />
                                    <span>Voice API</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 border border-gray-200 rounded-md">
                                  <RadioGroupItem value="video" id="video" />
                                  <label htmlFor="video" className="flex items-center cursor-pointer">
                                    <Video className="h-4 w-4 mr-2 text-cpaas-500" />
                                    <span>Video API</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 border border-gray-200 rounded-md">
                                  <RadioGroupItem value="verification" id="verification" />
                                  <label htmlFor="verification" className="flex items-center cursor-pointer">
                                    <CheckCircle2 className="h-4 w-4 mr-2 text-cpaas-500" />
                                    <span>Verification</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 border border-gray-200 rounded-md">
                                  <RadioGroupItem value="whatsapp" id="whatsapp" />
                                  <label htmlFor="whatsapp" className="flex items-center cursor-pointer">
                                    <Layers className="h-4 w-4 mr-2 text-cpaas-500" />
                                    <span>WhatsApp</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 border border-gray-200 rounded-md">
                                  <RadioGroupItem value="other" id="other" />
                                  <label htmlFor="other" className="cursor-pointer">
                                    Other
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="requirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell us about your requirements (optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your project or use case..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the <a href="#" className="text-cpaas-600 hover:underline">Terms of Service</a> and <a href="#" className="text-cpaas-600 hover:underline">Privacy Policy</a>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          'Start Your Free Trial'
                        )}
                      </Button>
                      
                      <p className="text-sm text-center text-gray-500">
                        Already have an account? <Link to="/login" className="text-cpaas-600 hover:underline">Sign in</Link>
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
