// Card.js

import React from 'react';
import Button  from '../LikeBtn/likeBtn';




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
              <Button/>
          </div>
      </div>
  );

}

export default Card;
