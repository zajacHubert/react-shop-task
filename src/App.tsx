import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FormAddProduct from './components/FormAddProduct/FormAddProduct';
import FormEditProduct from './components/FormEditProduct/FormEditProduct';
import Navbar from './components/Navbar/Navbar';
import ProductsList from './components/ProductsList/ProductsList';
import { useAppDispatch } from './app/hooks';
import { fetchProducts } from './features/shop/shop-slice';
import { dummyProducts } from './data/dummy-products';
import { GlobalStyle } from './assets/styles/global';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ProductsList />,
      },
      {
        path: '/add',
        element: <FormAddProduct />,
      },
      {
        path: '/edit/:id',
        element: <FormEditProduct />,
      },
    ],
  },
]);

const Wrapper = styled.div`
  max-width: 1500px;
  padding: 0 3rem;
  width: 100%;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(dummyProducts));
  }, [dispatch]);

  return (
    <Wrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
