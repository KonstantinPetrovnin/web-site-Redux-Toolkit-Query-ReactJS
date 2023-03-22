import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

import {store} from '../src/features/store.js' 
import App from '../src/components/App';

import '../src/styles/index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  
);

