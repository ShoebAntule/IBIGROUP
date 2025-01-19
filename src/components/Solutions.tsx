import React from 'react';
import { Shield, Search, BarChart as ChartBar } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Shield className="w-16 h-16 text-blue-500" />,
      title: "Integrated Security",
      description: "Comprehensive security solutions combining physical and digital protection with AI-driven monitoring.",
      features: ["Real-time threat detection", "Automated response", "24/7 monitoring"]
    },
    {
      icon: <Search className="w-16 h-16 text-cyan-500" />,
      title: "Cyber Forensics",
      description: "Advanced digital forensics and investigation services to track and analyze security incidents.",
      features: ["Incident investigation", "Threat hunting", "Evidence collection"]
    },
    {
      icon: <ChartBar className="w-16 h-16 text-blue-500" />,
      title: "Risk Consulting",
      description: "Data-driven risk assessment and management strategies for enterprise security.",
      features: ["Risk assessment", "Compliance monitoring", "Security planning"]
    }
  ];

  return (
    <div id="solutions" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive security solutions powered by advanced technology and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-400 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;