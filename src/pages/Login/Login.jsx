import React from "react";
import logo from '../../assets/img/logo.png';
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import { useState } from "react";

import './styles.css'

function Login() {
    const [page, setPage] = useState('init');

    const handleClick = (e) => {
        switch(e.target.className){
            case'init-btn-criar-conta':
                setPage('criarConta');
                break;
            case 'init-btn-login':
                setPage('login');
                break;
            default:
                break;
        }
    }

    const init = () => (
        <div className="container-init">
            <h1>Acontecendo agora</h1>
            <div className="container-init-img-btns">
                <Image className='logo-init' src={logo} alt="Logo do Tuipixo" />
                <div className="btns-init">
                    <h2>Inscreva-se hoje</h2>
                    <Button className='init-btn-criar-conta' onClick={handleClick} style="primary">
                        Criar conta
                    </Button>
                    <Button className='init-btn-login' onClick={handleClick} style="secondary">
                        Entrar
                    </Button>
                </div>
            </div>
        </div>
    );

    const criarConta = () => (
        <div className="container-criar-conta">
            <h1>Criar Conta</h1>
            <div className="container-criar-conta-form">
                <h2>Insira suas informacoes</h2>
                <form className='criar-conta-form' action=''>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" />

                    <label htmlFor="">Nome de Usuario</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />

                    <Button type='submit' style="primary">
                        Criar conta
                    </Button>
                </form>
            </div>
        </div>
    );

    const login = () => (
        <div className="container-login">
            <h1>Entrar na conta</h1>
            <div className="container-login-form">
                <h2>Insira suas informacoes</h2>
                <form action="">
                    <label htmlFor="">Nome de usuario ou email</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />

                    <Button type='submit' style="primary">
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            {page === 'init' && init()}
            {page === 'criarConta' && criarConta()}
            {page === 'login' && login()}
        </>
    );
}

export default Login;
