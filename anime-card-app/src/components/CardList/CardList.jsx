import React, { useState } from 'react';
import Card from '../Card';

const CardList = () => {
  // Создайте состояние для хранения списка карточек
  const [cards, setCards] = useState([]);

  // Функция для добавления новой карточки
  const addCard = () => {
    // Генерируйте случайное изображение или используйте ссылку на изображение
    const randomImage = `https://source.unsplash.com/random/${Math.random()}`;
    const newCard = {
      id: Date.now(),
      imageSrc: randomImage,
    };

    // Добавьте новую карточку в состояние
    setCards([...cards, newCard]);
  };

  // Функция для удаления карточки по ID
  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div>
      <button onClick={addCard}>Add Card</button>
      <div className="card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            onLikeClick={() => {} /* Добавьте логику лайка */}
            onDeleteClick={() => deleteCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
