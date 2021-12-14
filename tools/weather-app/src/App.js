import React, { useState } from 'react';

// grab api key and base url from openweathermap.org
const api = {
  key: '5484c320271521c57a7d43521a271d85',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`
  }

  return (
    <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 50) ? 'App warm' : 'App') : 'App'}>
      {/*Navbar*/}
      <nav class="nav">
        <ul id="directory" className="nav">
          <li><a href="default.asp">Weather</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Traffic</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </nav>
      <main>

        {/* Todays Weather */}
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter a city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°F
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : (
          <div className="weather-box">
          <div className="temp">
            WTHR
          </div>
          
        </div>
        )}
      </main>
    </div>
  );
}

export default App;