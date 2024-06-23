import { Filters } from "./Filters"
export function Header({setFilters}){
    return(
        <header>
            <h1>Shopping Cart</h1>
            <Filters setFilters={setFilters}></Filters>
        </header>
    )
}