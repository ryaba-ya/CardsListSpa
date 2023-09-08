import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    // Выполните HTTP-запрос к API для получения случайного изображения собаки
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        // Обработка успешного ответа и установка URL-адреса изображения в состоянии
        setDogImage(response.data.message);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      <h1>Случайная собака</h1>
      {dogImage && <img src={dogImage} alt="Случайная собака" />}
    </div>
  );
}

export default App;

