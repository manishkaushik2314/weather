import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

import axios from 'axios'

import './App.css';
import icon from './sun.png'

function App() {
  const ApiKey="a36f0c7460c051cf843a337046d3c27a";
  const [Data, setData] = useState({});
  const [InputCity, setInputCity] = useState("Pinjore");

  const getWeatherDeatails=(cityName)=>{
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid="+ApiKey;
    axios.get(apiUrl).then((res)=>{
      console.log("response",res)
      setData(res.data)

    }).catch((err)=>{
      console.log("err",err);
    })
  }
 
const handleInputChange=(e)=>{
  setInputCity(e.target.value);

}
  const handleSearch=()=>{
    getWeatherDeatails(InputCity);
  }
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">
          Weather App
          <img src={icon} alt=""  />
        </h1>
        <div className="d-grid col-4 gap-3 mt-4 forms">
          <input type="text" className="form-control" onChange={handleInputChange} />
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className="col-md-12 text-center mt-5">
        
          <div className="shadow rounded weatherResultBox">
           
            <div className="weatherDataContainer">
              
              <div className="particularData">
              <h3 className="weatherData">{Data.name} </h3>
              <h5>Country:{Data?.sys?.country}</h5>
            <h6>(City name)</h6>
            
              </div>
              <div className="particularData">
              <h3 className="weatherData">{Data?.main?.temp } °C </h3>
              <h6>feels_like {Data?.main?.feels_like} °C</h6>
            <h6>(Temperature)</h6>
              </div>
             
               <div className="particularData">
              <h3 className="weatherData">{Data?.main?.pressure } </h3>
            <h6>(Pressure)</h6>
            </div>
              <div className="particularData">
              <h3 className="weatherData">{Data?.main?.humidity } </h3>
            <h6>(Humidity)</h6>
              </div>
              <div className="particularData">
              <h3 className="weatherData">{Data?.wind?.speed } </h3>
            <h6>(Wind Speed)</h6>
              </div>
              <div className="particularData">
              <h3 className="weatherData">{Data?.visibility } metres</h3>
            <h6>(Visibility)</h6>
              </div>
              {/* <div className="particularData">
              <h3 className="weatherData">{Data.weather[0].description}</h3>
            <h6>(Weather description)</h6>
              </div> */}
            
           
            
            
            
            
           
            </div>
           

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
