// SocialMediaButtons.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaButtons = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-end space-y-4">
      <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
        <FaFacebook />
      </button>
      <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
        <FaTwitter />
      </button>
      <button className="p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition duration-300">
        <FaInstagram />
      </button>
    </div>
  );
};

export default SocialMediaButtons;
