import { useContext, useState } from "react"
import { FiltersContext } from "../context/filtersContext"

export function useFilters(){
    const {filters,setFilters}=useContext(FiltersContext)

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