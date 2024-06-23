import './class/Products.css'
import {AddToCartIcon} from './icons'

export default function Products({products}){
    return(
        <main className='products'>
            <ul>
                {
                    products.map(product=>(
                        <li key={product.id}>
                            <img alt={product.title} src={product.thumbnail}>
                            </img>
                            <div>
                                <strong>{product.title}</strong>-${product.price}
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon></AddToCartIcon>
                                </button>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </main>
    )

}
