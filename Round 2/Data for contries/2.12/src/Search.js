import React, { useState } from 'react'

const Search = (props) => {
  let countries = props.countries
  let setcountries = props.setcountries
  const [newSearch, setNewSearch] = useState('')
  const [countries_num, set_countries_num] = useState(props.countries.length)
  

  const handleChange = (event) => {
    event.preventDefault();
    setNewSearch(event.target.value);
    set_countries_num(countries_filtered.length);
  }

  const havePattern = (obj, pattern) => {
    let n = (obj.name.toLowerCase()).search(pattern);
    if (n !== -1){
      return true
    }
    return false
  }

  let countries_filtered = countries.filter(country => havePattern(country, newSearch))
  console.log("number of countries match: ", countries_filtered.length)

  if (countries_filtered.length > 10){
    return  (
      <div>
          <div>
              <input value={newSearch} onChange={handleChange}/>
          </div>
        <h2>Search result</h2>
        <ul>
          Please be more specific.
        </ul> 
      </div>
    )
  }
  else if (countries_filtered.length === 0){
    console.log('countries number 0')
    return (
      <div>
          <div>
              <input value={newSearch} onChange={handleChange}/>
          </div>
        <h2>Search result</h2>
        <ul>
          No countries found.
        </ul> 
      </div>
    )
  }
  else if (countries_filtered.length === 1){
    console.log('countries number 1');
    return (
      <div>
          <div>
              <input value={newSearch} onChange={handleChange}/>
          </div>
        <h2>Search result</h2>

          <h1>{countries_filtered.map(country => <p>{country.name}</p>)}</h1>
          <h4>Capital: </h4> {countries_filtered.map(country => <p>{country.capital}</p>)}
          <h4>Population: </h4> {countries_filtered.map(country => <p>{country.population}</p>)}
          <h3>Language: </h3>
          {console.log(countries_filtered[0].languages)}
          <ul>
            {countries_filtered[0].languages.map(language => <li>{language.name}</li>)}
          </ul>
          <img src = {countries_filtered[0].flag} alt={'Flag'}></img>
      </div>
    )
  }
  else{
    return (
      <div>
          <div>
              <input value={newSearch} onChange={handleChange}/>
          </div>
        <h2>Search result</h2>
        <ul>
          {countries_filtered.map(country => <p>{country.name} </p>)}
        </ul> 
      </div>
    )
  }
  
}

export default Search

