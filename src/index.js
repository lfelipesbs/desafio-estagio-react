import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
);