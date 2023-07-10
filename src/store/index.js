import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { usersReducer } from "./slices/UsersSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { albumsApi } from "./apis/albumsApi";
// import { photosApi } from "./apis/photosApi";



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

const store = configureStore({
      reducer:{
        products: productsSlice.reducer
      }  
});

export { store } 
export const { addProduct} = productsSlice.actions
// const startingState = store.getState();
// console.log(startingState);

// store.dispatch({
//     type: 'product/addProduct',
//     payload: 'New Product !!'
// })

// const finalState = store.getState()
// console.log(finalState)






// export const store = configureStore({
//     reducer: {
//         users: usersReducer,
//         [albumsApi.reducerPath]: albumsApi.reducer,
//         [photosApi.reducerPath]: photosApi.reducer
//     },
//     middleware: (getDefaultMiddleware)=>{
//         return getDefaultMiddleware()
//         .concat(albumsApi.middleware)
//         .concat(photosApi.middleware);
//     }
// });

// setupListeners(store.dispatch)
// export * from './thunks/fetchUsers'
// export * from './thunks/addUser'
// export * from './thunks/removeUser'
// export {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi'

// export {
//     useFetchPhotosQuery,
//     useAddPhotoMutation,
//     useRemovePhotoMutation,
// } from './apis/photosApi';









