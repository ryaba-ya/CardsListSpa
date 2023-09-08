// Card.js

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


function Card(props) {
  return (
      <div className="card">
          <div className="card-body">
              <img src={props.imgLink} alt={props.title}/>
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text">{props.description}</p>
          </div>
          <div className="card-footer">
              <span className="card-price">${props.price}</span>
              <button className="card-add">Заказать</button>
          </div>
      </div>
  );

}

export default Card;
