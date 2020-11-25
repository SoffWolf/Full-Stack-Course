import React, { useState } from 'react'
import AddName from './AddName'
import Search from './Search'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])  

  return (
    <div>
      <h2>Phonebook</h2>
      <AddName persons={persons} setPersons={setPersons}></AddName>
      <h1>Search section</h1>
      <Search persons={persons}></Search>
    </div>
  )
}

export default App

