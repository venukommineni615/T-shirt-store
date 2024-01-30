import CartContext from "./CartContext"
import ProductContext from "./ProductContext"
import { useState, useReducer } from "react"

const reduceFun=(state,action)=>{
        if(action.type==="ADD_ITEM"){
                    let itemExistedIndex=state.items.findIndex((item)=>{
                return item.id===action.item.id
            })
            if(itemExistedIndex===-1){
                return {items:[...state.items,action.item], totalAmount:state.totalAmount+1, totalPrice:state.totalPrice+parseInt(action.item.price)}
            }else{
                const updatedItems = state.items.map((item, index) => {
                    if (index === itemExistedIndex) {
                        return {
                            ...item,
                            price:parseInt(item.price)+parseInt(action.item.price),
                            large: item.large + action.item.large,
                            medium: item.medium + action.item.medium,
                            small: item.small + action.item.small
                        };
                    }
                    return item;
                });
                return {...state,items:updatedItems, totalAmount:state.totalAmount+1, totalPrice:state.totalPrice+parseInt(action.item.price)}
            }
        }
        else if(action.type==='REMOVEITEM'){
            const index=state.items.findIndex((item)=>{
                return item.id===action.id
            })
            const price=state.items[index].price
            const updatedItems=state.items.filter((item)=>{
                return item.id!==action.id
            })
            return {items:updatedItems,totalAmount:state.totalAmount-1, totalPrice:state.totalPrice-price}
        }
        else{
            return state
        }
    
}
const ContextProvider=(props)=>{ 
    const intialState={
        items:[],
        totalAmount:0,
        totalPrice:0
    }
    const [products,setProducts]=useState([])
    const [cartReducer,dispatchCartReducer]=useReducer(reduceFun,intialState)
    const addItem=(item)=>{
        setProducts((prev)=>{
            return [...prev, item]
        })
    }
    const modifyQuantity=(updatedItem)=>{
        if((updatedItem.large===0) && (updatedItem.medium===0) && (updatedItem.small===0)){
            setProducts((prev)=>{
                const updatedProducts=prev.filter((item)=>{
                    return item.id!==updatedItem.id
                })
                return updatedProducts
            })
        }
        else{
            setProducts((prev)=>{
                const updatedProducts=prev.map((item)=>{
                    if(item.id===updatedItem.id){
                        return updatedItem
                    }
                    return item
                })
                return updatedProducts
            })
        }
    }
    const addItemToCart = (item) => {
        dispatchCartReducer({ type: "ADD_ITEM", item:item });
  };
    return(
        <ProductContext.Provider value={{items:products,
            addItem:addItem,
            modifyQuantity:modifyQuantity
            }}
        >
            <CartContext.Provider value={{items:cartReducer.items,
    totalAmount:cartReducer.totalAmount,
    totalPrice:cartReducer.totalPrice,
    addItemToCart:addItemToCart}}>
                {props.children}
            </CartContext.Provider>
        </ProductContext.Provider>
    )
}
export default ContextProvider