import React from "react";
import myImage from "../assets/186063.jpg";


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 flex items-center justify-center p-10">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 p-0 flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
          <img 
            src={myImage} 
            alt="About Us" 
            className="rounded-lg shadow-lg w-full h-full object-cover" 
          />
        </div>
        
        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 p-10 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a team of dedicated professionals committed to providing exceptional medical and healthcare services. Our mission is to enhance lives through expert care, innovative treatments, and a patient-centered approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">🏥 Expert Care</h3>
              <p className="text-gray-600">Our specialists are highly trained and experienced in a wide range of medical fields.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">🩺 Advanced Technology</h3>
              <p className="text-gray-600">We use the latest medical technology to ensure accurate diagnoses and effective treatments.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">❤️ Patient Focused</h3>
              <p className="text-gray-600">Your health and well-being are our top priority, with personalized care plans.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">🌍 Global Reach</h3>
              <p className="text-gray-600">We serve patients from around the world, ensuring quality care for everyone.</p>
            </div>
          </div>
          <button className="mt-6 bg-blue-400 hover:bg-blue-500 transition duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
