import {products as initialProducts} from './mocks/products.json'
import Products from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cartContext.jsx'

export default function App(){
    const [products,setProducts]=useState(initialProducts)
    const {filterProducts,setFilters}=useFilters()
   
    const filteredProducts=filterProducts(products)

    return(
        <CartProvider>
        <Header/>
        <Cart></Cart>
        <Products products={filteredProducts}/>
        </CartProvider>
        
        
        
    )
}