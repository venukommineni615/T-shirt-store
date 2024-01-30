import styles from './CartItem.module.css'
const CartItem=(props)=>{
    
return(
    <li className={styles.ele} >
        <div className={`${styles.container} ${styles.content_container}`}>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
        <div className={`${styles.container} ${styles.size_container}`}>
            {props.large >0 &&<p className={styles.size}  type='button'>{props.large} L</p>}
            {props.medium >0 &&<p className={styles.size}   type='button'>{props.medium} M</p>}
            {props.small >0 &&<p className={styles.size}   type='button'>{props.small} S</p>}
        </div>
        <div className={styles.container}>
            <p className={styles.price}>$ {props.price}</p>
        </div>
    </li>
)
}
export default CartItem