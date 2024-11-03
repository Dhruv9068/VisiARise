import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { db } from '../firebase'; // Adjust the path as necessary
import { ref, get } from 'firebase/database';
import { logout } from '../authSlice'; // Ensure this path is correct

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const cartList = useSelector((state) => state.cart.cartList);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const [userData, setUserData] = useState(null);
  const cartCount = cartList.length;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && userEmail) {
      const fetchUserData = async () => {
        const userInfoRef = ref(db, 'userInfo/' + userEmail.split('@')[0]);
        const snapshot = await get(userInfoRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      };
      fetchUserData();
    }
  }, [isAuthenticated, userEmail]);

  const desktopNavList = (
    <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
      {/* Navigation Links */}
      {['/', '/shopping', '/about', '/contact', '/support'].map((path, index) => {
        const linkText = path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2);
        return (
          <li key={index}>
            <Link
              to={path}
              className="text-white hover:text-blue-500 active:text-purple-500 transition-all duration-300 ease-in-out transform hover:scale-110 text-decoration-none"
            >
              {linkText}
            </Link>
          </li>
        );
      })}
      {/* Cart & User Profile */}
      <li className="relative flex items-center">
        <Link to="/cart" className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full transform transition hover:scale-110 duration-300">
            <i className="fas fa-shopping-cart text-white"></i>
          </div>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white rounded-full text-xs px-1 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
      </li>
      {isAuthenticated ? (
        <li className="relative">
          <button
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            className="text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500 active:text-purple-500 text-decoration-none"
          >
            <img
              src={userData?.profileImage || '/user.png'}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
          </button>
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-4 bg-gray-800 text-white shadow-lg p-4 rounded transition duration-300 ease-in-out z-10">
              <h3 className="font-bold">{userData?.name || 'User'}</h3>
              <p>{userData?.email}</p>
              <Link to="/profile" className="text-blue-500 hover:underline">
                View Profile
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="mt-2 text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </li>
      ) : (
        <li>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-500 active:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  );

  const mobileNavList = (
    <ul className="flex flex-col gap-5 items-center">
      {['/', '/shopping', '/about', '/contact', '/support'].map((path, index) => {
        const linkText = path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2);
        return (
          <li key={index}>
            <Link
              to={path}
              className="text-white hover:text-blue-500 active:text-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className="bg-gray-900 p-4 shadow-lg transition-all duration-300 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-6">{desktopNavList}</div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center">
          {/* Cart and Profile Icon (Authenticated State) */}
          {isAuthenticated && (
            <div className="flex items-center space-x-4 relative">
              <Link to="/cart" className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full transform transition hover:scale-110 duration-300">
                  <i className="flex fas fa-shopping-cart text-white"></i>
                </div>
                {cartCount > 0 && (
                  <span className="top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="focus:outline-none transform transition hover:scale-110 duration-300"
              >
                <img
                  src={userData?.profileImage || '/user.png'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-4 bg-gray-800 text-white shadow-lg p-4 rounded transition duration-300 ease-in-out z-10">
                  <h3 className="font-bold">{userData?.name || 'User'}</h3>
                  <p>{userData?.email}</p>
                  <Link to="/profile" className="text-blue-500 hover:underline">
                    View Profile
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="mt-2 text-red-500 hover:underline"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Login Button (Unauthenticated State) */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-purple-500 active:bg-blue-700 transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white ml-4 focus:outline-none transform transition hover:scale-110 duration-300"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 lg:hidden bg-gray-800 p-4 rounded transition duration-300 ease-in-out">
          {mobileNavList}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
      