import React, { useContext, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import Dialog from '../Dialog/Dialog';
import Modal from '../Modal/Modal';
import ProductCard from '../ProductCard/ProductCard';
import {
  NoProductContainer,
  NoProductsTitle,
  ProductsListContainer,
} from './ProductsList.styles';
import { ModalContext } from '../../context/ModalContext';

const ProductsList = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [idProductToRemove, setIdProductToRemove] = useState('');
  const products = useAppSelector((state) => state.shop.products);
  const modalCtx = useContext(ModalContext);

  if (!products.length) {
    return (
      <NoProductContainer>
        <NoProductsTitle>Brak Produktów</NoProductsTitle>
      </NoProductContainer>
    );
  }

  return (
    <ProductsListContainer>
      {showDialog && (
        <Dialog
          setShowDialog={setShowDialog}
          idProductToRemove={idProductToRemove}
        />
      )}
      {modalCtx?.showModal && <Modal />}

      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          setShowDialog={setShowDialog}
          setIdProductToRemove={setIdProductToRemove}
        />
      ))}
    </ProductsListContainer>
  );
};

export default ProductsList;
