import React from 'react';

const Card = ({ imageSrc, onLikeClick, onDeleteClick }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Anime" />
      <button onClick={onLikeClick}>Like</button>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default Card;
