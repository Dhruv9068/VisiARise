import { motion } from 'framer-motion';

const OurMotiveSection = () => {
  const motives = [
    "Immersive",
    "Visualize",
    "Boost Confidence",
    "Sustainable"
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-20 relative overflow-hidden">
      <h1 className="text-6xl font-bold text-center gap-1 mb-24">
        <span className="text-blue-400 mr-2" style={{ textShadow: '0 0 5px rgba(30, 136, 229, 0.5)' }}>
          Our
        </span>
        <span className="text-purple-400" style={{ textShadow: '0 0 5px rgba(255, 0, 251, 0.5)' }}>
          Motive
        </span>
      </h1>

      {/* Circles and Motives in Zigzag Layout */}
      <div className="flex flex-wrap justify-center">
        {motives.map((motive, index) => (
          <div
            className={`flex flex-col items-center mx-4 ${index % 2 === 0 ? 'transform translate-y-4' : 'transform -translate-y-4'}`}
            key={index}
          >
            <motion.div
              className="flex items-center justify-center rounded-full shadow-lg"
              style={{
                width: '220px',  // Circle size
                height: '220px',  // Circle size
                background: index % 2 === 0 ? '#06a9f4' : '#b300ef', // Darker colors (Dark Pink and Dark Blue)
                filter: 'drop-shadow(0 0 5px rgba(7, 192, 248, 0.7)) drop-shadow(0 0 10px rgba(139, 43, 91, 0.4))' // Subtle shadow
              }}
              whileHover={{
                scale: 1.1, // Zoom in on hover
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <span className="text-lg font-bold text-center">{motive}</span> {/* Text inside the circle */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMotiveSection;
