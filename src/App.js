import WeekWeather from './WeekWeather';
import './index.css';
import night_full_moon_clear from './weather-icons/night_full_moon_clear.png';

var dias_da_semana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"];
var meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL",  "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
function App() {
  var data = new Date;
  var dia = data.getDate(data);
  var mes = data.getMonth(data);
  var ano = data.getFullYear(data);
  var wday = data.getDay(data);


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
          <h1>20°</h1>
          <img src={night_full_moon_clear}></img>
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
            <WeekWeather id="7"/>
          </div>
        </section>
      </main>
      <aside>

      </aside>
    </div>
  );
}

export default App;
