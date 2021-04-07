import WeekWeather from './WeekWeather';
import './index.css';
import {useState} from 'react'
import GetIcon from './GetIcon';

var dias_da_semana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"];
var meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL",  "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]

function App() {
  var data = new Date();
  var dia = data.getDate(data);
  var mes = data.getMonth(data);
  var ano = data.getFullYear(data);
  var wday = data.getDay(data);
  
  const [tempIcon, setTempIcon] = useState(null);

  const [temperatura, setTemperatura] = useState(0);

  async function GetWeather(city, country){
    try{
        const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=fdb83cfc5a88467a804225243210504&q=${city},${country}&aqi=no`)
        const data = await result.json();
        setTempIcon(GetIcon(data.current.condition.code));
        console.log(data.current.condition.code);
        setTemperatura(data.current.temp_c);
    }catch(error){
        console.error(error)
    }
}

GetWeather('Campo Grande', 'br');

  return (
    <div className="App">
      <main>
        <section className="week-day-month">
            <h3>{dias_da_semana[wday]}</h3>
            <div>
              <h1>{dia}</h1>
              <h2>{meses[mes]}</h2>
              <h2>{ano}</h2>
          </div>
        </section>
        <section className="temperature">
          <h1>{temperatura}°</h1>
          <img src={tempIcon} alt=""></img>
        </section>
        <section className="week-weather-section">
          <h4 id="lastweek">Semana passada</h4>
          <div className="section-week">
            <WeekWeather id="1"/>
            <WeekWeather id="2"/>
            <WeekWeather id="3"/>
            <WeekWeather id="4"/>
            <WeekWeather id="5"/>
            <WeekWeather id="6"/>
          </div>
        </section>
      </main>
      <aside>

      </aside>
    </div>
  );
}

export default App;
