import React, { useState,useEffect } from "react";
import MenuPage from "./pages/MenuPage";
import CartViewOffCanvas from "./component/CartViewOffCanvas";
import Header from "./component/Header";
import Footer1 from "./component/Footer1";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"

const fetchProduct = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchCategory = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products/categories");
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

function App() {
  let [cart, setCart] = useState([]);
  let [productArray, setProductArray] = useState([]);
  let [categoryArray,setCategoryArray]=useState([]);
  let [quantity,setQuantity]=useState(0)

  const handleCart = (item) => {
    let index = cart.findIndex((x) => x.id === item.id);
    if (index >= 0) {
      let updateCart = [...cart];
      updateCart[index].quantity = item.quantity + updateCart[index].quantity;
      setCart(updateCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const handleQuantity=(qty)=>{
    setQuantity(qty);
  }


    useEffect(() => {
      const data = async () => {
        let a = await fetchProduct();
        setProductArray(a);
        let b=await fetchCategory()
        setCategoryArray(b)
      };
      data();
    }, []);

  return (
    <>
      <Header length={cart.length} />
      <CartViewOffCanvas cart={[...cart]} setCart={setCart} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={
              <MenuPage
                handleCart={handleCart}
                categoryArray={categoryArray}
                productArray={productArray}
                handleQuantity={handleQuantity}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetailPage productArray={productArray} handleCart={handleCart}  quantity={quantity} handleQuantity={handleQuantity}/>}
          />
        </Routes>
      </BrowserRouter>
      <Footer1 />
    </>
  );
}

export default App;
