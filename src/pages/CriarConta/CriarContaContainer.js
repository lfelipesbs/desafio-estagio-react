import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"
import CriarConta from "./CriarConta";

const CriarContaContainer = () => {
    // eslint-disable-next-line no-unused-vars
    const [{ nome, nome_usuario, email, senha, confirmaSenha, error }, setAll] = useState({
        nome: '',
        nome_usuario: '',
        email: '',
        senha: '',
        confirmaSenha: '',
        error: ''
    })

    const navigate = useNavigate();

    const onBackClick = useCallback(() => {
        navigate('/');
    }, [navigate]);

    const onNameChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            nome: e.target.value
        }))
    }, []);

    const onUserNameChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            nome_usuario: e.target.value
        }))
    }, []);

    const onEmailChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            email: e.target.value
        }))
    }, []);

    const onPasswordChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            senha: e.target.value
        }))
    }, []);

    const onConfirmPasswordChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            confirmaSenha: e.target.value
        }))
    }, []);

    const onCreateSubmit = useCallback((e) => {
        e.preventDefault();

        setAll(state => ({
            ...state,
            error: ""
        }))

        const user = {
            nome,
            nome_usuario,
            email,
            senha
        }

        if(senha !== confirmaSenha){
            setAll(state => ({
                ...state,
                error: "As senhas precisam ser iguais"
            }))
            return;
        }

        console.log(user);

        setAll({
            nome: '',
            nome_usuario: '',
            email: '',
            senha: '',
            confirmaSenha: ''
        })
    }, [confirmaSenha, email, nome, nome_usuario, senha]);

    return(
        <CriarConta
            onBackClick={onBackClick}
            onNameChange={onNameChange}
            onUserNameChange = {onUserNameChange}
            onEmailChange = {onEmailChange}
            onPasswordChange = {onPasswordChange}
            onConfirmPasswordChange = {onConfirmPasswordChange}
            onCreateSubmit = {onCreateSubmit}
            state = {{ nome, nome_usuario, email, senha, confirmaSenha, error }}
        />
    )
}

export default CriarContaContainer;
