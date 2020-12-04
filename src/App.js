import React, { useEffect, useState } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import ForecastTab from './pages/forecastTab/ForecastTab';
import axios from 'axios';
import './App.css';

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');



  useEffect(() => {

    async function fetchData() {
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
        console.log(result.data);
        setWeatherData(result.data);
      } catch (e) {
        console.error(e);
      }
    }

    if (location) {
      fetchData();
    }

  }, [location]);

  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar setLocationHandler={setLocation} />

          <span className="location-details">
            {weatherData &&
              <>
                <h2>{weatherData.weather[0].description}</h2>
                <h3>{weatherData.name}</h3>
                <h1>{weatherData.main.temp}</h1>
              </>
            }
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu />

          <div className="tab-wrapper">
            <ForecastTab coordinates={weatherData && weatherData.coord} />
          </div>
        </div>

        <MetricSlider />
      </div>
    </>
  );
}

export default App;
