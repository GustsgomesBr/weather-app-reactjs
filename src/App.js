import weekWeather from './weekWeather';

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
        <section className="week-weather">
          <weekWeather />
        </section>
      </main>
      <aside>

      </aside>
    </div>
  );
}

export default App;
