import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/UsersSlice";
// import { productsReducer } from "./slices/productsSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "./apis/categoryApi";
// import { photosApi } from "./apis/photosApi";


export const store = configureStore({
      reducer:{
        users: usersReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
      }, 
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(categoriesApi.middleware);
      }, 
});

setupListeners(store.dispatch);
export {useFetchCategoriesQuery} from './apis/categoryApi'

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









