import React from 'react';
import Card from '../Card';




const CardList = ({ animeList, onLikeClick, onDeleteClick }) => {
  return (
    <div className="card-list">
      {animeList.map((anime) => (
        <Card
          key={anime.anime_id}
          animeData={anime}
          onLikeClick={() => onLikeClick(anime.anime_id)}
          onDeleteClick={() => onDeleteClick(anime.anime_id)}
        />
      ))}
    </div>
  );
};

export default CardList;
