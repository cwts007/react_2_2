import React, { useContext, useEffect, useState } from 'react';
import { LikesContext } from '../context/LikesContext.jsx';
import { Link } from 'react-router-dom';
import './cards.css';

const Favorites = () => {
    const { likes, setLikes } = useContext(LikesContext);
    const [photos, setPhotos] = useState([]);
    const [modalPhoto, setModalPhoto] = useState(null);

    useEffect(() => {
        fetch('/photos.json')
            .then(response => response.json())
            .then(data => {
                const favoritePhotos = data.photos.filter(photo => likes.includes(photo.id));
                setPhotos(favoritePhotos);
            });
    }, [likes]);

    const removeFavorite = (photoId) => {
        setLikes(likes.filter(id => id !== photoId));
        setModalPhoto(null);
    };

    const openModal = (photo) => {
        setModalPhoto(photo);
    };

    const closeModal = () => {
        setModalPhoto(null);
    };

    return (
        <div>
            {photos.length === 0 ? (
                <p>
                    Favor marca como favorita alguna foto desde <Link to="/">Inicio</Link> para poder visualizarlas acá.
                </p>
            ) : (
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
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {modalPhoto && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={modalPhoto.src.original} alt={modalPhoto.alt} />
                    <div className="caption">{modalPhoto.alt}</div>
                    <button
                        className="remove-button"
                        onClick={() => removeFavorite(modalPhoto.id)}
                    >
                        Eliminar de favoritos
                    </button>
                </div>
            )}
        </div>
    );
}

export default Favorites;
