import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";

import Home from "./Home";
import { index } from "../../processes/tweet";
import { getTweetState } from "../../store/postReducer";

const HomeContainer = () => {
    const dispatch = useDispatch();
    const { ids, loading } = useSelector(getTweetState);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, [])

    useEffect(() => {
        dispatch(index())
    }, [dispatch])

    return (
        <Home
            loading={loading}
            ids={ids}
            showModal={showModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
        />
    )
}

export default HomeContainer;
