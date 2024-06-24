import { useId } from "react";
import { ClearCartIcon,RemoveFromCartIcon,CartIcon,AddToCartIcon } from "./icons";
import './class/Cart.css'
import { useCart } from "../hooks/useCart";

function cartItem({product,addToCart}){
    return(
        <li key={product.id}>
            <img src={'https://www.shutterstock.com/image-vector/analogue-watch-made-bangladesh-260nw-2406933147.jpg'} alt={product.title}>
            </img>
            <div>
                    <strong style={{color:'white'}}>{product.title}</strong>
            </div>
                <footer>
                    <small style={{color:'white'}}>
                        Cantidad:{product.quantity}
                    </small>
                    <small style={{color:'white'}}>
                        $:{product.price*product.quantity}
                    </small>
                    <button onClick={()=>{addToCart(product)}}>+</button>
                </footer>
        </li>
                
    )
}

export function Cart(){
    const cartCheckBoxId=useId()
    const {cart,clearCart,addToCart,total}=useCart()

    return(
        <>
        <label className="cart-button" htmlFor={cartCheckBoxId}>
            <CartIcon></CartIcon>
        </label>
        <input id={cartCheckBoxId} type="checkbox" hidden></input>
        <aside className="cart">
            <ul>
                {
                    cart.map(product=>{
                        return cartItem({product,addToCart})
                    })
                }
            </ul>
            <div style={{color:'white'}}>
            Total: ${total()}
            </div>
            <div>
            <button onClick={clearCart}>
                <ClearCartIcon></ClearCartIcon>
            </button>
            </div>
            
            
        </aside>
        </>
    )
}