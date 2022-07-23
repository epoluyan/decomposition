import React from 'react';

//Компонент для списка новостей

function News(props) {
  console.log(props)
  return (
    <div className="news-container container">
      <ul className="news-list">{props.news.map((item, index) => {
        return (
          <li key={index} className="news-item">
            <div className="image-container-news">{item.image && <img src={item.image} alt={item.name}></img>}</div>
            <a href={item.link}>{item.name}</a>
          </li>
        )
      })}</ul>
    </div>
  );
}

export default News;