import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
const initialState = {
  orders: [],
  isLoading: false,
};

export const saveOrderAction = createAsyncThunk(
  "orders/save",
  async (values, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", values.userId);
      await updateDoc(userRef, {
        orders: [
          ...values.orders,
          {
            cartItems: values.cartItems,
            totalPrice: values.totalPrice,
            orderId: values.orderId,
            totalQuantity: values.totalQuantity,
            createdAt: Date.now(),
          },
        ],
      });

      return [
        ...values.orders,
        {
          cartItems: values.cartItems,
          totalPrice: values.totalPrice,
          orderId: values.orderId,
          totalQuantity: values.totalQuantity,
          createdAt: Date.now(),
        },
      ];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getOrdersAction = createAsyncThunk(
  "orders/get",
  async (values, { rejectWithValue }) => {
    try {
      const docSnap = await getDoc(doc(db, "users", values.id));
      const data = docSnap.data();

      return data.orders;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveOrderAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(saveOrderAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(saveOrderAction.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getOrdersAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrdersAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrdersAction.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const getOrders = (state) => state.orders;
export const getOrderById = (id) => (state) => {
  return state.orders.orders.find((order) => order.orderId === id);
};
export const getOrderLoading = (state) => state.orders.isLoading;
export const { clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
