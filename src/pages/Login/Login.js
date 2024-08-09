/* eslint-disable react/style-prop-object */
import React from "react";
import Button from "../../components/Button/Button";
import logo from '../../assets/img/logo.png';
import Image from "../../components/Image/Image";

import './styles.css'

const Login = ({ onBackClick, onAuthChange, onPasswordChange, onLoginSubmit, credentials }) => (
    <>
        <div className="criar-conta-header">
            <Button id="voltar" onClick={onBackClick} style={"third"}>Voltar</Button>
            <Image className='logo-criar-conta' src={logo} alt="Logo do Tuipixo" />
        </div>
        <div className="container-criar-conta">
            <h1>Entrar na conta</h1>
            <div className="container-criar-conta-form">
                <h2>Insira suas informacoes:</h2>
                <form className='criar-conta-form' onSubmit={onLoginSubmit}>
                    <label>
                        Nome de usuario ou email:
                        <input onChange={onAuthChange} type="text" value={credentials.auth}/>
                    </label>
                    <label>
                        Senha:
                        <input onChange={onPasswordChange} type="password" value={credentials.senha}/>
                    </label>
                    <Button type='submit' style="first">Entrar</Button>
                </form>
            </div>
        </div>
    </>
);

export default Login;
