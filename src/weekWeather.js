import day_clear from './weather-icons/day_clear.png';

var dias_da_semana = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"]

function WeekWeather(props) {
    return (
      <section className="week-Weather-item">
        <h1>{dias_da_semana[props.id]}</h1>
        <img src={day_clear}></img>
        <h1>31°</h1>
      </section>
    );
  }
  
  export default WeekWeather;
  