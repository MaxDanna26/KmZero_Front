import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: true,
    categories: []
  },
  reducers: {
     setCategories: (state, {payload}  ) => {
      state.isLoading = false,
      state.categories = payload;
    },
  }
});


// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;