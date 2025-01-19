import React from 'react';
import { Shield, Users, Clock, ShieldCheck } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      value: "99.9%",
      label: "Threat Detection Rate",
      suffix: "",
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      value: "500",
      label: "Enterprise Clients",
      suffix: "+",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      value: "24/7",
      label: "Monitoring",
      suffix: "",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-cyan-500" />,
      value: "1M",
      label: "Threats Prevented",
      suffix: "+",
    }
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-8 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-gray-400 text-center font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;