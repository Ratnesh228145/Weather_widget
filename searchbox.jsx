import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({updateInfo}){
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

 const API_URL = "http://api.openweathermap.org/data/2.5/weather";
 const API_KEY = "d6fe6bf774ca53a00f33f4e155a50f7a";

  let getWeatherInfo = async() =>{
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };
      console.log(result);
      return result;
    }catch(err){
        throw err;
       }
    
  };

  let handleChange= (evt) =>{
    setCity(evt.target.value);
  };

  let handleSubmit = async(evt) => {
    try{
      evt.preventDefault();
      console.log(city);
      setCity("");
      getWeatherInfo();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    }catch(err){
      setError(true);
    }
    };
    
    return(
      <div className='searchBox'>
        
          <form onSubmit={handleSubmit}>
               <TextField id="city" label="city Name" variant="outlined" required value={city} onChange={handleChange}/>
               <br></br>
               <br></br>
               <Button variant="contained" type='submit'>Search</Button>

              {error && <p style={{color:"red"}}>No such place exist!</p>}
          </form>
      </div>
    );
}

export default SearchBox;