import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import FilterCountries from './components/FilterCountries';
import Countries from './components/Countries';

const App = () =>{

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState('')

  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })

  }, [])

  const handleChangeFilterCountries = (e) =>{ 
    setFilterCountries(e.target.value.toLowerCase())
  }

  const countriesToShow = filterCountries.length > 0
    ? countries.filter(e => e.name.toLowerCase().startsWith(filterCountries))
    : []

  return(    
    <main>      
      <FilterCountries 
        filterCountries={filterCountries}
        handle={handleChangeFilterCountries}       
      />
      <Countries 
        countriesToShow={countriesToShow}
        setFilterCountries={setFilterCountries}  
      />
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))