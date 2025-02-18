import React from "react";

const Contact= () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 text-gray-900 p-10">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-1/2 p-10 bg-gradient-to-r from-red-200 to-red-400 text-gray-900">
          <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-800 mb-6">
            We’d love to hear from you! Feel free to reach out for inquiries or collaborations.
          </p>
          <div className="space-y-4">
            <p className="flex items-center space-x-2">
              <span className="text-xl">🏢</span> <span>545 Mavis Island, Chicago, IL 99191</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-xl">📞</span> <span>+1 (555) 234-5678</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-xl">✉️</span> <span>hello@example.com</span>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-10 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" />
              <input type="text" placeholder="Last name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" />
            <input type="tel" placeholder="Phone number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 h-32"></textarea>
            <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
