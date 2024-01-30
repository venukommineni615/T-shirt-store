import { useContext } from "react";
import Product from "./Product";
import styles from './ProductList.module.css'
import ProductContext from "../../store/ProductContext";
const ProductList=()=>{
    const productCtx=useContext(ProductContext)

return(<>

{productCtx.items.length>0 && <ul className={styles.list}>
    {productCtx.items.map((item)=>{
        return <Product
        key={item.id}
        id={item.id}
         name={item.name} 
         description={item.description}
         price={item.price}
         large={item.large}
         medium={item.medium}
         small={item.small}
         ></Product>
    })}
    
</ul>
}
</>
)
}
export default ProductList