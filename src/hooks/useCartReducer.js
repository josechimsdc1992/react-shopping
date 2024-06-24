import { useReducer } from "react"

export function useCartReducer({reducer,initialState}){
    const [state,dispatch]=useReducer(reducer,initialState) 

    const addToCart=product=>dispatch({
        type:'add',
        payload:product
    })
    const removeFromCart=product=>dispatch({
        type:'remove',
        payload:product
    })
    const clearCart=()=>dispatch({
        type:'clear'
    })

    const total=()=>state.reduce((sum, currentItem) => { 
        return sum + (currentItem.price * currentItem.quantity); 
    }, 0)

    return {addToCart,removeFromCart,clearCart,state,total}
}