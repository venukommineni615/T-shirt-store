
import CartProvider from "./CartProvider"
import ProductProvider from "./ProductProvider"

const ContextProvider=(props)=>{ 
    return(
        <ProductProvider
        >
            <CartProvider >
                {props.children}
            </CartProvider>
        </ProductProvider>
    )
}
export default ContextProvider