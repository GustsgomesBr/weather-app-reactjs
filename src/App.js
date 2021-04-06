import WeekWeather from './WeekWeather';
import './index.css';
import night_full_moon_clear from './weather-icons/night_full_moon_clear.png';

function App() {
  return (
    <div className="App">
      <main>
        <section className="week-day-month">
            <h3>QUARTA-FEIRA</h3>
            <div>
              <h1>30</h1>
              <h2>ABRIL</h2>
              <h2>2021</h2>
          </div>
        </section>
        <section className="temperature">
          <h1>20°</h1>
          <img src={night_full_moon_clear}></img>
        </section>
        <h4 id="lastweek">Semana passada</h4>
        <section className="week-weather-section">
          <WeekWeather id="1"/>
          <WeekWeather id="2"/>
          <WeekWeather id="3"/>
          <WeekWeather id="4"/>
          <WeekWeather id="5"/>
          <WeekWeather id="6"/>
          <WeekWeather id="7"/>
        </section>
      </main>
      <aside>

      </aside>
    </div>
  );
}

export default App;
