import "./App.css";
import Product from "./components/product";
import Cart from "./components/cart";
import {useEffect, useReducer} from 'react'
import axios from 'axios';

import { mainReducer } from './reducers/mainReducer';

function App() {
  const [state, dispatch] = useReducer(mainReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async()=>{
    const {data} = await axios.get("https://dummyjson.com/products")

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div style={{ display: "flex" }}>
      <Product state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
