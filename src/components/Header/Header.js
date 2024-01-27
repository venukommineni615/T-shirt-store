import CartIcon from "../cart/CartIcon"
import styles from './Header.module.css'
const Header=()=>{
return(
    <header className={styles.header}>
        <h2>React T-Shirts</h2>
        <button className={styles.button}>
            <CartIcon className={styles.icon}/>
            <p className={styles.count}>0</p>
        </button>
    </header>
)

}
export default Header