import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated' // 'not-authenticated', 'cheking', 'authenticated'
  },
  reducers: {
    login: (state, action) => {
      state.status = 'authenticated';
    },
    logout: (state, payload) =>{
      state.status = 'not-authenticated';
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});



// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;