import styles from './Product.module.css'
const Product = (props)=>{
return(
    <li className={styles.ele} >
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p className={styles.size}>{props.large}</p>
        <p className={styles.size}>{props.medium}</p>
        <p className={styles.size}>{props.small}</p>
    </li>
)
}
export default Product