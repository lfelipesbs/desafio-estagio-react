import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from "react";
import Swal from 'sweetalert2';

import Login from './Login';

import { LOGIN_SCHEMA } from '../../constants/schemas'
import { login } from "../../processes/auth";
import { getAuthState } from "../../store/authReducer";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(getAuthState)

    const { setValue, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        auth: '',
        senha: ''
        },
        resolver: yupResolver(LOGIN_SCHEMA)
    })

    const navigate = useNavigate()

    const onBackClick = useCallback(() => {
        navigate('/')
    }, [navigate]);

    const onAuthChange = useCallback((e) => {
        setValue('auth', e.target.value);
    }, [setValue]);

    const onPasswordChange = useCallback((e) => {
        setValue('senha', e.target.value);
    }, [setValue]);

    const onLoginSubmit = useCallback(async values => {
        const resp = await dispatch(login(values));

        if(!resp.payload?.data) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: resp.error?.message
            });
        }

        navigate('/home');
    }, [dispatch, navigate]);

    return (
        <Login
            onBackClick={onBackClick}
            onAuthChange={onAuthChange}
            onPasswordChange={onPasswordChange}
            onLoginSubmit={handleSubmit(onLoginSubmit)}
            loading={loading}
            errors={errors}
        />
    )
}

export default LoginContainer;
