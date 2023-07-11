import React from 'react'
import { useFetchCategoriesQuery } from '../store'

function Categories({categories}) {
  const results = useFetchCategoriesQuery(categories)
  
  console.log(results)
  // console.log(data, error, isLoading)
  return (
    <div>Categories{categories.title}</div>
  )
}

export default Categories