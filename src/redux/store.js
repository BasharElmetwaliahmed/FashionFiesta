import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import ordersReducer from "../features/orders/ordersSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    cart: persistedReducer,
    orders: ordersReducer,
    categories: categoriesReducer,
  },
});

export default store;
export const persistor = persistStore(store);

