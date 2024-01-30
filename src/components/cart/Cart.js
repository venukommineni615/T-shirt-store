import { useContext } from "react"
import ReactDOM from "react-dom"
import CartItemList from "./CartItemList"
import CartContext from "../../store/CartContext"
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
const Cart=(props)=>{
    const cartCtx=useContext(CartContext)
return(
ReactDOM.createPortal(

            <Modal closeCart={props.closeCart}>
            <CartItemList></CartItemList>
            <div className={styles.totalPrice} >
                <p>Total price</p>
                <p>$ {cartCtx.totalPrice}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.cancelButton} onClick={props.closeCart}>Cancel</button>
                <button className={styles.orderButton}>Place Order</button>
            </div>
           </Modal>,
    document.getElementById('modal')
)
)
}
export default Cart