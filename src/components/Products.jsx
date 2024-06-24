import { useCart } from '../hooks/useCart'
import './class/Products.css'
import {AddToCartIcon, RemoveFromCartIcon} from './icons'

export default function Products({products}){
    const {addToCart,cart,removeFromCart}=useCart()
    const checkProductInCart=product=>{
        return cart.some(item=>item.id===product.id)
    }
    
    return(
        <main className='products'>
            <ul>
                {
                    products.map(product=>{
                        const isInProduct = checkProductInCart(product)

                        return(
                            <li key={product.id}>
                            <img alt={product.title} src={'https://www.shutterstock.com/image-vector/analogue-watch-made-bangladesh-260nw-2406933147.jpg'}>
                            </img>
                            <div>
                                <strong>{product.title}</strong>-${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor:isInProduct?'red':'blue'}} onClick={()=>{isInProduct?removeFromCart(product):addToCart(product)}}>
                                    {isInProduct?<RemoveFromCartIcon></RemoveFromCartIcon>:<AddToCartIcon></AddToCartIcon>}
                                    
                                </button>
                            </div>

                        </li>
                        )
                        })
                }
            </ul>
        </main>
    )

}
