import React, { useState , useEffect } from 'react'
import AddName from './AddName'
import Search from './Search'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')  

  return (
    <div>
      <AddName persons={persons} setPersons={setPersons}></AddName>
      <h1>Search section</h1>
      <Search persons={persons}></Search>
    </div>
  )
}

export default App

