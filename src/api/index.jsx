import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://api.open-meteo.com/v1/forecast?latitude=50.4547&longitude=30.5238&current=temperature_2m,wind_speed_10m&timezone=auto',
});

export const getWeather = ()=> axiosInstance.get('')