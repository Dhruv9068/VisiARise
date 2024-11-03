import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProblemSection = () => {
  const [shapes, setShapes] = useState([]);

  // Generate animated shapes for the background
  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      for (let i = 0; i < 15; i++) {
        const size = Math.random() * 60 + 30;
        newShapes.push({
          id: i,
          size,
          left: `${Math.random() * 100}vw`, // Random horizontal position
          top: `${Math.random() * 100}vh`, // Random vertical position
          delay: Math.random() * 3,
          duration: Math.random() * 12 + 8,
          type: Math.random() > 0.5 ? 'circle' : 'square', // Random shape type
          color: Math.random() > 0.5 ? '#8000ff' : '#00b3ff', // Random neon color
        });
      }
      setShapes(newShapes);
    };
    generateShapes();
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 text-white py-0">
      {/* Animated Background Shapes */}
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
            zIndex: 0,
            filter: 'blur(3px)', // Add a soft glow effect
          }}
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: '100vw' }}
          transition={{ duration: shape.duration, delay: shape.delay, repeat: Infinity }}
        />
      ))}

      {/* Content starts here */}
      <div className="flex flex-col md:flex-row items-center justify-center z-10 relative">
        {/* Right Side Image */}
        <div className="flex-1 flex justify-center items-center p-8 z-10 order-1 md:order-1">
          <motion.img
            src="/Product_img/ProblemGirl.png" // Replace with the actual image URL
            alt="Problem Visualization"
            className="max-w-96 rounded-lg" // Increased image size
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
          />
        </div>

        {/* Left Side Text Content */}
        <div className="flex-1 p-8 z-10 order-2 md:order-2">
        <h2 className="text-5xl font-bold mb-4 text-center md:text-left gap-10">
  <span className="text-purple-400 mr-2" style={{ textShadow: '0 0 5px rgba(156, 39, 176, 0.5)' }}>
    Problem
  </span>
  <span className="text-blue-400 block md:inline" style={{ textShadow: '0 0 5px rgba(30, 136, 229, 0.5)' }}>
    Statement
  </span>
</h2>

          <p className="text-lg leading-relaxed">
            In today’s fast-paced digital landscape, users often struggle to visualize products in their real environments before making a purchase. This can lead to uncertainty and dissatisfaction, especially when it comes to items like furniture, art, and other home decor. Our goal is to bridge this gap by providing an Augmented Reality experience that allows users to interact with products virtually, ensuring they make informed decisions and enhancing their overall shopping experience.
          </p>
        </div>

        {/* CSS for neon text animation */}
        <style>{`
          @keyframes neon {
            0% { text-shadow: 0 0 5px rgba(156, 39, 176, 0.5), 0 0 10px rgba(156, 39, 176, 0.5), 0 0 15px rgba(156, 39, 176, 0.5); }
            50% { text-shadow: 0 0 10px rgba(30, 136, 229, 0.5), 0 0 20px rgba(30, 136, 229, 0.5), 0 0 30px rgba(30, 136, 229, 0.5); }
            100% { text-shadow: 0 0 5px rgba(156, 39, 176, 0.5), 0 0 10px rgba(156, 39, 176, 0.5), 0 0 15px rgba(156, 39, 176, 0.5); }
          }

          h2 {
            animation: neon 1.5s infinite alternate;
          }

          /* Media query for responsiveness */
          @media (max-width: 640px) {
            .flex-1 {
              width: 100%; /* Full width on mobile */
            }
            h2 {
              font-size: 2.5rem; /* Adjust the font size for smaller screens */
            }
              
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProblemSection;
