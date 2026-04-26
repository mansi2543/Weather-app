 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
 
 export default function InfoBox({info}){
    const INIT_URl = "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=800&q=60";
    const HOT_URL="https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=60";
    const COLD_URL="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=800&q=60";
    const RAIN_URL="https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?auto=format&fit=crop&w=800&q=60";
    return(
        <div className="InfoBox">
        <div className="cardContainer">
            
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
        info.humidity >80 
        ? RAIN_URL
        :info.temp > 15
        ? HOT_URL
        :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
        info.humidity >80 
        ? <ThunderstormIcon/>
        :info.temp > 15
        ? <WbSunnyIcon/>
        : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
            <div>Humidity={info.humidity}</div>
            <div>Min Temp={info.tempMin}&deg;C</div>
            <div>Max Temp={info.tempMax}&deg;C</div>
            <div>The weather can be described as <i>{info.weather}</i> and feels like ={info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    )
 }