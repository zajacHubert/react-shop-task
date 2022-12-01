import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  font-size: 1.6rem;
  width: 50%;
  height: 30%;
  min-height: 30vh;
  background-color: #efefef;
  color: #000;
  margin: 0 auto;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  font-size: 2.5rem;
  width: 50%;
  background-color: #efefef;
  color: #000;
  margin: 3rem auto;
`;

export const ModalBtn = styled.button`
  font-family: inherit;
  border: 1px solid #000;
  padding: 0.5rem 4.5rem;
  font-size: 1.3rem;
  transition: 0.3s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
