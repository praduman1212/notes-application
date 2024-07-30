import { configureStore } from '@reduxjs/toolkit';
// Import your slices here
import authReducer from './features/authSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    // Add other reducers here if needed
  },
});
