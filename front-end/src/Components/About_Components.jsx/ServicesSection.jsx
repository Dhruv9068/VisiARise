import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const [bgPosition, setBgPosition] = useState(0);
  const [activeService, setActiveService] = useState(null);

  // Scroll animation for moving background
  useEffect(() => {
    const updateBackground = () => {
      setBgPosition(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', updateBackground);
    return () => window.removeEventListener('scroll', updateBackground);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center text-white py-20 px-8 md:px-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000, #0665d2)',
        backgroundPositionY: `${bgPosition}px`,
        transition: 'background-position 0.5s ease-out',
      }}
    >
      {/* Desktop View */}
      <div className="hidden md:flex flex-row justify-between w-full max-w-4xl relative">
        {/* First Half: AR Visualization */}
        <div className="flex flex-col items-center relative w-1/2">
          <motion.div
            className="flex flex-col items-center justify-center rounded-full border-4 border-white p-8 transition-all duration-300 relative"
            style={{
              height: '200px',
              width: '200px',
              background: 'linear-gradient(45deg, #01a7fa, #ff20f0)',
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setActiveService('ar')}
            onMouseLeave={() => setActiveService(null)}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">AR Visualization</h3>
          </motion.div>

          {/* Description on hover for desktop */}
          {activeService === 'ar' && (
            <motion.div
              className="absolute right-full ml-4 text-left"
              style={{ width: '200px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white text-xs md:text-sm">
                Experience the power of Augmented Reality to visualize products in your space before making a purchase.
              </p>
            </motion.div>
          )}
          <motion.img
            src="/Product_img/ServicesGirl.png"
            alt="Services"
            className="w-64 h-auto mb-4 ml-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Second Half: VisEcommerce */}
        <div className="flex flex-col items-center relative w-1/2">
          <motion.div
            className="flex flex-col items-center justify-center rounded-full border-4 border-white p-8 transition-all duration-300 relative"
            style={{
              height: '200px',
              width: '200px',
              background: 'linear-gradient(45deg, #3F51B5, #2196F3)',
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setActiveService('visEcommerce')}
            onMouseLeave={() => setActiveService(null)}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">VisEcommerce</h3>
          </motion.div>

          {/* Description on hover for desktop */}
          {activeService === 'visEcommerce' && (
            <motion.div
              className="absolute left-full ml-4 text-left"
              style={{ width: '200px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white text-xs md:text-sm">
                Discover cutting-edge e-commerce solutions with immersive product visualization through AR.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center justify-center w-full max-w-4xl relative">
        {/* First Half: AR Visualization */}
        <div className="flex flex-col items-center relative w-full mb-4">
          <motion.div
            className="flex flex-col items-center justify-center rounded-full border-4 border-white p-8 transition-all duration-300 relative"
            style={{
              height: '200px',
              width: '200px',
              background: 'linear-gradient(45deg, #01a7fa, #ff20f0)',
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveService(activeService === 'ar' ? null : 'ar')}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">AR Visualization</h3>
          </motion.div>

          {/* Description on click for mobile */}
          {activeService === 'ar' && (
            <motion.div
              className="mt-4 text-center"
              style={{ width: '200px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white text-xs">
                Experience the power of Augmented Reality to visualize products in your space before making a purchase.
              </p>
            </motion.div>
          )}
        </div>

        {/* Centered image for mobile */}
        <motion.img
          src="/Product_img/ServicesGirl.png"
          alt="Services"
          className="w-64 h-auto mb-4 mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Second Half: VisEcommerce */}
        <div className="flex flex-col items-center relative w-full mb-40">
          <motion.div
            className="flex flex-col items-center justify-center rounded-full border-4 border-white p-8 transition-all duration-300 relative"
            style={{
              height: '200px',
              width: '200px',
              background: 'linear-gradient(45deg, #3F51B5, #2196F3)',
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveService(activeService === 'visEcommerce' ? null : 'visEcommerce')}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">VisEcommerce</h3>
          </motion.div>

          {/* Description on click for mobile */}
          {activeService === 'visEcommerce' && (
            <motion.div
              className="mt-4 text-center"
              style={{ width: '200px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white text-xs">
                Discover cutting-edge e-commerce solutions with immersive product visualization through AR.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
