import axios from 'axios';

const API_KEY='4447bb19b3723dd3b884010caecfd3bb';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`; 
    const request = axios.get(url);

    console.log('Request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
} 