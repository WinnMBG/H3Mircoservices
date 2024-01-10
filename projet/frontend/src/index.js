import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";
import {Workbox} from 'workbox-window';
import { store } from './redux/storeConfig';
import {Provider} from 'react-redux'
import {ClerkProvider} from '@clerk/clerk-react'

if (!process.env.REACT_APP_VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ClerkProvider publishableKey={process.env.REACT_APP_VITE_CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
    </Provider>
  </React.StrictMode>,
)

if ('serviceWorker' in navigator) {
  const wb = new Workbox(`${process.env.PUBLIC_URL}/sw.js`, {scope: '/'});
  wb.register()
  .then(reg => console.log('service worker registered', reg))
  .catch(err => console.log('service worker failed', err));
}