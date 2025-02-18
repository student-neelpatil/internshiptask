import React from "react";
import { FaHeartbeat, FaUserMd, FaTeeth, FaBone, FaAmbulance, FaChild } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    { title: "General Checkup", desc: "Routine health checkups and consultations.", icon: <FaUserMd className='text-blue-500 text-4xl' /> },
    { title: "Pediatrics", desc: "Specialized care for infants, children, and adolescents.", icon: <FaChild className='text-green-500 text-4xl' /> },
    { title: "Cardiology", desc: "Heart care services with expert cardiologists.", icon: <FaHeartbeat className='text-red-500 text-4xl' /> },
    { title: "Dental Care", desc: "Comprehensive dental treatments and checkups.", icon: <FaTeeth className='text-yellow-500 text-4xl' /> },
    { title: "Orthopedics", desc: "Bone and joint care by experienced specialists.", icon: <FaBone className='text-purple-500 text-4xl' /> },
    { title: "Emergency Care", desc: "24/7 emergency services for critical cases.", icon: <FaAmbulance className='text-orange-500 text-4xl' /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 flex flex-col items-center py-16">
      {/* Page Title */}
      <h2 className="text-5xl font-bold text-blue-800 mb-6">Our Services</h2>
      <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl">
        We provide a variety of high-quality healthcare services to cater to your needs.
      </p>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 text-lg">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
