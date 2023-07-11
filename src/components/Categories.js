import React from 'react'
import { useFetchCategoriesQuery } from '../store'

function Categories({categories}) {
  const {data, error, isLoading } = useFetchCategoriesQuery()
  
  console.log(data, error, isLoading)
  return (
    <div>Categories{categories.title}</div>
  )
}

export default Categories