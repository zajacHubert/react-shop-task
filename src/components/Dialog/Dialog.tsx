import React, { Dispatch } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeProduct } from '../../features/shop/shop-slice';
import {
  DialogBtnNo,
  DialogBtnsContainer,
  DialogBtnYes,
  DialogContainer,
  DialogOverlay,
  DialogTitle,
} from './Dialog.styles';

interface Props {
  idProductToRemove: string;
  setShowDialog: Dispatch<React.SetStateAction<boolean>>;
}

const Dialog = ({ setShowDialog, idProductToRemove }: Props) => {
  const dispatch = useAppDispatch();

  const confirmDelete = (id: string) => {
    dispatch(removeProduct(id));
    setShowDialog(false);
  };
  return (
    <DialogOverlay>
      <DialogContainer>
        <DialogTitle>Czy na pewno chcesz usunąć produkt?</DialogTitle>
        <DialogBtnsContainer>
          <DialogBtnYes onClick={() => confirmDelete(idProductToRemove)}>
            Usuń
          </DialogBtnYes>
          <DialogBtnNo onClick={() => setShowDialog(false)}>Odrzuć</DialogBtnNo>
        </DialogBtnsContainer>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default Dialog;
