/* eslint-disable react/style-prop-object */
import React from "react";

import './styles.css'

import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import logo from '../../assets/img/logo.png';
import Image from "../../components/Image/Image";
import Loading from "../../components/Loading/Loading";

const Login = ({
    onBackClick,
    onAuthChange,
    onPasswordChange,
    onLoginSubmit,
    loading,
    errors
}) => {
    if(loading) {
        return (
            <Loading />
        )
    }
    return (
    <>
        <div className="criar-conta-header">
            <Button id="voltar" onClick={onBackClick} style={"third"}>Voltar</Button>
            <Image className='logo-criar-conta' src={logo} alt="Logo do Tuipixo" />
        </div>
        <div className="container-criar-conta">
            <h1>Entrar na conta</h1>
            <div className="container-criar-conta-form">
                <h2>Insira suas informações:</h2>
                <Form
                    inputs={[
                        {
                            text: "Nome de usuário ou email:",
                            onChange: onAuthChange,
                            type: "text",
                            error: errors.auth?.message
                        },
                        {
                            text: "Senha:",
                            onChange: onPasswordChange,
                            type: "password",
                            error: errors.senha?.message
                        }
                    ]}
                    style='first-form'
                    onSubmit={onLoginSubmit}
                    type='Entrar'
                />
            </div>
        </div>
    </>
)};

export default Login;
