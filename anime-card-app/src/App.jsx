import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    // Выполните HTTP-запрос к API для получения нескольких случайных изображений собак
    axios
      .get('https://dog.ceo/api/breeds/image/random/5') // Здесь 5 - количество изображений
      .then((response) => {
        // Обработка успешного ответа и установка URL-адресов изображений в состоянии
        setDogImages(response.data.message);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error('Error fetching dog images:', error);
      });
  }, []);

  return (
    <div>
      <h1>Случайные собаки</h1>
      <div className="card-container">
        {dogImages.map((imageUrl, index) => (
          <div key={index} className="card">
            <img src={imageUrl} alt={`Собака ${index + 1}`} />
          </div>
        ))}
      </div>
      <style>
        {`
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .card {
            width: 200px; /* Здесь можно установить желаемую ширину карточки */
            margin: 10px;
          }

          .card img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
}

export default App;
