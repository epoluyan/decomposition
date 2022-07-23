import React from 'react';

//Компонент для курса валют

function Quotes(props) {
  return (
    <div className="quotes-container container">
      <ul className="quotes-list">{props.quotes.map((item, index) => {
        return (
          <li key={index} className="quotes-item">
            <a href={item.link}>{item.name} {item.course}</a>
            <span className="quotes-changes">{item.changes}</span>
          </li>
        )
      })}</ul>
    </div>
  );
}

export default Quotes;