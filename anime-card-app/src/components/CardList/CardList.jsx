
import React, { useEffect, useState } from 'react';
import Card from '../Card'; // Убедитесь, что импортировали компонент Card
import axios from 'axios';

const CardList = ({ onLikeClick, onDeleteClick }) => {
  const [animeList, setAnimeList] = useState([]); // Состояние для списка аниме

  // Функция для запроса данных из API и обновления состояния
  const fetchData = async () => {
    try {
      const response = await axios.get('https://anime-facts-rest-api.herokuapp.com/api/v1'); // Замените 'URL_ВАШЕГО_API' на реальный URL вашего API
      setAnimeList(response.data.data); // Сохраняем полученные данные в состоянии
    } catch (error) {
      console.error('Ошибка при получении данных из API:', error);
    }
  };

  // Вызываем fetchData при монтировании компонента
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-list">
      {animeList.map((animeData) => (
        <Card
          key={animeData.anime_id}
          animeData={animeData}
          onLikeClick={() => onLikeClick(animeData.anime_id)}
          onDeleteClick={() => onDeleteClick(animeData.anime_id)}
        />
      ))}
    </div>
  );
};

export default CardList;
