import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "antd/dist/antd.css";
import { store } from './app/store'
import  { Provider } from 'react-redux'
import { apiSlice } from './app/features/api/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
  // </React.StrictMode>
);

