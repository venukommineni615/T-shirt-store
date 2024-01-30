import { useContext } from 'react'
import styles from './Product.module.css'
import CartContext from '../store/CartContext'
import ProductContext from '../store/ProductContext'
const Product = (props)=>{
    const cartCtx=useContext(CartContext)
    const productCtx=useContext(ProductContext)
    
    const addLarge=()=>{
        if(props.large===0){
            return
        }
        cartCtx.addItemToCart({
        ...props,
         large:1,
         medium:0,
         small:0
        })
        productCtx.modifyQuantity({...props,large:props.large-1})
    }
    const addMedium=()=>{
        if(props.medium===0){
            return
        }
        cartCtx.addItemToCart({
         ...props,
         large:0,
         medium:1,
         small:0
        })
        productCtx.modifyQuantity({...props,medium:props.medium-1})
        
    }
    const addSmall=()=>{
        if(props.small===0){
            return
        }
        cartCtx.addItemToCart({
         ...props,
         large:0,
         medium:0,
         small:1
        })
        productCtx.modifyQuantity({...props,small:props.small-1})
    }

return(
    <li className={styles.ele} >
        <div className={styles.semicontainer}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4>$ {props.price}</h4>
        </div>
        <div className={styles.semicontainer}>
            <button className={styles.size} onClick={addLarge} type='button'>{props.large} Large</button>
            <button className={styles.size}  onClick={addMedium} type='button'>{props.medium} Medium</button>
            <button className={styles.size}  onClick={addSmall} type='button'>{props.small} Small</button>
        </div>
    </li>
)
}
export default Product