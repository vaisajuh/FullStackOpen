import axios from 'axios'
const baseUrlC = 'https://restcountries.com/v3.1/all'
const baseUrlW = 'http://api.openweathermap.org/data/2.5/weather?q='

const getCountries = () => {
    return axios.get(baseUrlC)
}

const getWeather = (city, key) => {
    return axios.get(`${baseUrlW}${city}&APPID=${key}`)
}

const objects = {
    getCountries,
    getWeather
    }


export default objects