import {products as initialProducts} from './mocks/products.json'
import Products from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'

export default function App(){
    const [products,setProducts]=useState(initialProducts)
    const {filterProducts,setFilters}=useFilters()
   
    const filteredProducts=filterProducts(products)

    return(
        <>
        <Header/>
        <Products products={filteredProducts}/>
        </>
        
    )
}