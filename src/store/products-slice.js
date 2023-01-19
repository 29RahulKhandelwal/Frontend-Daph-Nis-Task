import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        ProductData:null,
        Categories:null,
        selectedCategory:null,
    },
    reducers:{
        Products(state,action){
            state.ProductData=action.payload
        },
        Category(state,action){
            state.Categories=action.payload
        },
        SelectedCategory(state,action){
            state.selectedCategory=action.payload
        }
    }
});

export const productAction=productSlice.actions;
export default productSlice;