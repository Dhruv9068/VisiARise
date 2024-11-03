import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutVisiarise = () => {
  const [shapes, setShapes] = useState([]);

  // Generate animated shapes
  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      for (let i = 0; i < 10; i++) {
        const size = Math.random() * 60 + 30; // Increased size for shapes
        newShapes.push({
          id: i,
          size,
          left: `${Math.random() * 100}vw`, // Random horizontal position
          top: `${Math.random() * 100}vh`, // Random vertical position
          delay: Math.random() * 3, // Random delay before animation starts
          duration: Math.random() * 12 + 8, // Random duration between 8 and 20 seconds
          type: Math.random() > 0.5 ? 'circle' : 'square', // Random shape type
          color: Math.random() > 0.5 ? '#8000ff' : '#00b3ff', // Random color (purple or blue neon)
        });
      }
      setShapes(newShapes);
    };
    generateShapes();
  }, []);

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white py-10 px-4 md:px-20 overflow-hidden" // Adjusted padding
      style={{ minHeight: '85vh' }} // Use minHeight instead of height
    >
      {/* Background animated shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          style={{
            position: 'absolute',
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.type === 'circle' ? 'none' : shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : '0%',
            border: shape.type === 'circle' ? `2px solid ${shape.color}` : 'none',
            top: shape.top,
            left: shape.left,
            zIndex: 1,
            filter: 'blur(3px)', // Softer neon glow effect
          }}
          initial={{ x: '-100vw' }}
          animate={{ x: '100vw' }}
          transition={{ duration: shape.duration, delay: shape.delay, repeat: Infinity }}
        />
      ))}

      {/* Left side: About heading and description */}
      <div className="md:w-1/2 mb-8 md:mb-0 z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 neon-text"
          style={{
            display: 'flex',
            alignItems: 'center',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.7)', // Light glow
            letterSpacing: '1px', // Added letter-spacing
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
        >
          <span style={{ color: '#ffffff' }}>Visi</span>
          <span style={{ color: '#d000ff' }}>AR</span>
          <span style={{ color: '#00b3ff' }}>ise</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ marginBottom: '20px' }}
        >
          Welcome to <b>Visiarise</b>, where shopping becomes an interactive experience! With our cutting-edge AR technology, your customers can visualize products like furniture and home decor directly in their space before buying.

          <br />
          <br/>
         
         
          <b>Why settle for static images?</b> Bring products to life with AR, offering a 360-degree view that ensures the perfect fit.

       

          <br />
          <br />
           <b>Transform your space with confidence</b>—experience the future of shopping with VisiARise today!
        </motion.p>
      </div>

      {/* Right side: Image with neon line */}
      <div className="relative md:w-1/2 z-10 ml-10">
        {/* Neon vertical line on the left of the image */}
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: '5%', // Reduced height for top spacing
            bottom: '5%', // Reduced height for bottom spacing
            width: '4px',
            background: 'linear-gradient(180deg, #ffffff, #00b3ff, #8000ff)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // Subtle glow
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />
        {/* The image itself */}
        <motion.img
          src="/Product_img/AboutVisiArise.png" // Replace with the actual image URL
          alt="Visiarise "
          className="w-full object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ paddingLeft: '20px' }} // Added padding for spacing
        />
      </div>
    </div>
  );
};

export default AboutVisiarise;
