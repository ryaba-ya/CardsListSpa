import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CardList({ cards }) {
  return (
    <CardListContainer>
      {cards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </CardListContainer>
  );
}

export default CardList;
