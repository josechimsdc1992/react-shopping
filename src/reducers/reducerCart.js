export const initialState=JSON.parse(window.localStorage.getItem('cart')) || []
const updateLocalStorage=state=>{
window.localStorage.setItem('cart',JSON.stringify(state))
}
export const reducer=(state,action)=>{
    const {type:actionType,payload:actionPayLoad}=action
switch(actionType){
    case('add'):{
        const id=actionPayLoad.id
        const productInCartIndex=state.findIndex(item=>item.id===id)

        if(productInCartIndex>=0){
            const newCart=structuredClone(state)
            newCart[productInCartIndex].quantity+=1
            updateLocalStorage(newCart)
            return newCart
        }

        const newCart= [
            ...state,
            {
                ...actionPayLoad,
                quantity:1
            }
        ]
        updateLocalStorage(newCart)
        return newCart
    }
    case('remove'):{
        const id=actionPayLoad.id
        const newCart= state.filter(item=>item.id!=id)
        updateLocalStorage(newCart)
        return newCart
    }
    case('clear'):{
        updateLocalStorage([])
        return []
    }
}
}