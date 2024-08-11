import { configureStore } from "@reduxjs/toolkit";
import createProduct from "./addProductsSlice";

export const store = configureStore({
  reducer: {
    create: createProduct,
  },
});
