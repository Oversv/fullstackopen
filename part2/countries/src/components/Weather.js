import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({city}) => {

    const [weather, setWeather] = useState(null)

    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: {city}
    }   

    useEffect(() => {

        axios
          .get('http://api.weatherstack.com/current', {params})
          .then(response => {      
            setWeather(response.data.current)
          })
    
      }, [])

    if(weather === null){
        return <p>Loading</p>
    }
    
    return (
        <section>
            <h2>Weather in {city}</h2>
            <p><strong>temperature:</strong> {weather.temperature} celsius</p>
            <img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]}/>
            <p><strong>wind:</strong>{weather.wind_speed} mph direction {weather.wind_dir}</p>
        </section>
    )
}

export default Weather
