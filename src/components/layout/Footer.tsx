import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus', path: '/campus' },
    { name: 'Placements', path: '/placements' },
    { name: 'IQAC', path: '/iqac' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Sri Rama Degree College, Main Road, Hyderabad - 500001' },
    { icon: Phone, text: '+91 9876543210' },
    { icon: Mail, text: 'info@sriramacollege.edu.in' },
  ];

  return (
   <footer className="bg-gray-900 text-white mt-4 mx-3 sm:mx-0 sm:mt-0 rounded-xl sm:rounded-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">

        {/* GRID FIXED */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {/* About - FULL WIDTH on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Sri Rama College
            </h3>

            <p className="text-gray-400 text-sm">
              Empowering students with quality education and holistic development since 1995.
              Committed to excellence in higher education.
            </p>

            <div className="flex space-x-4 mt-4">
              <FaFacebook className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer hover:text-blue-500" />
              <FaTwitter className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer hover:text-sky-400" />
              <FaInstagram className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer hover:text-pink-500" />
              <FaYoutube className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex gap-2 text-gray-400">
                  <item.icon className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - FULL WIDTH on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Newsletter
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get updates about admissions and events.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm rounded-md sm:rounded-l-md sm:rounded-r-none bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md sm:rounded-r-md sm:rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2026 VINYASA. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;