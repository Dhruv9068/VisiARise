import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Shopping from './Components/Shopping';
import About from './Components/About';
import Cart from './Components/Cart';
import Home from './Components/Home';  
import BestDeal from './Components/BestDeal'; 
import ProductCard from './Components/ProductCard'; 
import FeaturedSection from './Components/FeaturedSection';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import ProfilePage from './Components/ProfilePage';
import SupportPage from './Components/SupportPage';
import ContactUs from './Components/Contact';
import LoadingBubbles from './Components/LoadingBubbles'; // Import the LoadingBubbles component
import ChatBot from './Components/ChatBot'; // Import the ChatBot component

import { fetchCartFromFirebase } from './cartSlice';  // Ensure cart data is fetched
import { checkAuthStatus } from './authSlice'; // Import checkAuthStatus

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth); // Get authentication state from redux

  // Check authentication status on app load
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  // Fetch cart data on app load if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCartFromFirebase());
    }
  }, [isAuthenticated, dispatch]);

  // Optionally show a loading indicator while checking auth status
  if (isLoading) {
    return <LoadingBubbles />; // Replace with the LoadingBubbles component
  }

  return (
    <Router>
      <div>
        {/* Your persistent component, like ChatBot, placed outside of Routes */}
        <ChatBot />  {/* This will be visible on all pages */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/product/:productId" element={<ProductCard />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/bestdeals" element={<BestDeal />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/featured" element={<FeaturedSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
