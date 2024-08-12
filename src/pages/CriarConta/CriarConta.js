/* eslint-disable react/style-prop-object */
import React from "react";

import './styles.css';

import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import logo from '../../assets/img/logo.png';
import Image from "../../components/Image/Image";
import Loading from '../../components/Loading/Loading';

const CriarConta = ({
    onBackClick,
    onNameChange,
    onUserNameChange,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onCreateSubmit,
    loading,
    errors
}) => {
    if(loading) {
        return (
            <Loading />
        )
    }
    return(
    <>
        <div className="criar-conta-header">
            <Button id="voltar" onClick={onBackClick} style={"third"}>Voltar</Button>
            <Image className='logo-criar-conta' src={logo} alt="Logo do Tuipixo" />
        </div>
        <div className="container-criar-conta">
            <h1>Criar Conta</h1>
            <div className="container-criar-conta-form">
                <h2>Insira suas informações: </h2>
                <Form
                    inputs={[
                        {
                            text: "Nome:",
                            onChange: onNameChange,
                            type: "text",
                            error: errors.nome?.message
                        },
                        {
                            text: "Nome de Usuário:",
                            onChange: onUserNameChange,
                            type: "text",
                            error: errors.nome_usuario?.message
                        },
                        {
                            text: "Email:",
                            onChange: onEmailChange,
                            type: "email",
                            error: errors.email?.message
                        },
                        {
                            text: "Senha:",
                            onChange: onPasswordChange,
                            type: "password",
                            error: errors.senha?.message
                        },
                        {
                            text: "Confirme sua senha:",
                            onChange: onConfirmPasswordChange,
                            type: "password",
                            error: errors.confirmaSenha?.message
                        }
                    ]}
                    style='first-form'
                    onSubmit={onCreateSubmit}
                    type='Criar conta'
                />
            </div>
        </div>
    </>
    )
}

export default CriarConta;
