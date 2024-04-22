import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import 'normalize.css';
import './index.css';
import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/500.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const BASE_PATH = '/campers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={BASE_PATH}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
