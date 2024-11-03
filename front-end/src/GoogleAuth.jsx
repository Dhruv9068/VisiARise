import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; // Ensure this import is correct

const GoogleAuth = () => {
  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Successful", result.user);
    } catch (error) {
      console.error("Error with Google Sign-In", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleAuth}
      className="flex items-center justify-center w-full py-2 rounded-md bg-red-500 text-white font-bold hover:bg-red-600 transition duration-300 mt-10"
    >
      <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Icon" className="w-6 h-6 mr-2" />
      Sign in / Sign up with Google
    </button>
  );
};

export default GoogleAuth;
