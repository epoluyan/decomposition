import React from 'react';
import Title from './Title';

//Компонент для рекламы партнера

function CardImage(props) {
  return (
    <div className="additional-container container">
      <div className="image-container">{props.information.image && <img src={props.information.image} alt={props.information.name}></img>}</div>
      <Title link={props.information.link} name={props.information.name}/>
      <p className="text-list">{props.information.text}</p>
    </div>
  );
}

export default CardImage;