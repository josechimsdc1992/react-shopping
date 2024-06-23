import { useState,useId, useContext } from 'react'
import './class/Filters.css'
import { FiltersContext } from '../context/filtersContext'

export function Filters(){
    const {filters,setFilters}=useContext(FiltersContext)

    const handleChangeMinPrice=(event)=>{
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
    const categoryId=useId()
    const minPriceId=useId()

    return(
        <section className='filters'>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id={minPriceId} min='0' max='1000' onChange={handleChangeMinPrice}>
                </input>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryId}>Category</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>SmartPhones</option>
                </select>
            </div>
        </section>
    )
}