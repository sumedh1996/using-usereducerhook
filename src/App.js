import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Product from "./components/product";
import Cart from "./components/cart";

function App() {
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Product />
      <Cart />
    </div>
  );
}

export default App;
