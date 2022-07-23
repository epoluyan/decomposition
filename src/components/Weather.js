import React from 'react';
import Title from './Title';

//Компонент для отображения блока погоды

function WeatherCard(props) {
  return (
    <div className="weather-container list">
      <Title link={props.weather.link} name={props.weather.name}/>
      <div className="weather-content container">
        <div className="image-container-weather">{props.weather.status && <img src="#" alt={props.weather.status}></img>}</div>
        <div className="weather-text"><p className="text-temperature">{props.weather.temperature}</p></div>
        <div className="weather-text"><p className="text-weather-comment">{props.weather.text}</p></div>
      </div>
    </div>
  );
}

export default WeatherCard;