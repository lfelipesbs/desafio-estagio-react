/* eslint-disable react/style-prop-object */
import React, { useCallback } from 'react';
import './styles.css';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import logo from '../../assets/img/logo.png';
import Tweet from './Tweet';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input'
import Modal from './ModalPost';

const Home = ({
    loading,
    ids,
    showModal,
    handleOpenModal,
    handleCloseModal,
    user
}) => {
    const renderItem = useCallback(item => <Tweet id={item}/>, [])

    return (
        <div className="home-container">
            {showModal &&
            <Modal>
                <button className="exit-modal-btn" onClick={handleCloseModal}>X</button>
            </Modal>
            }
            <div className="user-container">
                <Image className="logo-home" src={logo} alt="Logo da tuipixo" />
                <div className="user-infos-container">
                    <h2>Seu perfil:<br/><br/></h2>
                    <ul>
                        <li>{user?.nome}</li>
                        <li>@{user?.nome_usuario}</li>
                        <Button id="editar" style='second'>editar</Button>
                    </ul>
                </div>
                <Button style='first' onClick={handleOpenModal}>+ POST</Button>
            </div>
            <div className="posts-container">
                {loading && <Loading />}
                {ids.map(renderItem)}
                {/* {posts && posts.length > 0 ? (
                    posts.map((post, i) => {
                        if(i === 4){
                            return (<Tweet style={{ marginBottom: 0}} key={post.id} state={post} />)
                        }
                        return (<Tweet key={post.id} state={post} />)
                    })
                ) : (
                    !loading && <p style={{ display: "flex", justifyContent: "center" }}>No posts available.</p>
                )} */}
                {/* <div className="pagination-buttons">
                    <Button edit={{ width: '20%'}} style='second' onClick={handlePrevPosts} disabled={currentPageTimeline === 1}>{`< Anterior`}</Button>
                    <Button edit={{ width: '20%'}} style='second' onClick={handleNextPosts} disabled={currentPageTimeline === totalPagesTimeline}>{`Proximo >`}</Button>
                </div> */}
            </div>
            <div className="search-container">
                <div className="search">
                    <Input />
                </div>
                <div className="post-container">
                    <h5>nome</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <p>Ler mais...</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
