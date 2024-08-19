/* eslint-disable react/style-prop-object */
import React from "react";

import './Modal.css';

import Button from "../../../components/Button/Button";
import TextAreaField from "../TextAreaField/TextAreaField";
import Loading from "../../../components/Loading/Loading";
import { View } from 'react-native';

const Modal = ({
    children,
    onChange,
    postLength,
    onPostSubmit,
    control,
    loading,
    errors
}) => {
    if(loading){
        return(
            <Loading/>
        )
    }
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    {children}
                </div>
                <div className="modal-body">
                    <h1>O que você está pensando hoje?</h1>
                    <TextAreaField
                        name="conteudo"
                        control={control}
                        onChange={onChange}
                    />
                    {postLength === 280 ?
                        <p style={{ margin: "8px 0 16px 0", opacity: '0.8', color: 'red' }}>{postLength}/280</p> :
                        <p style={{ margin: "8px 0 16px 0", opacity: '0.5' }}>{postLength}/280</p>
                    }
                </div>
                <div className="modal-footer">
                    <Button style='first' onClick={onPostSubmit}>Postar</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
