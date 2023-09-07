
import React, { useEffect, useState } from 'react';
import Card from './Card'; // Убедитесь, что импортировали компонент Card
import axios from 'axios';

const CardList = ({ onLikeClick, onDeleteClick }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anime-facts-rest-api.herokuapp.com/api/v1');
        onFetchData(response.data.data);
      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
      }
    };

    fetchData();
  }, []);

  // Остальной код компонента CardList
};

export default CardList;
