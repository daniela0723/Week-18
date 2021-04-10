import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Weather() {
  //API Key is undefined when called from .env
  //const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        //`https://api.openweathermap.org/data/2.5/weather?zip=89030,us&appid=${API_KEY}&units=imperial`
        `https://api.openweathermap.org/data/2.5/weather?zip=89030,us&appid=dfbf931af21c1d30725fdb26f81f0a53&units=imperial`
      );
      setTemperature(Math.round(res.data.main.temp));
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      setWeatherIcon(res.data.weather[0].icon);
      console.log(res.data);
    } catch (error) {
      console.error(`Unable to retrieve weather data. ${error}`);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="Weather">
      <h1>{cityName}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
        alt="Current Temperature Icon"
      />
      <h2>{temperature}ºF</h2>
      <h2>{weather}</h2>
    </div>
  );
}

export default Weather;
