import axios from 'axios';

const apiKey = '712b532192d193f871736387fb9b05dd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}