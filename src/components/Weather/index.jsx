import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getWeatherThunk } from '../../store/slices/weatcherSlice';

function Weather ({ weather, isFetching, error, getWeather }) {
  
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>Error</div>}
      {!isFetching && !error && weather.current && (
        <div>
          <h2>Погода в Києві</h2>
          <p>Температура: {weather.current.temperature_2m}°C</p>
          <p>Вітер: {weather.current.wind_speed_10m} м/с</p>
        </div>
      )}
    </>
  );
}

const mapStateToProps = ({ weatherData }) => weatherData;

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeatherThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
