import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index1.css';
import './index2.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import AppCard from './AppCard';
import "../src/indexCard.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1 />
    <App2 />
    <AppCard/>
  </React.StrictMode>
);