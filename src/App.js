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
        setTemperatura(data.current.temp_c);
    }catch(error){
        console.error(error)
    }
}

  GetWeather('Campo Grande', 'br');

  var horario = data.getHours();


  if(horario >= 0 && horario <= 4){
    document.body.style = 'background: linear-gradient(to bottom, #000428, #004e92)'
  }else if(horario >= 5 && horario <= 7){
    document.body.style = 'background: linear-gradient(to top, #fdc830, #f37335)'
  }else if(horario >= 8 && horario <= 10){
    document.body.style = 'background: linear-gradient(to bottom, #00b4db, #0083b0);'
  }else if(horario >= 11 && horario <= 16){
    document.body.style = 'background: linear-gradient(to bottom, #fdc830, #f37335)'
  }else if(horario >= 17 && horario <= 19){
    document.body.style = 'background: linear-gradient(to bottom, #f12711, #f5af19)'
  }else if(horario >= 20 && horario <= 23){
    document.body.style = 'background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
  }


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
