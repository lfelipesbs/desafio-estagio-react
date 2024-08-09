import { useNavigate } from "react-router-dom";
import Login from './Login';
import { useCallback, useState } from "react";

const LoginContainer = () => {
    const [{ auth, senha }, setAll] = useState({
        auth: '',
        senha: ''
    })

    const navigate = useNavigate()

    const onBackClick = useCallback(() => {
        navigate('/')
    }, [navigate]);

    const onAuthChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            auth: e.target.value
        }))
    }, []);

    const onPasswordChange = useCallback((e) => {
        setAll(state => ({
            ...state,
            senha: e.target.value
        }))
    }, []);

    const onLoginSubmit = useCallback((e) => {
        e.preventDefault();
        setAll({
            auth: '',
            senha: ''
        })
    }, []);

    return (
        <Login
            onBackClick={onBackClick}
            onAuthChange={onAuthChange}
            onPasswordChange={onPasswordChange}
            onLoginSubmit={onLoginSubmit}
            credentials = {{ auth, senha }}
        />
    )
}

export default LoginContainer;
