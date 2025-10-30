import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Users, TrendingUp, Clock, Shield, Star, CheckCircle, ArrowRight, Menu, X, BookOpen, Brain, BarChart3, Bell, Zap, Award, Mail, Phone, Building2, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDemoRequest = (e) => {
    e.preventDefault();
    
    // Email functionality
    const mailtoLink = `mailto:innenta.solutions@gmail.com?subject=Demo Request from ${formData.institution}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AInstitution: ${formData.institution}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setShowDemoForm(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', institution: '', phone: '', message: '' });
    }, 2000);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in edusynQ. Can you provide more information?");
    window.open(`https://wa.me/94774256402?text=${message}`, '_blank');
  };

  const handleTrialStart = (planName) => {
    setShowDemoForm(true);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-yellow-500" />,
      title: "AI Quiz Generation",
      description: "Upload module content or CSV files and let AI automatically generate questions and answers for instant quiz creation"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: "Skill Level Assessment",
      description: "Students receive instant skill level ratings (LOW/MEDIUM/HIGH) with detailed analysis of strengths and weaknesses"
    },
    {
      icon: <Bell className="w-8 h-8 text-yellow-500" />,
      title: "Performance Analytics",
      description: "Professors can track student marks, quiz duration, attempt counts, and identify learning barriers in real-time"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
      title: "Personalized Resources",
      description: "Students get customized study guidelines, tutorial links, and resources based on their quiz performance and skill gaps"
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, text: "AI generates unlimited quiz questions automatically" },
    { icon: <Clock className="w-6 h-6" />, text: "Instant skill assessment (LOW/MEDIUM/HIGH)" },
    { icon: <Users className="w-6 h-6" />, text: "Complete analytics for professors and students" },
    { icon: <Zap className="w-6 h-6" />, text: "Personalized study resources and guidelines" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal, Metro High School",
      content: "edusynQ helped us identify struggling students 3 weeks earlier than traditional methods. Our pass rates improved by 28%.",
      rating: 5
    },
    {
      name: "Prof. Michael Chen",
      role: "Computer Science Dept., State University",
      content: "The personalized feedback system is incredible. Students are more engaged, and I can focus my time where it's needed most.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Academic Coordinator",
      content: "Integration was seamless, and the AI predictions are remarkably accurate. It's transformed how we approach student support.",
      rating: 5
    }
  ];

    const pricing = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    originalPrice: "$49",
    badge: "🚀 Launch Offer",
    description: "Perfect for small schools and pilot programs",
    features: [
      "Up to 30 students",
      "25 AI quiz generations/month",
      "Basic skill assessment",
      "Student performance tracking",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    originalPrice: "$129",
    badge: "Most Popular",
    description: "Ideal for medium-sized institutions",
    features: [
      "Up to 100 students",
      "80 AI quiz generations/month",
      "Advanced skill analysis (LOW/MEDIUM/HIGH)",
      "Complete analytics dashboard",
      "Personalized study resources",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    badge: "Contact Sales",
    description: "For large institutions and districts",
    features: [
      "Unlimited students",
      "Unlimited AI quiz generations",
      "Advanced analytics & reporting",
      "Multiple professor accounts",
      "Custom integrations & API access",
      "24/7 dedicated support"
    ],
    popular: false
  }
];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-yellow-500/30 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 py-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent pb-1" style={{ lineHeight: '1.5', display: 'inline-block' }}>
            edusynQ
          </h1>
        </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-yellow-400 transition-colors">Features</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-yellow-400 transition-colors">Benefits</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</button>
              <button 
                onClick={() => setShowDemoForm(true)}
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
              >
                Contact Us
              </button>
            </div>

            <button 
              className="md:hidden text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400">Features</button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400">Benefits</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400">Testimonials</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400">Pricing</button>
              <button 
                onClick={() => setShowDemoForm(true)}
                className="w-full text-left px-3 py-2 bg-yellow-500 text-black rounded-lg font-semibold"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Powered by Machine Learning
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transform Student Learning with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                edusynQ automatically generates AI-powered quizzes, analyzes student performance, and provides personalized skill assessments with study resources for both students and professors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => setShowDemoForm(true)}
                  className="bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center text-lg font-bold"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button 
                onClick={() => scrollToSection('pricing')}
                className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center text-lg font-bold"
              >
                Choose Plan
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl shadow-2xl shadow-yellow-500/20 p-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 mb-4">
                  <h3 className="text-black font-bold text-lg">Student Performance Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Math Progress</span>
                    <div className="w-32 h-3 bg-gray-700 rounded-full">
                      <div className="w-24 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Science Progress</span>
                    <div className="w-32 h-3 bg-gray-700 rounded-full">
                      <div className="w-20 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">English Progress</span>
                    <div className="w-32 h-3 bg-gray-700 rounded-full">
                      <div className="w-28 h-3 bg-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center">
                      <Bell className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-yellow-400 font-medium">Alert: Student needs help in Algebra</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">The Challenge in Education Today</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional learning management systems fail to provide the personalized attention every student needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Manual Quiz Creation</h3>
              <p className="text-gray-400">Professors spend hours manually creating questions and answers for each module and assessment.</p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-yellow-500 transform rotate-180" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">No Skill Assessment</h3>
              <p className="text-gray-400">Students get basic marks but no detailed analysis of their skill levels or personalized improvement guidance.</p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Limited Analytics</h3>
              <p className="text-gray-400">Professors can't track detailed student performance metrics like quiz duration, attempt patterns, or learning barriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Features Section */}
      <section id="features" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How edusynQ Solves This</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform transforms education with intelligent insights and personalized learning experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Quiz Generation & Assessment</h3>
              <p className="text-lg text-gray-400 mb-8">
                Professors can upload lecture content, CSV files, or manually add module names. Our AI automatically generates relevant questions and answers, while students receive instant skill assessments and personalized study resources.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Automated Quiz Creation</h4>
                    <p className="text-gray-400">AI generates questions from any module content or CSV upload</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Instant Skill Assessment</h4>
                    <p className="text-gray-400">Students get LOW/MEDIUM/HIGH skill levels with detailed feedback</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Complete Analytics</h4>
                    <p className="text-gray-400">Track marks, quiz duration, attempts, and learning barriers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl p-8">
              <div className="bg-black border border-yellow-500/20 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">Student Dashboard Preview</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">Quiz Score</span>
                    <span className="text-2xl font-bold text-yellow-500">85/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">Skill Level</span>
                    <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">HIGH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">Time Taken</span>
                    <span className="text-sm text-gray-400">12 min 34 sec</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-sm font-medium text-white mb-2">Recommended Resources:</div>
                    <div className="space-y-1">
                      <div className="text-xs text-yellow-400 hover:underline cursor-pointer">Advanced Algorithms Tutorial</div>
                      <div className="text-xs text-yellow-400 hover:underline cursor-pointer">Data Structures Video Guide</div>
                      <div className="text-xs text-yellow-400 hover:underline cursor-pointer">Practice Problems Set</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-center justify-center group-hover:border-yellow-500 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Why Institutions Choose edusynQ</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Join thousands of educators who have transformed their teaching with our AI-powered insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-black">
                  {benefit.icon}
                </div>
                <p className="text-black font-semibold text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">91%</div>
                <p className="text-gray-900">Students find feedback useful</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">78%</div>
                <p className="text-gray-900">Show improvement in subsequent quizzes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">85%</div>
                <p className="text-gray-900">Prefer edusynQ over traditional LMS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple 3-Step Process</h2>
            <p className="text-xl text-gray-400">Get started with edusynQ in minutes, not months</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Upload Content & Set Parameters</h3>
              <p className="text-gray-400 mb-6">Professors register, login, and upload lecture content via CSV or manual entry. Set module names and question counts for AI generation.</p>
              <div className="bg-black border border-yellow-500/20 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Upload options:</div>
                <div className="flex justify-center space-x-4 text-sm font-medium text-yellow-400">
                  <span>CSV File</span>
                  <span>•</span>
                  <span>Manual Entry</span>
                  <span>•</span>
                  <span>Module Upload</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Students Take AI-Generated Quizzes</h3>
              <p className="text-gray-400 mb-6">Students login and attempt automatically generated quizzes. System tracks time, attempts, and performance in real-time.</p>
              <div className="bg-black border border-yellow-500/20 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Tracking includes:</div>
                <div className="space-y-1 text-sm text-yellow-400">
                  <div>Quiz duration & attempts</div>
                  <div>Correct/incorrect answers</div>
                  <div>Real-time scoring</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Skill Levels & Resources</h3>
              <p className="text-gray-400 mb-6">Students receive skill assessments (LOW/MEDIUM/HIGH), detailed feedback, and personalized study resources for exam preparation.</p>
              <div className="bg-black border border-yellow-500/20 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Students receive:</div>
                <div className="space-y-1 text-sm text-yellow-400">
                  <div>Skill level rating</div>
                  <div>Study guidelines</div>
                  <div>Tutorial links & resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Educators Are Saying</h2>
            <p className="text-xl text-gray-400">Join thousands of satisfied educators worldwide</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-400">Flexible pricing for institutions of all sizes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
  {pricing.map((plan, index) => (
    <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 transform scale-105 shadow-2xl shadow-yellow-500/20' : 'bg-black border-2 border-yellow-500/20'} hover:shadow-xl transition-all`}>
      {plan.badge && (
        <div className="text-center mb-4">
          <span className={`${plan.popular ? 'bg-black text-yellow-400' : 'bg-yellow-500/20 text-yellow-400'} px-4 py-1 rounded-full text-sm font-medium`}>
            {plan.badge}
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
        
        {/* Show strikethrough original price if exists */}
        {plan.originalPrice && (
          <div className="mb-1">
            <span className={`text-xl line-through ${plan.popular ? 'text-gray-800' : 'text-gray-500'}`}>
              {plan.originalPrice}
            </span>
          </div>
        )}
        
        <div className="mb-4">
          <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
          <span className={`text-lg ${plan.popular ? 'text-gray-900' : 'text-gray-400'}`}>{plan.period}</span>
        </div>
        
        <p className={`mb-8 ${plan.popular ? 'text-gray-900' : 'text-gray-400'}`}>{plan.description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start space-x-3">
            <CheckCircle className={`w-5 h-5 mt-0.5 ${plan.popular ? 'text-black' : 'text-yellow-500'}`} />
            <span className={plan.popular ? 'text-black' : 'text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => handleTrialStart(plan.name)}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
          plan.popular 
            ? 'bg-black text-yellow-400 hover:bg-gray-900' 
            : 'bg-yellow-500 text-black hover:bg-yellow-400'
        }`}
      >
        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
      </button>
    </div>
  ))}
</div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                FERPA Compliant
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                99.9% Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

{/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about edusynQ</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-3">How does the AI quiz generation work?</h3>
              <p className="text-gray-400">Professors upload module content, CSV files, or manually enter topics. Our AI analyzes the content and automatically generates relevant questions with answers. You can set the number of questions needed, and the system creates them instantly.</p>
            </div>

            <div className="bg-gray-900 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-3">What skill levels do students receive?</h3>
              <p className="text-gray-400">After completing quizzes, students receive skill assessments rated as LOW, MEDIUM, or HIGH based on their performance. They also get detailed feedback showing correct/incorrect answers with explanations and personalized study resources.</p>
            </div>

            <div className="bg-gray-900 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-3">What analytics do professors get?</h3>
              <p className="text-gray-400">Professors can view comprehensive student analytics including marks, skill levels, quiz duration, number of attempts, time taken per question, and identify learning barriers across different modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Student Learning?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Join thousands of educators who have already improved student outcomes with edusynQ. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => handleTrialStart('Professional')}
              className="bg-black text-yellow-400 px-8 py-4 rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 flex items-center justify-center text-lg font-bold"
            >
              Start Free 14-Day Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => setShowDemoForm(true)}
              className="border-2 border-black text-black px-8 py-4 rounded-xl hover:bg-black hover:text-yellow-400 transition-all flex items-center justify-center text-lg font-bold"
            >
              Schedule Demo Call
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-900">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Full access to all features
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Setup support included
            </div>
          </div>
        </div>
      </section>

            {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section - Centered on mobile */}
            <div className="text-center md:text-left">
             <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start py-2">
              <h2 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent pb-1" style={{ lineHeight: '1.5', display: 'inline-block' }}>
                edusynQ
              </h2>
            </div>
              <p className="text-gray-400 mb-4">
                AI-powered student progress tracking and personalized learning recommendations for modern education.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-10 h-10 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:border-yellow-500 cursor-pointer transition-all"
                  title="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-yellow-400" />
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:innenta.solutions@gmail.com'}
                  className="w-10 h-10 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:border-yellow-500 cursor-pointer transition-all"
                  title="Email us"
                >
                  <Mail className="w-5 h-5 text-yellow-400" />
                </button>
              </div>
            </div>

            {/* Product Section - Centered on mobile */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-yellow-400 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-yellow-400 transition-colors">Pricing</button></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Company Section - Centered on mobile */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Support Section - Centered on mobile */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
                <li><button onClick={() => setShowDemoForm(true)} className="hover:text-yellow-400 transition-colors">Contact Support</button></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">System Status</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer - Centered on mobile */}
          <div className="border-t border-yellow-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 edusynQ. All rights reserved.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-400">
                <span>Powered by Innenta Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Demo Form Modal */}
      {showDemoForm && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border-2 border-yellow-500 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-yellow-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-yellow-400">Get in Touch</h3>
              <button 
                onClick={() => setShowDemoForm(false)}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleDemoRequest} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-yellow-400 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 bg-black border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-yellow-400 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@university.edu" 
                    className="w-full px-4 py-3 bg-black border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-yellow-400 mb-2">Institution Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({...formData, institution: e.target.value})}
                    placeholder="ABC University" 
                    className="w-full px-4 py-3 bg-black border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-yellow-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 123-4567" 
                    className="w-full px-4 py-3 bg-black border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-yellow-400 mb-2">Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your requirements..." 
                    rows="3"
                    className="w-full px-4 py-3 bg-black border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <button 
                    type="submit" 
                    className="flex-1 bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </button>
                  <button 
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">We'll contact you within 24 hours to discuss your needs.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;