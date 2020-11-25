import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value);
  }


  const inTheBook = (book, name) => 
  book.reduce((total, book1) => { if (book1.name === name){total = total + 1};return total}, 0)

  const addName = (event) => {
    event.preventDefault();
    if (inTheBook(persons, newName) > 0){alert(`${newName} is already in the phonebook`)}
    else{
      const obj = {name: newName}
      setPersons(persons.concat(obj))
      setNewName('');
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <p>{person.name}</p>)}
      </ul>
      
    </div>
  )
}

export default App

