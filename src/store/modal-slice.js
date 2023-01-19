import { createSlice } from "@reduxjs/toolkit";

const modalSlice=createSlice({
    name:"modal",
    initialState:{isModalClicked:false},
    reducers:{
        toggle(state){
            state.isModalClicked=!state.isModalClicked;
        }
    }
});

export const modalAction=modalSlice.actions;
export default modalSlice;