import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const categoriesApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005 '
    }),

    endpoints(builder){
        return {
            fetchCategories: builder.query({
                query: (categories) =>{
                    return {
                        url: '/categories',
                        method: 'GET',
                    }
                }
            })
        }
    }
})
export const {useFetchCategoriesQuery} = categoriesApi;
export {categoriesApi};