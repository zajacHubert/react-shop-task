import styled from 'styled-components';

export const DialogOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

export const DialogContainer = styled.div`
  font-size: 1.6rem;
  width: 50%;
  height: 30%;
  min-height: 30vh;
  background-color: #efefef;
  color: #000;
  text-align: center;
`;

export const DialogTitle = styled.h2`
  flex-basis: 100%;
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  max-width: 80%;
  margin: 1rem auto;
`;

export const DialogBtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem auto 0;
  width: 60%;
`;

export const DialogBtnYes = styled.button`
  background-color: transparent;
  font-family: inherit;
  border: 1px solid #c62828;
  color: #c62828;
  padding: 0.5rem 4rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c62828;
    color: #fff;
  }
`;

export const DialogBtnNo = styled.button`
  font-family: inherit;
  border: 1px solid #000;
  padding: 0.5rem 3.5rem;
  font-size: 1rem;
  transition: 0.3s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
