import React from 'react';
import Title from './Title';

//Компонент для отображения карты

function MapCard(props) {
  return (
    <div className="map-container list">
      <Title link={props.map.link} name={props.map.name}/>
      <p className="text-list">{props.map.text}</p>
    </div>
  );
}

export default MapCard;