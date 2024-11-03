import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAmazonPay, FaGooglePay } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const SupportPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // UPI bank options with links
  const upiBanks = [
    { name: 'SBI', upiLink: 'upi://pay?pa=9068539812@apl&pn=State+Bank+of+India' },
    { name: 'Bank of India', upiLink: 'upi://pay?pa=9068539812@apl&pn=Bank+of+India' },
    { name: 'Bank of Baroda', upiLink: 'upi://pay?pa=9068539812@apl&pn=Bank+of+Baroda' },
    { name: 'HDFC Bank', upiLink: 'upi://pay?pa=9068539812@apl&pn=HDFC+Bank' },
    { name: 'ICICI Bank', upiLink: 'upi://pay?pa=9068539812@apl&pn=ICICI+Bank' },
    { name: 'Axis Bank', upiLink: 'upi://pay?pa=9068539812@apl&pn=Axis+Bank' },
    { name: 'Paytm', upiLink: 'upi://pay?pa=9068539812@apl&pn=Paytm' },
    { name: 'Bhim UPI', upiLink: 'upi://pay?pa=9068539812@apl&pn=Bhim+UPI' },
    { name: 'PhonePe', upiLink: 'upi://pay?pa=9068539812@apl&pn=PhonePe' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex bg-black p-8 relative overflow-hidden">
        
        {/* Background Animation */}
        <div className="moving-words absolute top-0 left-0 w-full h-full overflow-hidden">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`absolute text-${['purple', 'blue', 'white'][i % 3]}-400 text-3xl animate-moving opacity-70`}
              style={{
                animationDuration: `${Math.random() * 5 + 5}s`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 80 + 10}vh`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {[
                "You help us to grow",
                "Your support means a lot",
                "We respect your support",
                "Hey champ",
                "Help us to grow",
                "We appreciate your help!",
                "Together we thrive",
                "You're awesome!",
                "Your voice matters",
                "Thank you for being here!",
                "Your feedback fuels us!",
                "Let’s make great things together!",
                "You make the difference!",
                "Support us with your heart!",
              ][i % 12]}
            </div>
          ))}
        </div>

        {/* Left Half - Support Us Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
          <div className="bg-transparent p-8 rounded-lg shadow-lg border border-purple-500 border-opacity-40 max-w-md w-full">
            <h2 className="text-4xl text-white mb-4 text-center font-bold">Support Us!</h2>
            <p className="text-lg text-white mb-6 text-center">Your contribution helps us grow and serve you better!</p>

            {/* Trouble to Pay Section */}
            <div className="bg-purple-500 bg-opacity-20 p-4 rounded-lg mb-6 shadow-md">
              <h3 className="text-xl font-semibold text-white text-center">Having Trouble to Pay?</h3>
              <p className="text-md text-purple-200 text-center">You can pay to:</p>
              <p className="text-xl font-bold text-white text-center">9068539812@apl</p>
              <p className="text-md text-purple-200 text-center">We really appreciate your payment in advance!</p>
            </div>

           {/* UPI Payment Options */}
<div className="flex flex-col space-y-4 mb-6">
  <div className="flex items-center justify-center">
    <div className="text-3xl text-white p-2 mr-2">{<FaAmazonPay />}</div>
    <a
      href={`upi://pay?pa=9068539812@apl&pn=Amazon+Pay`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline text-lg"
    >
      Amazon Pay
    </a>
  </div>
  <div className="flex items-center justify-center">
    <div className="text-3xl text-white p-2 mr-2">{<FaGooglePay />}</div>
    <a
      href={`upi://pay?pa=9068539812@apl&pn=Google+Pay`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline text-lg"
    >
      Google Pay
    </a>
  </div>
  <div className="relative ">
    <button
      className="flex items-center justify-center text-white bg-blue-600 rounded-lg px-2 py-1 hover:bg-blue-700 transition"
      onClick={() => setDropdownOpen(!dropdownOpen)}
    >
      <span className="text-lg ">Other UPI</span>
      <span className="ml-2">{dropdownOpen ? '▲' : '▼'}</span>
    </button>
    {dropdownOpen && (
      <div className="absolute bg-blue-600 rounded-lg shadow-md mt-1 z-10 p-2">
        {upiBanks.map(bank => (
          <a
            key={bank.name}
            href={bank.upiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white px-4 py-2 hover:bg-blue-700 transition"
          >
            {bank.name}
          </a>
        ))}
      </div>
    )}
  </div>
</div>


            {/* Amount Selection */}
            <div className="flex justify-around w-full bg-transparent rounded-lg p-4 mb-6">
              {['100', '500', '1000', '10000', '100000'].map((amt) => (
                <motion.div
                  key={amt}
                  className="h-12 w-24 flex items-center justify-center text-lg text-cyan-400 cursor-pointer hover:bg-purple-800 bg-opacity-30 transition duration-300 rounded-full"
                >
                  {amt}
                </motion.div>
              ))}
            </div>

            {/* Payment Button */}
            <button className="bg-purple-500 text-white p-3 rounded hover:bg-purple-600 transition duration-300 w-full">
              Contribute Now
            </button>
          </div>
        </div>

        {/* Right Half - Description Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-8">
          <img src="/Product_img/Support_US_Girl.png" alt="VisiARise" className="mb-4 rounded w-60" />
          <h2 className="text-4xl text-white mb-4">Why Support VisiARise?</h2>
          <p className="text-lg text-white mb-4">
            Your support is essential to our growth and innovation. Here's how you can make a difference:
          </p>
          <ul className="list-none space-y-4">
            {[
              "Your contribution enables us to provide real-time services that enhance user experience.",
              "Every small support propels us towards becoming the best AR service provider in India.",
              "Help us reach new heights and make VisiARise a household name in India and beyond.",
              "Your support ensures we can maintain high service standards and cater to our users effectively.",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center text-lg text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="h-4 w-4 rounded-full bg-purple-400 mr-2 animate-ping"></span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
      <style >{`
        @keyframes moving {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(100vw);
          }
        }

        .animate-moving {
          animation: moving linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
};

export default SupportPage;
