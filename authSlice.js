import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post('http://localhost:5000/api/users/login', credentials);
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.userData;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = 'Invalid credentials';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
