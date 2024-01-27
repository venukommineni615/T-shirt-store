import './App.css';
import Form from './components/Form'
import ProductList from './components/ProductList';
import Header from './components/Header/Header';
import ContextProvider from './store/ContextProvider'
function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Header></Header>
      <Form></Form>
      <ProductList></ProductList>
      </ContextProvider>
    </div>
  );
}

export default App;
