import './App.css';
import Form from './components/Form'
import ProductList from './components/ProductList';
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
      <Form></Form>
      <ProductList></ProductList>
      {toggleCart && <Cart closeCart={closeCart}></Cart>}
      </ContextProvider>
    </div>
  );
}

export default App;
