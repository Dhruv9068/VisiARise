import { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust the path as necessary
import { ref, set, get } from "firebase/database"; // Import ref, set, and get from Firebase
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase

const ProfilePage = () => {
  
  const [profileImage, setProfileImage] = useState(null);
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Accessing authentication state
  const auth = getAuth(); // Get the current authenticated user

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userInfoRef = ref(db, 'userInfo/' + user.uid); // Use UID instead of email as key
        const snapshot = await get(userInfoRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setName(userData.name);
          setEmail(userData.email);
          setCountry(userData.country);
          setBio(userData.bio);
          setProfileImage(userData.profileImage);
          setIsProfileComplete(true); // If data exists, mark profile as complete
        }
      }
    };

    if (isAuthenticated && auth.currentUser) { // Ensure the user is authenticated
      fetchUserData();
    }
  }, [auth.currentUser, isAuthenticated]); // Fetch when user or authentication changes

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser; // Get the current user
      if (user) {
        // Create a reference for the user info in the database using UID
        const userInfoRef = ref(db, 'userInfo/' + user.uid);

        // Set user data in the Realtime Database
        await set(userInfoRef, {
          name,
          email: user.email, // Use the authenticated user's email
          country,
          bio,
          profileImage
        });

        setIsProfileComplete(true); // Mark profile as complete
        console.log("Profile saved successfully!");
      }
    } catch (error) {
      console.error("Error saving profile: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {!isProfileComplete ? (
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Complete Your Profile</h2>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500 cursor-pointer"
              onClick={() => document.getElementById('fileInput').click()}
            />
          ) : (
            <div
              className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500 flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <span className="text-sm text-gray-300">Upload Image</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 w-full p-2 bg-gray-700 border border-gray-500 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-full p-2 bg-gray-700 border border-gray-500 rounded"
              disabled // Email is now fetched from the authenticated user
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mb-4 p-2 bg-gray-700 border border-gray-500 rounded w-full"
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              {/* Add more countries as needed */}
            </select>
            <textarea
              placeholder="Short Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mb-4 w-full p-2 bg-gray-700 border border-gray-500 rounded"
              required
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-400 transition duration-300 px-4 py-2 rounded"
            >
              Save Profile
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500 cursor-pointer"
              onClick={() => document.getElementById('fileInput').click()}
            />
          )}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <p className="mb-2"><strong>Name:</strong> {name}</p>
          <p className="mb-2"><strong>Email:</strong> {email}</p>
          <p className="mb-2"><strong>Country:</strong> {country}</p>
          <p className="mb-2"><strong>Bio:</strong> {bio}</p>

          <button
            onClick={() => setIsProfileComplete(false)}
            className="bg-purple-500 hover:bg-purple-400 transition duration-300 px-4 py-2 rounded mt-4"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
