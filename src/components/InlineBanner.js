import React from 'react';

//Компонент инлайн баннера

function Advertisement(props) {
  return (
    <React.Fragment>
      {props.advertisement.image && <a href={props.advertisement.link}><img src={props.advertisement.image} alt={props.advertisement.name}></img></a>}
    </React.Fragment>
  );
}

export default Advertisement;