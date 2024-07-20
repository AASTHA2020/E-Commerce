import React, { Suspense, useEffect, useState } from 'react';
import Nav from './components/nav/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ProductDataProvider } from './contexts/ProductDataContext.jsx';
import { CartDataProvider } from './contexts/CartDataContext.jsx';
import { WishlistDataProvider } from './contexts/WishlistDataContext.jsx';

library.add(fas, fab);

export default function App() {

  // State for product data.
  const [productData, setProductData] = useState([]);

  useEffect(() => {

    fetch('./data.json')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(err => console.log(err))

  }, []);

  useEffect(() => {
    document.body.classList.add('w-[100vw]');
    document.body.classList.add('overflow-x-hidden');
  })

  return (
    <>
      <Nav />
      <ProductDataProvider values={{ productData }}>
        <CartDataProvider>
          <WishlistDataProvider>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </WishlistDataProvider>
        </CartDataProvider>
      </ProductDataProvider>
    </>
  );
};
