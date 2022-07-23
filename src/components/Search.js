import React from 'react';

//Компонент для отображения поиска

function Search(props) {
  return (
    <div className="search-input-container">
      <form action="" className="search-form">
        <input className="search-input" type="text"/>
        <button className="search-btn" type="button">Найти</button>
      </form>
    </div>
  );
}

export default Search;