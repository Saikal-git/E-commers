import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  user: null,
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const addProductSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    createProduct(state, action) {
      state.product = action.payload;
    },
    getUser(state, action) {
      state.user = action.payload;
    },
    addToBasket(state, action) {
      const findBas = state.basket.find((el) => el._id === action.payload._id);
      if (findBas) {
        console.log("bar");
      } else {
        let bas = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(bas));
        state.basket = bas;
      }
    },
  },
});

export const { createProduct, getUser, addToBasket } = addProductSlice.actions;
export default addProductSlice.reducer;
