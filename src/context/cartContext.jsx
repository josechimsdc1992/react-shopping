import { useState,createContext, useReducer } from "react";
import {initialState,reducer} from '../reducers/reducerCart.js'
import { useCartReducer } from "../hooks/useCartReducer.js";

export const CartContext=createContext()

export function CartProvider({children}){
    const {addToCart,removeFromCart,clearCart,state,total}=useCartReducer({reducer,initialState})
    return(
        <CartContext.Provider value={{
            cart:state,
            total,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}