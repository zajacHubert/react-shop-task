import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import {
  ModalBtn,
  ModalContainer,
  ModalOverlay,
  ModalTitle,
} from './Modal.styles';

const Modal = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>{modalCtx?.message}</ModalTitle>
        <ModalBtn onClick={() => modalCtx?.setShowModal(false)}>OK</ModalBtn>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
