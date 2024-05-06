import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../services/categories";

export const getCategoriesAction = createAsyncThunk(
  "categories/get",
  async (values, { rejectWithValue }) => {
    try {
      const data = await getAllCategories();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const initialState = {
  categories: [],
  isLoading:false,
  currentCategory:null,
};

const cartSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
        builder.addCase(getCategoriesAction.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getCategoriesAction.fulfilled, (state, action) => {

          state.isLoading = false;
          state.categories = action.payload;
        });
        builder.addCase(getCategoriesAction.rejected, (state, action) => {
          state.isLoading = false;
        });

  }
});
export const getCategories = (state) => state.categories;


export default cartSlice.reducer;

