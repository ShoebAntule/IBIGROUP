import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Security First",
      description: "We prioritize your security with cutting-edge solutions and proactive protection."
    },
    {
      icon: <Target className="w-12 h-12 text-cyan-500" />,
      title: "Innovation",
      description: "Constantly evolving our technology to stay ahead of emerging threats."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Client Focus",
      description: "Dedicated to understanding and meeting our clients' unique security needs."
    },
    {
      icon: <Award className="w-12 h-12 text-cyan-500" />,
      title: "Excellence",
      description: "Committed to delivering exceptional service and reliable protection."
    }
  ];

  return (
    <div id="about-us" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About IBI</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Leading the industry in AI-powered cybersecurity solutions, IBI has been protecting enterprises 
            and organizations worldwide for over a decade with innovative security technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-850 transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg mb-6">
              To empower organizations with advanced cybersecurity solutions that protect their digital assets 
              and enable their growth in an increasingly connected world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                <p className="text-gray-400">Security Experts</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white mb-2">20+</h4>
                <p className="text-gray-400">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;