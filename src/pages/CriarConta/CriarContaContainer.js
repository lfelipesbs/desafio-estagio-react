import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import CriarConta from "./CriarConta";
import { REGISTER_SCHEMA } from '../../constants/schemas'
import { register } from "../../processes/auth";
import { getAuthState } from "../../store/authReducer";

const CriarContaContainer = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(getAuthState)
    const [ { showPassword, showConfirmPassword }, setAll] = useState({
        showPassword: false,
        showConfirmPassword: false
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        nome: '',
        nome_usuario: '',
        email: '',
        senha: '',
        confirmaSenha: ''
        },
        resolver: yupResolver(REGISTER_SCHEMA)
    })

    const navigate = useNavigate();

    const onBackClick = useCallback(() => {
        navigate('/');
    }, [navigate]);

    const toggleShowPassword = useCallback(() => {
        setAll(state => ({
            ...state,
            showPassword: !showPassword
        }))
    }, [showPassword])

    const toggleShowConfirmPassword = useCallback(() => {
        setAll(state => ({
            ...state,
            showConfirmPassword: !showConfirmPassword
        }))
    }, [showConfirmPassword])

    const onCreateSubmit = useCallback(async values => {
        const resp = await dispatch(register(values));

        if(!resp.payload?.data) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: resp.error?.message
            });
        }
        navigate('/login');
    }, [dispatch, navigate]);

    return(
        <CriarConta
            onBackClick={onBackClick}
            onCreateSubmit = {handleSubmit(onCreateSubmit)}
            control={control}
            loading={loading}
            errors={errors}
            toggleShowPassword={toggleShowPassword}
            toggleShowConfirmPassword={toggleShowConfirmPassword}
            state={{ showPassword, showConfirmPassword }}
        />
    )
}

export default CriarContaContainer;
