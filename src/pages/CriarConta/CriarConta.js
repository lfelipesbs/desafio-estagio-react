/* eslint-disable react/style-prop-object */
import React from "react";

import './styles.css';

import Button from "../../components/Button/Button";
import logo from '../../assets/img/logo.png';
import Image from "../../components/Image/Image";
import Loading from '../../components/Loading/Loading';
import InputField from "../../components/InputField/InputField";

const CriarConta = ({
    onBackClick,
    onCreateSubmit,
    control,
    loading,
    errors,
    toggleShowPassword,
    toggleShowConfirmPassword,
    state
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
                <h1>Criar Conta</h1>
                <div className="container-criar-conta-form">
                    <h2>Insira suas informações: </h2>
                    <div className="first-form">
                        <InputField
                            name="nome"
                            error={errors.nome?.message}
                            control={control}
                            text="Nome:"
                        />
                        <InputField
                            name="nome_usuario"
                            error={errors.nome_usuario?.message}
                            control={control}
                            text="Nome de usuário:"
                        />
                        <InputField
                            name="email"
                            error={errors.email?.message}
                            control={control}
                            text="Email:"
                        />
                        <InputField
                            name="senha"
                            type={state.showPassword ? 'text' : 'password'}
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
                                marginBottom: 30
                            }}>
                                Mostrar
                                <input
                                    type="checkbox"
                                    checked={state.showPassword}
                                    onChange={toggleShowPassword}
                                    style={{
                                        marginLeft: 10,
                                    }}
                                />
                            </label>
                        </div>
                        <InputField
                            name="confirmaSenha"
                            type={state.showConfirmPassword ? 'text' : 'password'}
                            error={errors.confirmaSenha?.message}
                            control={control}
                            text="Confirme sua senha:"
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
                                    checked={state.showConfirmPassword}
                                    onChange={toggleShowConfirmPassword}
                                    style={{
                                        marginLeft: 10
                                    }}
                                />
                            </label>
                        </div>

                        <Button style="first" onClick={onCreateSubmit}>
                            Criar conta
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CriarConta;
