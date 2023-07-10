import {createSlice } from '@reduxjs/toolkit'


const productsSlice = createSlice({
    name: 'product',
    initiastate:[],
    reducers: {
        addProduct(state, action){
            state.push(action.payload);
            //
        },
        removeProduct(state, action){
            //
        }
    }


});


export const productsReducer = productsSlice.reducer;

