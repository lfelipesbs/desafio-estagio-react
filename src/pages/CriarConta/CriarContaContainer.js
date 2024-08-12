import { useCallback } from "react";
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

    const { setValue, handleSubmit, formState: { errors } } = useForm({
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

    const onNameChange = useCallback((e) => {
        setValue('nome', e.target.value)
    }, [setValue]);

    const onUserNameChange = useCallback((e) => {
        setValue('nome_usuario', e.target.value)
    }, [setValue]);

    const onEmailChange = useCallback((e) => {
        setValue('email', e.target.value)
    }, [setValue]);

    const onPasswordChange = useCallback((e) => {
        setValue('senha', e.target.value)
    }, [setValue]);

    const onConfirmPasswordChange = useCallback((e) => {
        setValue('confirmaSenha', e.target.value)
    }, [setValue]);

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
            onNameChange={onNameChange}
            onUserNameChange = {onUserNameChange}
            onEmailChange = {onEmailChange}
            onPasswordChange = {onPasswordChange}
            onConfirmPasswordChange = {onConfirmPasswordChange}
            onCreateSubmit = {handleSubmit(onCreateSubmit)}
            loading={loading}
            errors={errors}
        />
    )
}

export default CriarContaContainer;
