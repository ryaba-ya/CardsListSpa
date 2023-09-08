import React, { useState } from 'react';
import styled from 'styled-components';
import CardList from './components/CardList/CardList';

const AppContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 20px;
`;

function App() {
  eslint-disable-next-line
  const [cards, setCards] = useState([]); // eslint-disable-next-line

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

