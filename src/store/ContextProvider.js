import CartContext from "./CartContext"
import ProductContext from "./ProductContext"
import { useState, useReducer } from "react"

const reduceFun=(state,action)=>{
    switch(action.type){
        case "ADDITEM":
            return {items:[...state.items,action.item], totalAmount:state.totalAmount+1, totalPrice:state.totalPrice+item.price}
        case 'REMOVEITEM':
            const index=state.items.findIndex((item)=>{
                return item.id===action.id
            })
            const price=state.items[index].price
            const updatedItems=state.items.filter((item)=>{
                return item.id!==action.id
            })
            return {items:updatedItems,totalAmount:state.totalAmount-1, totalPrice:state.totalPrice-price}
        default:
            return state
    }
}
const ContextProvider=(props)=>{
    const intialState={
        items:[],
        totalAmoutn:0,
        totalPrice:0
    }
    const [items,setItems]=useState([])
    const [cartReducer,setCartReducer]=useReducer(reduceFun,intialState)
    const addItem=(item)=>{
        setItems((prev)=>{
            return [...prev, item]
        })
    }
    return(
        <ProductContext.Provider value={{items:items,
            addItem:addItem,
            }}
        >
            <CartContext.Provider value={{items:cartReducer.items,
    totalAmount:cartReducer.totalAmount,
    totalPrice:cartReducer.totalPrice}}>
                {props.children}
            </CartContext.Provider>
        </ProductContext.Provider>
    )
}
export default ContextProvider