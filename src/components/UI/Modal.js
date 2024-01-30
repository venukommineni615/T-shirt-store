import styles from './Modal.module.css'
const Modal=(props)=>{
    return(
    <>
        <div className={styles.background} onClick={props.closeCart}></div>
        <div className={styles.modal}>{props.children}</div>
    </>
    )
}
export default Modal