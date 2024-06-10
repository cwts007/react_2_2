import React, { useContext, useEffect, useState } from 'react';
import { LikesContext } from '../context/LikesContext.jsx';
import './cards.css';

const Home = () => {
    const { likes, setLikes } = useContext(LikesContext);
    const [photos, setPhotos] = useState([]);
    const [modalPhoto, setModalPhoto] = useState(null);

    useEffect(() => {
        fetch('/photos.json')
            .then(response => response.json())
            .then(data => setPhotos(data.photos));
    }, []);

    const toggleLike = (photoId) => {
        if (likes.includes(photoId)) {
            setLikes(likes.filter(id => id !== photoId));
        } else {
            setLikes([...likes, photoId]);
        }
    };

    const openModal = (photo) => {
        setModalPhoto(photo);
    };

    const closeModal = () => {
        setModalPhoto(null);
    };

    return (
        <div>

            <div className='bienvenida'><h4>Bienvenido a Natural Pic</h4>
            <p>Marca tus fotos favoritas en el corazon de la parte superior derecha de cada foto para que puedas ver tu seleccion en la pagina de favoritos</p>
            </div>
            <div className="photo-grid">
                {photos.map(photo => (
                    <div key={photo.id} className="photo-card">
                        <img
                            src={photo.src.medium}
                            alt={photo.alt}
                            className="photo"
                            onClick={() => openModal(photo)}
                        />
                        <div className="photo-info">
                            <h2>{photo.photographer}</h2>
                            <button
                                className={`like-button ${likes.includes(photo.id) ? 'liked' : ''}`}
                                onClick={() => toggleLike(photo.id)}
                            >
                                <i className={`fas fa-heart ${likes.includes(photo.id) ? 'liked' : ''}`}></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {modalPhoto && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={modalPhoto.src.original} alt={modalPhoto.alt} />
                    <div className="caption">{modalPhoto.photographer}</div>
                </div>
            )}
        </div>
    );
}

export default Home;
