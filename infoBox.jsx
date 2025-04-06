import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css";



export default function InfoBox({info}){
  const INIT_URl="https://plus.unsplash.com/premium_photo-1664127685066-910c33d0ce5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww";
  const HOT_URL = "https://images.unsplash.com/photo-1645235142939-096560a17aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1biUyMGltYWdlfGVufDB8fDB8fHww";
  const RAIN_URL = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";
    
    return(
        <div className="infoBox">
           
        <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp>15 ? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature= {info.temp}&deg;C</p>
          <p>Humidity= {info.humidity}</p>
          <p>Min Temp= {info.tempMin}&deg;C </p>
          <p>Max Temp= {info.tempMax}&deg;C </p>
          <p>The weather can be describe as<i>{info.weather} </i> feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
       </div>
       </div>
    );
}