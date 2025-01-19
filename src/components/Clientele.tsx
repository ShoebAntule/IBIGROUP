import React from 'react';
import { Star } from 'lucide-react';

const Clientele = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CISO at TechCorp",
      content: "IBI's AI-powered security solutions have transformed our cybersecurity infrastructure. The real-time threat detection is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Chen",
      position: "IT Director at GlobalTech",
      content: "The level of protection and service we receive from IBI is exceptional. Their team's expertise and advanced solutions give us peace of mind.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Emily Rodriguez",
      position: "Security Manager at DataFlow",
      content: "Implementing IBI's security solutions has significantly reduced our incident response time and improved our overall security posture.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div id="clientele" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See what our clients say about our cybersecurity solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 relative hover:bg-gray-850 transition-all duration-300"
            >
              <div className="absolute -top-6 left-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-4 border-gray-800"
                />
              </div>
              <div className="flex items-center mb-4 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientele;