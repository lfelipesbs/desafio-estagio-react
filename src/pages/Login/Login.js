/* eslint-disable react/style-prop-object */
import React from "react";

import './styles.css'

import Button from "../../components/Button/Button";
import logo from '../../assets/img/logo.png';
import Image from "../../components/Image/Image";
import Loading from "../../components/Loading/Loading";
import InputField from "../../components/InputField/InputField";

const Login = ({
    onBackClick,
    onLoginSubmit,
    control,
    loading,
    errors,
    toggleShowPassword,
    showPassword
}) => {
    if (loading) {
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
                    <div className="first-form">
                        <InputField
                            name="auth"
                            error={errors.auth?.message}
                            control={control}
                            text="Nome de usuário ou Email:"
                        />
                        <InputField
                            name="senha"
                            type={showPassword ? 'text' : 'password'}
                            error={errors.senha?.message}
                            control={control}
                            text="Senha:"
                        />
                        <div style={{
                            display: 'flex',
                        }}>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                Mostrar
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={toggleShowPassword}
                                    style={{
                                        marginLeft: 10
                                    }}
                                />
                            </label>
                        </div>

                        <Button style="first" onClick={onLoginSubmit}>
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;
