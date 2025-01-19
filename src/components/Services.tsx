import React from 'react';
import { Shield, Mail, Monitor, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Network Defense',
      description: 'AI-driven threat detection and real-time monitoring for comprehensive network protection.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
    },
    {
      icon: <Mail className="w-12 h-12 text-cyan-500" />,
      title: 'Email Security',
      description: 'Advanced phishing prevention and spam filtering with machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-500" />,
      title: 'Endpoint Protection',
      description: 'Secure all endpoints with AI-powered threat detection and automated response systems.',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80'
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: 'Cloud Security',
      description: 'Secure cloud environments with continuous compliance monitoring and threat prevention.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div id="services" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive cybersecurity solutions powered by cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 hover:bg-gray-850 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;