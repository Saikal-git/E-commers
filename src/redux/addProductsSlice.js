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
    inCrement(state, action) {
      let plus = state.basket.map((el) =>
        el._id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(plus));
      state.basket = plus;
    },
    desCremenet(state, action) {
      let minus = state.basket.map((el) =>
        el._id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(minus));
      state.basket = minus;
    },
    deleteBasket(state, action) {
      let filterDel = state.basket.filter((el) => el._id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(filterDel));
      state.basket = filterDel;
    },
    removeAll(state, action) {
      localStorage.removeItem("basket");
      state.basket = [];
    },
  },
});

export const {
  createProduct,
  getUser,
  addToBasket,
  inCrement,
  desCremenet,
  deleteBasket,
  removeAll,
} = addProductSlice.actions;
export default addProductSlice.reducer;
