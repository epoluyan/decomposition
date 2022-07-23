import React from 'react';
import Title from './Title';

//Компонент для списка ссылок с посещаемым

function VisitedCard(props) {
  return (
    <div className="visited-container list">
      <Title link={props.visited.link} name={props.visited.name}/>
      <div className="visited-list-container container">
        <ul className="visited-list">{props.visited.items.map((item, index) => {
          return (
            <li key={index} className="visited-item">
              <a href={item.link}>{item.name}</a>
              <span className="visited-channel"> - {item.text}</span>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
}

export default VisitedCard;