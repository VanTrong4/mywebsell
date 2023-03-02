import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import PageLogin from "./components/loginRegister/PageLogin";
import reportWebVitals from "./reportWebVitals";
import "react-loading-skeleton/dist/skeleton.css";
import Index from "./components/account/Index";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import MyProduct from "./components/account/MyProduct";
import Account from "./components/account/Account";
import CreateProduct from "./components/account/CreateProduct";
import EditProduct from "./components/account/EditProduct";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./components/home/ProductDetail";
import Product from "./components/home/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Product />} />
            <Route path="product-detail/:id" element={<ProductDetail />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/account" element={<Index />}>
            <Route index element={<Account />} />
            <Route path="myProduct" element={<MyProduct />} />
            <Route path="editProduct/:id" element={<EditProduct />} />
            <Route path="createProduct" element={<CreateProduct />} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
