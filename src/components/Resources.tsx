import React from 'react';
import { FileText, Video, BookOpen } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="w-8 h-8" />,
      type: "Whitepaper",
      title: "The Future of AI in Cybersecurity",
      description: "Comprehensive analysis of AI's role in modern security.",
      tag: "Technical"
    },
    {
      icon: <Video className="w-8 h-8" />,
      type: "Webinar",
      title: "Advanced Threat Detection Strategies",
      description: "Expert insights on modern security threats and solutions.",
      tag: "Educational"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      type: "Case Study",
      title: "Enterprise Security Transformation",
      description: "How IBI helped secure a Fortune 500 company.",
      tag: "Business"
    }
  ];

  return (
    <div id="resources" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our latest insights, research, and cybersecurity best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="mb-6 text-blue-500 group-hover:scale-110 transform transition-transform duration-300">
                  {resource.icon}
                </div>
                <span className="inline-block px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full mb-4">
                  {resource.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-6">{resource.description}</p>
                <span className="text-blue-500 font-medium hover:text-blue-400 cursor-pointer">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;