const LoadingBubbles = () => {
    return (
      <div className="fixed inset-0 flex justify-center items-center overflow-hidden z-50 bg-black"> {/* Set background color to black */}
        <div className="relative w-full h-full">
          {/* Create bubbles */}
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className={`absolute bg-blue-500 rounded-full opacity-75 animate-bubble`}
              style={{
                width: `${Math.random() * 40 + 20}px`, // Random width between 20-60px
                height: `${Math.random() * 40 + 20}px`, // Random height between 20-60px
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 3 + 4 }s`, // Random duration between 2-5 seconds
                animationDelay: `${Math.random() * 7}s`, // Random delay
              }}
            />
          ))}
          {/* Loading indicators (balls) */}
          <div className="flex justify-center items-center absolute inset-0">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`bg-red-500 rounded-full animate-bounce`}
                style={{
                  width: '20px', // Fixed width for loading balls
                  height: '20px', // Fixed height for loading balls
                  margin: '0 10px',
                  animationDelay: `${index * 0.2}s`, // Stagger the animation delays
                }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes bubble {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-50px);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          .animate-bubble {
            animation-name: bubble;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
          .animate-bounce {
            animation-name: bounce;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    );
  };
  
  export default LoadingBubbles;
  