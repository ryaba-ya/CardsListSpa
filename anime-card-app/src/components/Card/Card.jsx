import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardInfo = styled.div`
  margin-top: 10px;
  text-align: center;
`;

function Card({ cardData }) {
  return (
    <CardContainer>
      <CardImage src={cardData.image} alt={cardData.title} />
      <CardInfo>
        <h2>{cardData.title}</h2>
        <p>{cardData.description}</p>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
