import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "The Evolution of Cyber Threats in 2024",
      excerpt: "Analyzing emerging cybersecurity threats and defense strategies for the modern digital landscape.",
      date: "Mar 15, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      category: "Trends"
    },
    {
      title: "AI-Powered Security: The Next Frontier",
      excerpt: "How artificial intelligence is revolutionizing cybersecurity detection and response.",
      date: "Mar 12, 2024",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80",
      category: "Technology"
    },
    {
      title: "Best Practices for Enterprise Security",
      excerpt: "Essential security measures every enterprise should implement to protect against cyber threats.",
      date: "Mar 10, 2024",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
      category: "Guide"
    }
  ];

  return (
    <div id="blog" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest cybersecurity trends and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-500 hover:text-blue-400">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;