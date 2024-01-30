import { useContext } from 'react'
import CartItem from './CartItem'
import CartContext from '../../store/CartContext'
import styles from './CartItemList.module.css'
const CartItemList=()=>{
    const cartCtx=useContext(CartContext)
    
 return(
    <ul className={styles.list}>
        {cartCtx.items.map((item)=>{
            return <CartItem key={item.id}
            id={item.id}
             name={item.name} 
             description={item.description}
             price={item.price}
             large={item.large}
             medium={item.medium}
             small={item.small}></CartItem>
        })}
        
    </ul>
 )
}
export default CartItemList