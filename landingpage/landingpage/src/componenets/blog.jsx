import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      date: "Jan 10, 2024",
      title: "The Future of Telemedicine: How Virtual Care is Changing Healthcare",
    },
    {
      date: "Feb 05, 2024",
      title: "Top 10 Health Tips for a Stronger Immune System",
    },
    {
      date: "Mar 01, 2024",
      title: "Understanding Mental Health: Breaking the Stigma",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-blue-500 uppercase tracking-wider">
          Our Blogs
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
          Healthcare Insights & News
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Stay updated with the latest advancements, health tips, and expert opinions in the medical field.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
          >
            {/* Blog Content */}
            <span className="text-xs font-medium bg-blue-500 text-white px-3 py-1 rounded-full shadow-md">
              {blog.date}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mt-3 leading-snug">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Gain valuable healthcare knowledge and stay informed with our latest articles.
            </p>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
