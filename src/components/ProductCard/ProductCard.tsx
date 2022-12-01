import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../shared/types/product';
import {
  ProductCardContainer,
  ProductCardName,
  Price,
  ImgProductContainer,
  ProductImg,
  ProductSpan,
  ProductPAvailability,
  ProductButtonsContainer,
  RemoveButton,
} from './ProductCard.styles';

interface Props {
  product: Product;
  setShowDialog: Dispatch<React.SetStateAction<boolean>>;
  setIdProductToRemove: Dispatch<React.SetStateAction<string>>;
}

const ProductCard = ({
  product,
  setShowDialog,
  setIdProductToRemove,
}: Props) => {
  const removeProduct = (id: string) => {
    setIdProductToRemove(id);
    setShowDialog(true);
  };

  return (
    <ProductCardContainer>
      <ImgProductContainer>
        <ProductImg src={product.imgUrl} alt="product" />
      </ImgProductContainer>
      <ProductCardName>{product.name}</ProductCardName>
      <Price>Cena: {product.price.toFixed(2)}zł</Price>

      <ProductPAvailability>
        Produkt
        {product.availability ? (
          <ProductSpan availability={true}>{'Dostępny'}</ProductSpan>
        ) : (
          <ProductSpan availability={false}>{'Niedostępny'}</ProductSpan>
        )}
      </ProductPAvailability>
      <ProductButtonsContainer>
        <Link to={`/edit/${product.id}`} state={product}>
          Edytuj produkt
        </Link>
        <RemoveButton onClick={() => removeProduct(product.id)}>
          Usuń produkt
        </RemoveButton>
      </ProductButtonsContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
