import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from "react";
import Swal from 'sweetalert2';

import Login from './Login';

import { LOGIN_SCHEMA } from '../../constants/schemas'
import { login } from "../../processes/auth";
import { getAuthState } from "../../store/authReducer";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(getAuthState);
    const [ showPassword, setShowPassword ] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm({
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

    const toggleShowPassword = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword])

    const onLoginSubmit = useCallback(async values => {
        console.log('values');
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
            control={control}
            onLoginSubmit={handleSubmit(onLoginSubmit)}
            loading={loading}
            errors={errors}
            toggleShowPassword={toggleShowPassword}
            showPassword={showPassword}
        />
    )
}

export default LoginContainer;
