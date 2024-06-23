import { useState } from "react"

export function useFilters(){
    const [filters,setFilters]=useState(
        {
            category:'all',
            minPrice:0
        }
    )
    const filterProducts=(products)=>{
        return products.filter(product=>{
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category=='all' || filters.category==product.category
                )

            )
        })

    }
    return {filterProducts,setFilters}
}