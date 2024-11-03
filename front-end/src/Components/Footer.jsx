import { FaLinkedinIn } from 'react-icons/fa'; // Import necessary icons
import { IoMdMail } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  const handleSupportClick = () => {
    // Open the Support page in the same tab
    window.location.href = '/support';
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">

        {/* Left Section: Logo & Description */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img src="/file.png" alt="Logo" className="w-20 h-20 mb-4" /> {/* Update the image path as per your logo */}
          <p className="mb-2">VisiARise - Explore your world in augmented reality.</p>
          <p className="text-sm">Email: <a href="mailto:visiarise@gmail.com" className="hover:text-purple-500">visiarise@gmail.com</a></p>
          <p className="text-sm">Follow us for updates and exclusive offers.</p>
        </div>

        {/* Center Left Section: Customer Service */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul>
            <li><a href="/contact" className="hover:text-purple-500">FAQ</a></li>
            <li><a href="/contact" className="hover:text-purple-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Center Right Section: Company Info */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li><a href="/about" className="hover:text-purple-500">About Us</a></li>
          </ul>
        </div>

        {/* Right Section: Get in Touch & Social Media */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="flex flex-wrap space-x-4 mb-4">
            <a href="https://youtu.be/7UZ7QdJ8d_c?si=hgQKgLG3IFtZ18s3" target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
            </a>
            <a href="mailto:visiarise@gmail.com" rel="noopener noreferrer">
              <IoMdMail className="text-purple-500 hover:text-blue-500 transition duration-300" size={24} />
            </a>
          </div>

          {/* Support Link */}
          <button 
            onClick={handleSupportClick} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">
            Support Us
          </button>
        </div>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="mt-8 text-center">
        <p className="text-sm">© 2024 VisiARise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
