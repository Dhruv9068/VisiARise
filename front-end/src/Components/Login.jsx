import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "./Navbar";
import GoogleAuth from "../GoogleAuth"; // Ensure correct import
import { useDispatch } from "react-redux";
import { login } from '../authSlice'; // Ensure this import is correct
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [showProfileOptions, setShowProfileOptions] = useState(false); // State for profile options visibility
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, identifier, password);
      console.log("User logged in:", userCredential.user);
      setNotification("Successfully logged in!");
      setTimeout(() => setNotification(""), 3000);
      dispatch(login(userCredential.user.email)); // Dispatch login action with user email
      
      // Navigate to the home page after successful login
      navigate('/'); // Change this path according to your routing structure
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError(error.message);
    }
  };

  const handleProfileClick = () => {
    setShowProfileOptions(!showProfileOptions); // Toggle profile options visibility
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <>
      <Navbar onProfileClick={handleProfileClick} /> {/* Pass the click handler to Navbar */}
      <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.makeagif.com/media/11-22-2022/IlnLT0.gif")' }}>
        <div className="relative bg-gradient-radial bg-black p-10 rounded-lg shadow-lg w-full max-w-md"> {/* Increase padding and size */}
          <h1 className="text-white text-3xl mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {notification && <p className="text-green-500">{notification}</p>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300">
              Login
            </button>
          </form>
          <GoogleAuth />
          <div className="mt-4 text-center"> {/* Added margin for spacing */}
            <p className="text-white">
              Don't have an account yet? 
              <span 
                className="cursor-pointer text-blue-500 hover:underline pl-4" 
                onClick={handleSignUpClick}
              >
                Create one, click here
              </span>
            </p>
          </div>
        </div>

        {/* Profile Options */}
        {showProfileOptions && (
          <div className="absolute right-4 top-16 bg-white p-4 rounded shadow-lg z-50">
            <ul>
              <li className="cursor-pointer mb-2 hover:text-blue-500">View Profile</li>
              <li className="cursor-pointer hover:text-blue-500">Sign Out</li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
