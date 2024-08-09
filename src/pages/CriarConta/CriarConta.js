/* eslint-disable react/style-prop-object */
import React from "react";
import Button from "../../components/Button/Button";
import logo from '../../assets/img/logo.png';
import Image from "../../components/Image/Image";

import './styles.css';

const CriarConta = ({ onBackClick, onNameChange, onUserNameChange, onEmailChange, onPasswordChange, onConfirmPasswordChange, onCreateSubmit, state }) => (
    <>
        <div className="criar-conta-header">
            <Button id="voltar" onClick={onBackClick} style={"third"}>Voltar</Button>
            <Image className='logo-criar-conta' src={logo} alt="Logo do Tuipixo" />
        </div>
        <div className="container-criar-conta">
            <h1>Criar Conta</h1>
            <div className="container-criar-conta-form">
                <h2>Insira suas informacoes: </h2>
                <form className='criar-conta-form' onSubmit={onCreateSubmit}>
                    <label>
                        Nome:
                        <input onChange={onNameChange} type="text" value={state.nome}/>
                    </label>
                    <label>
                        Nome de Usuario:
                        <input onChange={onUserNameChange} type="text" value={state.nome_usuario}/>
                    </label>
                    <label>
                        Email:
                        <input onChange={onEmailChange} type="email" value={state.email}/>
                    </label>
                    <label>
                        Senha:
                        <input onChange={onPasswordChange} type="password" value={state.senha}/>
                    </label>
                    <label>
                        Confirme sua senha:
                        <input onChange={onConfirmPasswordChange} type="password" value={state.confirmaSenha}/>
                    </label>
                    <Button type='submit' style="first">
                        Criar conta
                    </Button>
                    {state.error && <p className="error">{state.error}</p>}
                </form>
            </div>
        </div>
    </>
);

export default CriarConta;
