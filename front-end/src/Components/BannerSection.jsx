import { motion } from 'framer-motion';
const BannerSection = () => {
    return (
      <section className="flex items-center justify-between w-full h-screen bg-black">
        {/* Left 40% Section */}
        <div className="w-2/5 h-4.5/5 relative">
          <img
            src="/Product_img/ManWithGlass.png"
            alt="Man With Glasses"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* Right 60% Section */}
        <div className="w-3/5 h-full relative ml-10">
          
            <motion.div
              className="relative w-full h-full cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/Product_img/Bannerimg.png"
                alt="Banner Image"
                className="w-full h-full object-contain rounded-lg shadow-lg pr-10"
              />
            </motion.div>
          
        </div>
      </section>
    );
  };
  
  export default BannerSection;