/* eslint-disable react/style-prop-object */
import React from "react";

import './styles.css';

import logo from '../../assets/img/logo.png';
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";

const Init = ({ onCreateClick, onLoginClick }) => (
    <div className="container-init">
        <h1>Acontecendo agora</h1>
        <div className="container-init-img-btns">
            <Image className='logo-init' src={logo} alt="Logo do Tuipixo" />
            <div className="btns-init">
                <h2>Inscreva-se hoje</h2>
                <Button id='init-btn-criar-conta' onClick={onCreateClick} style="first">
                    Criar conta
                </Button>
                <Button id='init-btn-login' onClick={onLoginClick} style="second">
                    Entrar
                </Button>
            </div>
        </div>
    </div>
)

export default Init;
