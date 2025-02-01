import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-10 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-900">
      <div className="container w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col items-start md:mb-6 mb-2">
          <div className="mb-4">
            <img src="src/assets/images/LOGO.png" alt="Logo" className="w-20" />
          </div>
          <p className="text-sm text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, reiciendis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deleniti eos eveniet corporis</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-400">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">API</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Facebook</a></li>
            </ul>
            <div className="iop">
        <div className="mt-8 flex items-start gap-6">
          <FaInstagram className=" hover:text-gray-400 bg-gray-800 p-2 rounded-full text-4xl" />
          <FaFacebook className=" hover:text-gray-400 bg-gray-800 p-2 rounded-full text-4xl" />
          <FaWhatsapp className=" hover:text-gray-400 bg-gray-800 p-2 rounded-full text-4xl" />
        </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;