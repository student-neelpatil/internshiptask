import React from "react";
import { NavLink, Link } from "react-router-dom";
import myImage from './assets/image.png';

const HealthcareLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md rounded-b-2xl fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold text-blue-700">Healthy-Vision</h1>
      <ul className="flex space-x-6 text-gray-600">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Blog", path: "/blog" },
        ].map(({ name, path }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 ${
                  isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                }`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/contact">
       <button className="bg-red-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
        Contact Us
        </button>
      </Link>
      
    </nav>

      {/* Hero Section */}
      <div className="flex justify-between items-center px-10 py-32 mt-16">
        {/* Left Section */}
        <div className="w-1/2 space-y-6">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            We Provide
          </div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            The Best Medical <br /> Healthcare Services
          </h2>
          <p className="text-black-600 text-lg">
          We are committed to providing top-quality healthcare services with a patient-centered approach. Our expert medical team ensures compassionate care, advanced treatments, and a seamless experience for your well-being. Your health is our priority, and we strive to make a difference in every life we touch.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="What service are you looking for?"
              className="w-full px-5 py-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 text-lg"
            />
        <Link to="/services">
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300">
              Search
            </button>
        </Link>
            
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-1/2 flex justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg border-4 border-gray-200">
            <img
              src={myImage} // Replace with actual doctor image
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 left-10 bg-white p-4 rounded-lg shadow-lg animate-fade-in">
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center space-x-2">
                ✅ <span>Get 20% off on your 1st month</span>
              </li>
              <li className="flex items-center space-x-2">
                ✅ <span>Expert Doctors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white">About Us</h3>
            <p className="mt-2 text-gray-400">
              We provide top-notch healthcare services with experienced doctors and modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {["Home", "About Us", "Services", "Blog", "Contact"].map(
                (link, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="mt-2 text-gray-400">📍 123 Healthcare Street, NY</p>
            <p className="mt-1 text-gray-400">📞 +1 555 234 5678</p>
            <p className="mt-1 text-gray-400">✉️ support@example.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 text-gray-500 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Healthcare. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareLanding;
