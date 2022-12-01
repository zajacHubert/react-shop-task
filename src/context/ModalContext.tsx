import React, { createContext, Dispatch, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface ModalContextInterface {
  message: string;
  setMessage: Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextInterface | null>(null);

export const ModalContextProvider = ({ children }: Props) => {
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{ message, setMessage, showModal, setShowModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
