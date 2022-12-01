import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ModalContextProvider } from './context/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </Provider>
  </React.StrictMode>
);
