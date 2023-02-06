import { useState, useEffect } from 'react'
import components from './components/components'
import countryService from './services/countries'
import './index.css'

function App() {
  const [countries, setCountries] = useState(null)
  const [weather, setWeather] = useState(null)
  const [value, setValue] = useState("")
  
  useEffect(() => {
    countryService
      .getCountries()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect (() => {
    if (weather) {
      setWeather(weather)
    }
  })

  if (!countries) {
    return null
  }

  const getWeather = (props) => {
    const api_key = process.env.REACT_APP_API_KEY
    countryService
      .getWeather(props, api_key)
      .then(response => {
        setWeather(response.data)
        
      })
  }

  const handleButton = (props) => {
    const capital = props.capital
    setValue(props.name.common)
    getWeather(capital)
    setWeather(props.capital)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <components.Search value={value} handleChange={handleChange} />
      <components.Filter value={value} weather={weather} countries={countries} handleButton={handleButton}/>
    </div>
  );
}

export default App;
