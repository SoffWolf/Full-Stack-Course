import React, { useState , useEffect } from 'react'
import Search from './Search'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Find countries:</h1>
      <Search countries={countries}></Search>
    </div>
  )
}

export default App

