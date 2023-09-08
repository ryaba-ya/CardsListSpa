import React, { useState } from 'react';
import styled from 'styled-components';
import CardList from './CardList';

const AppContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 20px;
`;

function App() {
  const [cards, setCards] = useState([]); // Здесь будет ваш список карточек

  // Функции для работы с карточками, добавления, удаления и лайков

  return (
    <AppContainer>
      <Title>Список карточек</Title>
      <CardList cards={cards} />
      {/* Добавьте сюда компоненты LikeButton, DeleteButton и FilterButton */}
    </AppContainer>
  );
}

export default App;
