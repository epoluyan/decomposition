import React from 'react';
import Title from './Title';

//Компонент для списка с эфирами

function BroadcastCard(props) {
  return (
    <div className="broadcast-container list">
      <Title link={props.broadcast.link} name={props.broadcast.name}/>
      <div className="broadcast-list-container container">
        <ul className="broadcast-list">{props.broadcast.items.map((item, index) => {
          return (
            <li key={index} className="broadcast-item">
              <div className="broadcast-icon">ᐅ</div>
              <a href={item.link}>{item.name}</a>
              <span className="broadcast-channel">{item.channel}</span>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
}

export default BroadcastCard;