import React from 'react';
import Title from './Title';

//Компонент для ссылок новостей по местоположению

function Tags(props) {
  return (
    <div className="title-container container">
        <ul className="title-list">{props.titles.map((item, index) => {
            return <li key={index} className="title-item"><Title {...item}/></li>
        })}</ul>
        {props.children}
    </div>
  );
}

export default Tags;