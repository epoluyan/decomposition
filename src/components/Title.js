import React from 'react';

//Компонент заголовка

function Title(props) {
  return <a href={props.link}>{props.name}</a>
}

export default Title;