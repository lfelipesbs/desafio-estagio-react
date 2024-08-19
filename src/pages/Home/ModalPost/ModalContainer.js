import React, { useCallback, useState } from 'react';
import Modal from "./Modal";
import { useDispatch, useSelector } from 'react-redux';
import { getTweetState } from '../../../store/postReducer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { POST_SCHEMA } from '../../../constants/schemas';
import { create } from '../../../processes/tweet';
import Swal from 'sweetalert2';

const ModalContainer = ({ children }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(getTweetState);
    const [ postLength, setPostLength ] = useState(0);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            conteudo: ''
        },
        resolver: yupResolver(POST_SCHEMA)
    })


    const onPostChange = useCallback((e) => {
        setPostLength(e.target.value.length);
    }, [])

    const onPostSubmit = useCallback(async values => {
        const resp = await dispatch(create(values));

        if(!resp.payload?.data){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: resp.error?.message
            })
        }

        window.location.reload()
    }, [dispatch]);

    return (
        <Modal
            onChange={onPostChange}
            postLength={postLength}
            children={children}
            onPostSubmit={handleSubmit(onPostSubmit)}
            control={control}
            loading={loading}
            errors={errors}
        />
    )
}

export default ModalContainer;
