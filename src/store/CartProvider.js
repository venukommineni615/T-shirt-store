import React, {useReducer} from 'react'
import CartContext from './CartContext'


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
const CartProvider = (props) => {
    const intialState={
        items:[],
        totalAmount:0,
        totalPrice:0
    }
    const [cartReducer,dispatchCartReducer]=useReducer(reduceFun,intialState)
    const addItemToCart = (item) => {
        dispatchCartReducer({ type: "ADD_ITEM", item:item });
  };
  return (
    <CartContext.Provider value={{items:cartReducer.items,
        totalAmount:cartReducer.totalAmount,
        totalPrice:cartReducer.totalPrice,
        addItemToCart:addItemToCart}}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider