import day_clear from './weather-icons/day_clear.png';
import GetWeather from './GetWeather'
var dias_da_semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

function WeekWeather(props) {
    var getweat = GetWeather();
    
    return (
      <section className="week-Weather-item">
        <h1>{dias_da_semana[getweat[props.id]]}</h1>
        <img src={day_clear}></img>
        <h1>31°</h1>
      </section>
    );
  }
  
  export default WeekWeather;
  