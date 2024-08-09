import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import CriarConta from './pages/CriarConta';
import Init from './pages/Init';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Init />} />
                <Route path='/login' element={<Login />} />
                <Route path='/criar-conta' element={<CriarConta />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
