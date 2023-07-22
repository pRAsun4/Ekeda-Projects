import logo from './logo.svg';
import './App.css';
import React, {useEffect , useState} from "react";
import axios from "axios";

function App() {
    
  const[tempp, getTemp] = useState('');
  const[inputCity, setTextValue] = useState('');
  const[iconstore, getIcons] = useState('');
  const[air, getAir] = useState('');
  const[humidity, getHumidity] = useState('');
  const[sun, getSun] = useState('');
  const[weather, getWeather] = useState('');
  
  
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=5308a853cc8ba94b980e4b76ae19b913`
        );
        const data = await response.json();

        const sunriseTimestamp = data.sys.sunrise;
        const sunsetTimestamp = data.sys.sunset;

        const sunriseTime = new Date(sunriseTimestamp * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        const sunsetTime = new Date(sunsetTimestamp * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

        const durationMs = sunsetTimestamp * 1000 - sunriseTimestamp * 1000;
        const duration = new Date(durationMs).toISOString().substr(11, 8);

        setSunrise(sunriseTime);
        setSunset(sunsetTime);
        setDuration(duration);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);
  


    


  function weatherApp() {


    axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=5308a853cc8ba94b980e4b76ae19b913`)
    .then((response) =>{
      var tempareture = response.data.main.temp;
      getTemp((tempareture -273).toFixed(''));

      let wind = response.data.wind.speed;
      getAir((wind*3.6).toFixed(''));
      console.log(air + "air");
      
      let rh = response.data.main.humidity;
      getHumidity(rh);
      console.log(humidity +"humid");

      let description = response.data.weather[0].description;
      getWeather(description);
      console.log(weather);
      let logo = response.data.weather[0].icon;
      getIcons(logo);




      
      console.log(duration + "time");
      // console.log(sunset);

      console.log(tempp + "temp");
    })

  
      
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <input type="text" value={inputCity} onChange={(e) => setTextValue(e.target.value)} id="textVal" placeholder="city name"></input>
          <button className='submit' onClick={weatherApp}>Search</button>
          <div className="time">
            <span id='write' > </span>
          </div>
        </div>
        <div className="icon">
          <div className="iBox">
            <img src={`https://openweathermap.org/img/wn/${iconstore}@4x.png`} alt="Weather" className="image" />
          </div>
          <div className="para">
            <p>{weather}</p>
          </div>
        </div>
        <div className="details">
          <div className="box1">
            <div className='wind'>
              <i class="fa-solid fa-wind icons"></i>
              <p className='windPara'> {air} </p>
            </div>
            <div className='humid'>
              <i class="fa-solid fa-droplet icons"></i>
              <p className='humidPara'> {humidity} </p>
            </div>
            <div className='sun'>
              <i class="fa-regular fa-sun icons"></i>
              <p className='sunPara'> {duration + "hrs"} </p>
            </div>
            
          </div>
          <div className="temp">
            <p id='temp'>{tempp + '°C'}</p>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
