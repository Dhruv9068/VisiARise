import { motion } from 'framer-motion';

const SolutionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-0 relative">
      {/* Left Side Text Content */}
      <div className="flex-1 p-8 z-10 order-1 md:order-1">
        <h2 className="text-5xl font-bold mb-4 text-center md:text-left">
          <span className="text-purple-400 mr-2" style={{ textShadow: '0 0 5px rgba(156, 39, 176, 0.5)' }}>
            Solution 
          </span>
          <span className="text-blue-400" style={{ textShadow: '0 0 5px rgba(30, 136, 229, 0.5)' }}>
            We Provide
          </span>
        </h2>
        <p className="text-lg leading-relaxed">
          Our Augmented Reality platform allows users to visualize products in their own environments with ease. By utilizing cutting-edge technology, we empower customers to interact with items like furniture and decor, enabling them to make confident decisions. This immersive experience not only enhances customer satisfaction but also reduces the likelihood of returns, fostering a more engaging shopping journey.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center items-center p-8 z-10 order-2 md:order-2">
        <motion.img
          src="/Product_img/SolutionGirl.png" // Replace with the actual image URL
          alt="Solution Visualization"
          className="max-w-full h-auto rounded-lg" // Image responsive properties
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
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
      `}</style>
    </div>
  );
};

export default SolutionSection;
