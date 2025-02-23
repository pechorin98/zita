import React, { StrictMode } from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import './global.css';import { initGA } from './analytics';

// Initialize GA when your app starts
initGA();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)