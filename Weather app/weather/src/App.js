import logo from './logo.svg';
import './App.css';

function App() {

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q={inputCity}&appid=5308a853cc8ba94b980e4b76ae19b913`
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <input type="text" id="textVal" placeholder="city name"></input>
          <div className="time">
            <span>16^C</span>
          </div>
        </div>
        <div className="icon">
          <div className="iBox">

          </div>
          <div className="para">
            <p>cloudy</p>
          </div>
        </div>
        <div className="details">
          <div className="wind">

          </div>
          <div className="temp">
            <p>3^C</p>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
