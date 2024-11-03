import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this import is correct
import Navbar from "./Navbar"; // Assuming you have a Navbar component
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      setNotification("Account successfully created!");
      setTimeout(() => setNotification(""), 3000);
      // Navigate to the login page after successful sign-up
      navigate('/login'); // Add this line to navigate to login
    } catch (error) {
      console.error("Error creating account:", error.message);
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-Up Successful", result.user);
      setNotification("Account successfully created with Google!");
      setTimeout(() => setNotification(""), 3000);
      // Navigate to the login page after successful Google sign-up
      navigate('/login'); // Add this line to navigate to login
    } catch (error) {
      console.error("Error with Google Sign-Up", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.makeagif.com/media/11-22-2022/IlnLT0.gif")' }}>
        <div className="relative bg-gradient-radial bg-black p-8 rounded-xl shadow-lg max-w-md w-full animate__animated animate__fadeIn">
          <h1 className="text-4xl font-bold text-white text-center mb-6">Create Your Account</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {notification && (
            <div className="bg-green-500 text-white p-2 rounded-md text-center mb-4 animate__animated animate__fadeInDown">
              {notification}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:border-transparent transition duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:border-transparent transition duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:border-transparent transition duration-300"
            />
            <button type="submit" className="w-full py-2 rounded-md bg-neonPurple text-white font-bold hover:bg-neonBlue transition duration-300">
              Sign Up
            </button>
          </form>
          <button onClick={handleGoogleSignUp} className="w-full mt-2 bg-red-500 text-white rounded-md p-2">
            Sign Up with Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
