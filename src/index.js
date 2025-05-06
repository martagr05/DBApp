import React from 'react';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createRoot, hydrateRoot as hydrate } from 'react-dom/client';

const root = document.getElementById('root');

if(root.hasChildNodes()){
  hydrate(root, <App/>)
}else{
  const appRoot = createRoot(root);
  appRoot.render(<App/>)
}
serviceWorkerRegistration.register();
reportWebVitals();
