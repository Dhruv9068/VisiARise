import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FutureGoalsSection = () => {
  const goals = [
    { text: "Real-Time", color: "#6a1b9a" },
    { text: "Smooth Process", color: "#1e88e5" },
    { text: "India Launch", color: "#ab47bc" },
    { text: "Global Growth", color: "#8e24aa" },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % goals.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [goals.length]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900 py-20 overflow-hidden px-4 lg:px-0">
      <h1 className="text-6xl font-bold text-center gap-1">
        <span className="text-purple-400 mr-2" style={{ textShadow: "0 0 5px rgba(156, 39, 176, 0.5)" }}>
          Future
        </span>
        <span className="text-blue-400" style={{ textShadow: "0 0 5px rgba(30, 136, 229, 0.5)" }}>
          Goals
        </span>
      </h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
        <div className="relative w-full lg:w-7/12 flex flex-col items-center overflow-hidden h-[500px] clip-path">
          {goals.map((goal, index) => {
            const width = index === 0 ? "50%" : `${45 - index * 5}%`;
            const bottomPosition = index * 100;
            const leftSlope = index * 20;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  bottom: `${bottomPosition}px`,
                  left: `${leftSlope}%`,
                  width: width,
                  height: "60px",
                  background: goal.color,
                  opacity: 0.8,
                  borderRadius: "8px",
                  transform: "skew(-10deg)",
                  filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
                }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flex items-center justify-center h-full text-white font-semibold text-sm laptop:text-lg">
                  {goal.text}
                </span>
              </motion.div>
            );
          })}

          <motion.div
            className="absolute"
            style={{
              bottom: `${Math.min(currentStep * 100 + 50, 450)}px`,
              left: `${Math.min(currentStep * 20, 50)}%`,
              transformOrigin: "center bottom",
            }}
            animate={{ x: [0, 5], y: [-10, 5], opacity: [0.8, 1], scale: [0.9, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-supermansupermanfictional-superherocomic-booksdc-comicscharacterjerry-siegelson-of-kryptonaction-comicsman-of-steel-17015286578474hcfc.png"
              alt="Superman"
              className="w-24 h-24 laptop:w-32 laptop:h-32"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </motion.div>
        </div>

        <div className="flex justify-center items-start w-full lg:w-5/12 h-full mb-0">
          <img
            src="https://img.freepik.com/premium-vector/rocket-with-neon-light-3d-rendering-rocket-with-neon-light-3d-rendering-rocket-launch-with-ne_912214-48398.jpg"
            alt="Rocket"
            className="mt-20 w-3/4 h-[300px] object-contain lg:w-full lg:h-[400px]"
          />
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ scale: [1, 1.2], opacity: [0.5, 0.7], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20 }}
      >
        <div className="absolute bg-purple-500 rounded-full w-16 h-16 opacity-30" style={{ top: "10%", left: "5%" }}></div>
        <div className="absolute bg-blue-500 rounded-full w-24 h-24 opacity-30" style={{ top: "50%", right: "15%" }}></div>
      </motion.div>
    </div>
  );
};

export default FutureGoalsSection;
