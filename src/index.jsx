import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import LikesProvider from './context/LikesContext.jsx';
import '@fortawesome/fontawesome-free/css/all.css';


ReactDOM.render(
  <React.StrictMode>
    <LikesProvider>
      <App />
    </LikesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
