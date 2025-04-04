import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherData(cities) {
  const promises = cities.map(async city => {
    const res = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    return {
      name: city,
      temp: res.data.main.temp,
      humidity: res.data.main.humidity,
      condition: res.data.weather[0].main,
    };
  });
  return await Promise.all(promises);
}
