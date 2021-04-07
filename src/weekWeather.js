import GetLastWeek from './GetLastWeek';
import moment from 'moment'
import { useState } from 'react';
import GetIcon from './GetIcon'

var dias_da_semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

function WeekWeather(props) {
    var getweat = GetLastWeek();

    var historyDays = moment().subtract(props.id, 'days');
    var Xmas95 = new Date(historyDays);

    var mes = Xmas95.getMonth();
    var dia = Xmas95.getDate();
    var ano = Xmas95.getFullYear();
    mes++;

    
    const [tempOldIcon, setOldTempIcon] = useState(null);

    const [oldTemperature, setOldTemperature] = useState(0);

    async function GetHistoryWeather(city){
      try{
          const result = await fetch(`http://api.weatherapi.com/v1/history.json?key=fdb83cfc5a88467a804225243210504&q=${city}&dt=${ano}-${mes}-${dia}`)
          const data = await result.json();
          setOldTempIcon(GetIcon(data.forecast.forecastday[0].day.condition.code));
          setOldTemperature(data.forecast.forecastday[0].day.maxtemp_c);

      }catch(error){
          console.error(error)
      }
  }


  GetHistoryWeather('Campo Grande');

    return (
      <section className="week-Weather-item">
        <h1>{dias_da_semana[getweat[props.id]]}</h1>
        <img src={tempOldIcon} alt=""></img>
        <h1>{oldTemperature}°</h1>
      </section>
    );
  }
  
  export default WeekWeather;
  