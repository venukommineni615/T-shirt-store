import { useContext, useRef } from 'react'
import styles from './Form.module.css'
import ProductContext from '../store/ProductContext'
const Form = ()=>{
    const nameRef=useRef('')
    const descriptionRef=useRef('')
    const priceRef=useRef('')
    const largeRef=useRef('')
    const mediumRef=useRef('')
    const smallRef=useRef('')
    const productCtx=useContext(ProductContext)
    const addProduct=(event)=>{
        event.preventDefault()
        productCtx.addItem(
            {name:nameRef.current.value,
            description:descriptionRef.current.value,
            price:priceRef.current.value,
            large:largeRef.current.value,
            medium:mediumRef.current.value,
            small:smallRef.current.value,
            id:Math.random()*1000
        }
        )
        nameRef.current.value=''
        descriptionRef.current.value=''
        priceRef.current.value=''
        largeRef.current.value=''
        mediumRef.current.value=''
        smallRef.current.value=''
    }
    return (
        <form onSubmit={addProduct} className={styles.form}>
            <div className={styles.item}>
                <div className={styles.container}>
                    <label>T-shirt name</label>
                    <input className={styles.input} type='text' name="shirtName" ref={nameRef} autoComplete="off"></input>
                </div>
                <div className={styles.container}>
                    <label>description</label>
                    <input className={styles.input} type='text' name='description' ref={descriptionRef} autoComplete="off"></input>
                </div>
                <div className={styles.container}>
                    <label>Price</label>
                    <input className={styles.input} type='number' name='price' ref={priceRef} autoComplete="off"></input>
                </div>
            </div>
            <div className={styles.quantity}>
                <p>Quantity Available</p>
                <div className={styles.sizeContainer}>
                    <div className={styles.container}>
                        <label htmlFor='large'>Large</label>
                        <input name='large' type='number' id='large' min='1' max='500' className={`${styles.size} ${styles.input}`} ref={largeRef} required></input>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='medium'>Medium</label>
                        <input ref={mediumRef} name='medium' type='number' id='medium' min='1' max='500' className={`${styles.size} ${styles.input}`} required></input>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='small'>Small</label>
                        <input ref={smallRef} name='small' type='number' id='small' min='1' max='500' className={`${styles.size} ${styles.input}`} required></input>
                    </div>
                </div>
            </div>
            <button type='submit' className={styles.button}>Add Product</button>
        </form>
    )
}
export default Form