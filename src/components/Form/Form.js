import { useContext, useRef } from 'react'
import styles from './Form.module.css'
import ProductContext from '../../store/ProductContext'
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
                    <label htmlFor='name' style={{fontWeight:'bold'}}>T-shirt name</label>
                    <input className={styles.input} type='text' name="shirtName" ref={nameRef} autoComplete="off" id='name'></input>
                </div>
                <div className={styles.container}>
                    <label htmlFor='description' style={{fontWeight:'bold'}}>description</label>
                    <input id='description' className={styles.input} type='text' name='description' ref={descriptionRef} autoComplete="off"></input>
                </div>
                <div className={styles.container}>
                    <label htmlFor='price' style={{fontWeight:'bold'}}>Price</label>
                    <input id='price' className={styles.input} type='number' name='price' ref={priceRef} autoComplete="off"></input>
                </div>
            </div>
            <div className={styles.quantity}>
                <p style={{fontWeight:'bold'}}>Quantity Available</p>
                <div className={styles.sizeContainer}>
                    <div className={styles.container}>
                        <label htmlFor='large' style={{fontWeight:'bold'}}>Large</label>
                        <input name='large' type='number' id='large' min='1' max='500' className={`${styles.size} ${styles.input}`} ref={largeRef} required></input>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='medium' style={{fontWeight:'bold'}}>Medium</label>
                        <input ref={mediumRef} name='medium' type='number' id='medium' min='1' max='500' className={`${styles.size} ${styles.input}`} required></input>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='small' style={{fontWeight:'bold'}} >Small</label>
                        <input ref={smallRef} name='small' type='number' id='small' min='1' max='500' className={`${styles.size} ${styles.input}`} required></input>
                    </div>
                </div>
            </div>
            <button type='submit' className={styles.button}>Add Product</button>
        </form>
    )
}
export default Form