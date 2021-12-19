import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const products = [
  { name: 'Bat', price: 50, quantity: 10 },
  { name: 'Ball', price: 50, quantity: 14 },
  { name: 'Gloves', price: 30, quantity: 34 },
  { name: 'Wickets', price: 50, quantity: 40 },
  { name: 'Cap', price: 20, quantity: 43 },
  { name: 'Helmet', price: 100, quantity: 22 },
]

  // window.localStorage.removeItem('cartList');

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale='en'>
      <App products={products}/>
    </IntlProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
