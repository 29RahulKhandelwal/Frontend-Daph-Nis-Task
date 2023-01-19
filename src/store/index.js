import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import productSlice from "./products-slice";

const store=configureStore({reducer:{modal:modalSlice.reducer,product:productSlice.reducer}});

export default store;