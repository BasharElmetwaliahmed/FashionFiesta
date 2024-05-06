// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// const initialState = {
//   token: localStorage.getItem("token")
//     ? JSON.parse(localStorage.getItem("token"))
//     : null,
//   name: "",
//   email: "",
//   _id: null,
//   isLoading: false,
//   errorRegister: null,
//   errorLogin: null,
// };

// export const registerAction = createAsyncThunk(
//   "auth/register",
//   async (values, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post("http://localhost:5000/api/register", {
//         ...values,
//       });
//       localStorage.setItem("token", JSON.stringify(data.data.token));
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   }
// );

// export const loginAction = createAsyncThunk(
//   "auth/login",
//   async (values, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post("http://localhost:5000/api/login", {
//         ...values,
//       });
//       localStorage.setItem("token", JSON.stringify(data.data.token));
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   }
// );
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser(state) {
//       const token = JSON.parse(localStorage.getItem("token"));
//       if (token) {
//         const user = jwtDecode(token);
//         state.email = user.email;
//         state.name = user.name;
//         state._id = user._id;
//       }
//     },
//     logOut(state) {
//       localStorage.removeItem("token");
//       state.token = "";
//       state.email = "";
//       state.name = "";
//       state._id = null;
//       toast.success("logged out successfully");
//     },
//     resetError(state) {
//       state.errorRegister = "";
//       state.errorLogin = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(registerAction.pending, (state) => {
//       state.isLoading = true;
//       state.errorRegister = "";
//       state.errorLogin = "";
//     });
//     builder.addCase(registerAction.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.token = action.payload.data.token;
//       const user = jwtDecode(action.payload.data.token);
//       state.email = user.email;
//       state.name = user.name;
//       state._id = user._id;
//       toast.success("Account Created Successfully");
//     });
//     builder.addCase(registerAction.rejected, (state, action) => {
//       state.isLoading = false;
//       console.log(action.payload);
//       state.errorRegister = action.payload;
//     });
//         builder.addCase(loginAction.pending, (state) => {
//           state.isLoading = true;
//           state.errorRegister = "";
//           state.errorLogin = "";
//         });
//         builder.addCase(loginAction.fulfilled, (state, action) => {
//           state.isLoading = false;
//           state.token = action.payload.data.token;
//           const user = jwtDecode(action.payload.data.token);
//           state.email = user.email;
//           state.name = user.name;
//           state._id = user._id;
//           state.errorLogin = "";

//           toast.success("Logged in Successfully");
//         });
//         builder.addCase(loginAction.rejected, (state, action) => {
//           state.isLoading = false;
//           state.errorLogin = action.payload;
//         });
//   },
// });

// export const getAuth = (state) => state.auth;
// export const { setUser, logOut, resetError } = authSlice.actions;
// export default authSlice.reducer;
