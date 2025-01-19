import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Revolutionizing Cyber Defense with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Protecting Enterprises with Autonomous Threat Detection and Intelligent Responses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-blue-500 text-white rounded-lg font-medium hover:bg-blue-500/10 transition-all">
              Request a Demo
            </button>
          </div>
        </div>
        
        {/* Abstract Graphic */}
        <div className="lg:w-1/2 relative">
          <div className="w-full h-[400px] bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-2xl opacity-75 shadow-2xl transform hover:scale-105 transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;