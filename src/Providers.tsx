import React from 'react';
import { ModalProvider } from '@pancakeswap/uikit';
import { Provider } from 'react-redux';
// import { Store } from '@reduxjs/toolkit';
import store from './state'

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ModalProvider>{children}</ModalProvider>
    </Provider>
  );
};

export default Providers;
