import {products} from './mocks/products.json'
import Products from './components/Products.jsx'

export default function App(){
    return(
        <Products products={products}/>
    )
}