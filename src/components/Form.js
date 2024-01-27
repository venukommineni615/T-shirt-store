import { useContext } from 'react'
import styles from './Form.module.css'
import ProductContext from '../store/ProductContext'
const Form = ()=>{
    const productCtx=useContext(ProductContext)
    const addProduct=(event)=>{
        event.preventDefault()
        productCtx.addItem(
            {name:event.target.shirtName.value,
            description:event.target.description.value,
            price:event.target.price.value,
            large:event.target.large.value,
            medium:event.target.medium.value,
            small:event.target.small.value,
            id:Math.random()*1000
        }
)
    }
    return (
        <form onSubmit={addProduct} className={styles.form}>
            <div className={styles.item}>
                <div className={styles.container}>
                    <label>T-shirt name</label>
                    <input type='text' name="shirtName"></input>
                </div>
                <div className={styles.container}>
                    <label>description</label>
                    <input type='text' name='description'></input>
                </div>
                <div className={styles.container}>
                    <label>Price</label>
                    <input type='number' name='price'></input>
                </div>
            </div>
            <div className={styles.quantity}>
                <p>Quantity Available</p>
                <div className={styles.sizeContainer}>
                    <div className={styles.container}>
                        <label htmlFor='large'>L</label>
                        <input name='large' type='number' id='large' min='1' max='500' className={styles.size}></input>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='medium'>M</label>
                        <input name='medium' type='number' id='medium' min='1' max='500' className={styles.size}></input>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='small'>S</label>
                        <input name='small' type='number' id='small' min='1' max='500' className={styles.size}></input>
                    </div>
                </div>
            </div>
            <button type='submit' className={styles.button}>Add Product</button>
        </form>
    )
}
export default Form