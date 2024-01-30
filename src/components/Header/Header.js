import { useContext } from "react"
import CartIcon from "../cart/CartIcon"
import styles from './Header.module.css'
import CartContext from "../../store/CartContext"
const Header=(props)=>{
    const cartCtx=useContext(CartContext)
return(
    <header className={styles.header}>
        <h2>React T-Shirts</h2>
        <button className={styles.button} onClick={props.openCart}>
            <CartIcon className={styles.icon}/>
            <p className={styles.count}>{cartCtx.totalAmount}</p>
        </button>
    </header>
)

}
export default Header