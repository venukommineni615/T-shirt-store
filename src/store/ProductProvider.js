import React, {useState} from 'react'
import ProductContext from './ProductContext'
const ProductProvider = (props) => {
    const [products,setProducts]=useState([])
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
     return (
    <ProductContext.Provider value={{items:products,
        addItem:addItem,
        modifyQuantity:modifyQuantity
        }}>{props.children}</ProductContext.Provider>
  )
}

export default ProductProvider