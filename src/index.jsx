import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global-styles.css';
import Home from './pages/Home/Home';
import store from './store/store';
import Init from './pages/Init';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Init />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/criar-conta' element={<CriarConta />} />
                    <Route path='/home' element={<PrivateRoute element={Home} />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
