import React from 'react';

const Card = ({ animeData, onLikeClick, onDeleteClick }) => {
  return (
    <div className="card">
      <img src={animeData.anime_img} alt={animeData.anime_name} />
      <h3>{animeData.anime_name}</h3>
      <p>{animeData.anime_info}</p>
      <button onClick={onLikeClick}>Like</button>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default Card;
