import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Init from "./Init";

const InitContainer = () => {
    const navigate = useNavigate();

    const onCreateClick = useCallback(() => {
        navigate('/criar-conta');
    }, [navigate]);

    const onLoginClick = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <Init
            onCreateClick={onCreateClick}
            onLoginClick={onLoginClick}
        />
    )
}

export default InitContainer;
