import styled from 'styled-components';

interface ISpan {
  availability: boolean;
}

export const ProductCardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  width: 30%;
  margin-bottom: 2rem;
  min-height: 450px;

  @media (max-width: 1200px) {
    padding-bottom: 3rem;
  }
`;

export const ProductCardName = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;

export const Price = styled.p`
  margin: 0.8rem 0 1rem 8%;
  font-size: 1.2rem;
`;

export const ImgProductContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  padding-top: 1rem;
`;

export const ProductImg = styled.img`
  max-width: 80%;
`;

export const ProductSpan = styled.span<ISpan>`
  background-color: ${({ availability }) =>
    availability ? '#8bc34a' : '#b71c1c'};
  color: #fff;
  padding: 0.2rem 0.6rem;
  margin-left: 0.3rem;
  font-size: 1rem;
`;

export const ProductPAvailability = styled.p`
  margin-left: 8%;
  font-size: 1.2rem;
`;

export const ProductButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  a {
    font-family: inherit;
    border: 1px solid #000;
    padding: 0.5rem 1.3rem;
    font-size: 1rem;
    transition: 0.3s;
    text-transform: uppercase;

    @media (max-width: 1200px) {
      max-width: 80%;
    }

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  font-family: inherit;
  border: 1px solid #c62828;
  color: #c62828;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 1200px) {
    max-width: 80%;
    margin-top: 0.5rem;
  }

  &:hover {
    background-color: #c62828;
    color: #fff;
  }
`;
