import { useState } from 'react'
import './class/Filters.css'

export function Filters({setFilters}){
    const [minPrice,setMinPrice]=useState(0)

    const handleChangeMinPrice=(event)=>{
        setMinPrice(event.target.value)
        setFilters(prevState=>({
            ...prevState,
            minPrice:event.target.value
        }))
    }
    const handleChangeCategory=(event)=>{
        setFilters(prevState=>({
            ...prevState,
            category:event.target.value
        }))
    }

    return(
        <section className='filters'>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id='price' min='0' max='1000' onChange={handleChangeMinPrice}>
                </input>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>SmartPhones</option>
                </select>
            </div>
        </section>
    )
}