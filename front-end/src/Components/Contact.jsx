import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const FAQs = [
  {
    question: "What services does VisiARise offer?",
    answer: "VisiARise provides Augmented Reality solutions for visualizing products like furniture, decor, and electronics in your space.",
  },
  {
    question: "How can I use the AR feature?",
    answer: "Simply select a product and click on the 'Visualize in AR' option to see how it looks in your home.",
  },
  {
    question: "Is there a mobile app for VisiARise?",
    answer: "Currently, our platform is web-based, but we are exploring mobile solutions in the future.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through the contact form on this page or email us directly at support@visiarise.com.",
  },
  {
    question: "Can I return a product I purchased?",
    answer: "Yes, you can return products within 30 days of purchase, provided they are in original condition.",
  },
  {
    question: "Are there any additional fees?",
    answer: "No, the prices listed include all fees, and you will not encounter any hidden charges.",
  },
  {
    question: "How can I provide feedback?",
    answer: "We appreciate feedback! You can share your thoughts through the contact form or by emailing us.",
  },
  {
    question: "Do you have a newsletter?",
    answer: "Yes, you can subscribe to our newsletter at the bottom of our homepage to stay updated on offers and news.",
  },
];

const ContactUs = () => {
  const [shapes, setShapes] = useState([]);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

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

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div
        className="relative flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-10 px-4 overflow-hidden"
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

        {/* Left half: Contact Form */}
        <div className="relative z-10 w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg mb-8 md:mb-0" style={{ backgroundColor: 'rgba(34, 34, 34, 0.8)' }}>
          <h2 className="text-3xl font-bold mb-6 text-center neon-text">
            Contact Us
          </h2>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-2 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-2 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="mb-4 p-2 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right half: FAQs */}
        <div className="relative z-10 w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(34, 34, 34, 0.8)' }}>
          <h2 className="text-3xl font-bold mb-6 text-center neon-text">
            Frequently Asked Questions
          </h2>
          {FAQs.map((faq, index) => (
            <div key={index}>
              <motion.div
                className="flex justify-between items-center p-4 border-b border-gray-600 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.span
                  className={`transform transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                >
                  &#x25B6; {/* Triangle icon for dropdown */}
                </motion.span>
              </motion.div>
              {expandedFAQ === index && (
                <motion.div
                  className="p-4 bg-gray-700 rounded-md"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
