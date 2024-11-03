// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Initial state
const initialState = {
  isAuthenticated: false,
  userEmail: null,
  userToken: null,
  profileImage: null,
  isLoading: true, // Track authentication loading state
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload.userEmail;
      state.userToken = action.payload.userToken;
      state.profileImage = action.payload.profileImage;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userEmail = null;
      state.userToken = null;
      state.profileImage = null;
      state.isLoading = false;
    },
    setAuthLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    authError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Thunk to check if the user is authenticated on app load
export const checkAuthStatus = () => (dispatch) => {
  const auth = getAuth();
  dispatch(authSlice.actions.setAuthLoading(true)); // Set loading to true
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      user.getIdToken().then((userToken) => {
        const userEmail = user.email;
        const profileImage = user.photoURL;
        dispatch(authSlice.actions.login({ userEmail, userToken, profileImage }));
      }).catch((error) => {
        dispatch(authSlice.actions.authError(error.message));
      });
    } else {
      // User is signed out.
      dispatch(authSlice.actions.logout());
    }
  });
};

// Export actions and reducer
export const { login, logout, authError, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
