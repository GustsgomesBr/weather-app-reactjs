import WeekWeather from './WeekWeather';
import './index.css';


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
        </section>
        <section className="week-weather-section">
          <WeekWeather id="0"/>
          <WeekWeather id="1"/>
          <WeekWeather id="2"/>
          <WeekWeather id="3"/>
          <WeekWeather id="4"/>
          <WeekWeather id="5"/>
          <WeekWeather id="6"/>
        </section>
      </main>
      <aside>

      </aside>
    </div>
  );
}

export default App;
