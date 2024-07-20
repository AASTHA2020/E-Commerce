import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/home/Home.jsx';
import './index.css';
import Product from './components/products/Products.jsx';
import ProductDetail from './components/products/ProductDetail.jsx';
import Cart from './components/cart/Cart.jsx';
import Wishlist from './components/wishlist/Wishlist.jsx';
import Account from './components/account/Account.jsx';
import Login from './components/login/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/E-Commerce/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/E-Commerce/products' element={<Product />} />
      <Route path='/E-Commerce/products/:productname' element={<ProductDetail />} />
      <Route path='/E-Commerce/cart' element={<Cart />} />
      <Route path='/E-Commerce/wishlist' element={<Wishlist />} />
      <Route path='/E-Commerce/account' element={<Account />} />
      <Route path='/E-Commerce/login' element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
