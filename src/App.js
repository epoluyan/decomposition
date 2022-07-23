import './App.css';
import options from './components/const/forDate';
import NewsTabs from './components/NewsTabs';
import NewsList from './components/NewsList';
import ExchangeRates from './components/ExchangeRates';
import PartnerAdv from './components/PartnerAdv';
import Search from './components/Search';
import InlineBanner from './components/InlineBanner';
import Weather from './components/Weather';
import Map from './components/Map';
import BroadcastList from './components/BroadcastList';
import VisitList from './components/VisitList';
import TVList from './components/TVList';

function App(props) {
  const date = new Date();

  return (
    <div className="main-page">
        <div className="news-container">
          <div>
            <NewsTabs titles={props.newsTags}>
              <div className="news-date">
                <span>{date.toLocaleString('ru', options)}</span>
              </div>
            </NewsTabs>
            <NewsList news={props.news}/>
            <ExchangeRates quotes={props.quotes}/>
          </div>
          <div>
            <PartnerAdv information={props.information}/>
          </div>
        </div>
        <div className="search-container container">
          <NewsTabs titles={props.searchTags}/>
          <Search/>
          <div className="comment-container"><span>{props.searchComment}</span></div>
        </div>
        <div className="advertisement-container container">
          <InlineBanner advertisement={props.advertisement}/>
        </div>
        <div className="cards-container container">
          <Weather weather={props.weather}/>
          <Map map={props.map}/>
          <BroadcastList broadcast={props.broadcast}/>
          <VisitList visited={props.visited}/>
          <TVList tv={props.tv}/>
        </div>
    </div>
  );
}

export default App;
