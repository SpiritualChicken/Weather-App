
import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites';
import CityWeather from './components/CityWeather';

// API call to city
//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key} 



function App() {

  const [page, setPage] = useState("/")
  const apiKey = "cc2551d6f015c0c9fc75ac14012f75dc";
  const majorCities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Tokyo' },
    { id: 3, name: 'Shanghai' },
    { id: 4, name: 'São Paulo' },
    { id: 5, name: 'Singapore' },
    { id: 6, name: 'Beijing' },
    { id: 7, name: 'Sydney' },
    { id: 8, name: 'London' },
    { id: 9, name: 'Los Angeles' },
    { id: 10, name: 'Istanbul' },
  ];

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Router>
      <NavBar onChangePage={setPage} />
        <Switch>
          <Route path="/favourites"> 
            <Favourites />
          </Route> 
          <Route exact path="/"> 
            <div className="App">
              <Home majorCities={majorCities} />
            </div>
          </Route>
          <Route path="/city/:cityName">
            <CityWeather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
