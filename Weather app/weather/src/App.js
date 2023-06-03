import logo from './logo.svg';
import './App.css';
import React, {useEffect , useState} from "react";
import axios from "axios";

function App() {
    
  const[tempp, getTemp] = useState('');
  const[inputCity, setTextValue] = useState('');
  const[iconstore, getIcons] = useState('');



  function weatherApp() {

    axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=5308a853cc8ba94b980e4b76ae19b913`)
    .then((response) =>{
      var tempareture = response.data.main.temp;
      getTemp((tempareture -273).toFixed(''));

      var logo = response.data.weather.icon;
      getIcons(logo);


      console.log(tempp);
    })
    
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <input type="text" value={inputCity} onChange={(e) => setTextValue(e.target.value)} id="textVal" placeholder="city name"></input>
          <button className='submit' onClick={weatherApp}>Search</button>
          <div className="time">
            <span > </span>
          </div>
        </div>
        <div className="icon">
          <div className="iBox">
            <span>{iconstore} </span>
          </div>
          <div className="para">
            <p>cloudy</p>
          </div>
        </div>
        <div className="details">
          <div className="box1">
            <div className='wind'>
              <i class="fa-solid fa-wind icons"></i>
              <p className='windPara'> 499 </p>
            </div>
            <div className='humid'>
              <i class="fa-solid fa-droplet icons"></i>
              <p className='humidPara'> 90 </p>
            </div>
            <div className='sun'>
              <i class="fa-regular fa-sun icons"></i>
              <p className='sunpara'> 0h </p>
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
