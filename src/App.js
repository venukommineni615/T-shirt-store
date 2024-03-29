import './App.css';
import Form from './components/Form/Form'
import ProductList from './components/Products/ProductList';
import Header from './components/Header/Header';
import ContextProvider from './store/ContextProvider'
import Cart from './components/cart/Cart'
import { useState } from 'react';
function App() {
  const [toggleCart,setToggleCart]=useState(false)
  const openCart=()=>{
    setToggleCart((prev)=>{
      return !prev
    })
  }
  const closeCart=()=>{
    setToggleCart((prev)=>{
      return !prev
    })
  }
  return (
    <div className="App">
      <ContextProvider>
      <Header openCart={openCart}></Header>
      <h2>Add Product</h2>
      <Form></Form>
      <ProductList></ProductList>
      {toggleCart && <Cart closeCart={closeCart}></Cart>}
      </ContextProvider>
    </div>
  );
}

export default App;
