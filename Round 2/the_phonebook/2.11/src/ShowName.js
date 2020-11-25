import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])  
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value);
  }

  const handleChange2 = (event) => {
    event.preventDefault()
    setNewNum(event.target.value);
  }

  const handleChange3 = (event) => {
    event.preventDefault()
    setNewSearch(event.target.value);
  }


  const inTheBook = (book, name) => 
  book.reduce((total, book1) => { if (book1.name === name){total = total + 1};return total}, 0)

  const addName = (event) => {
    event.preventDefault();
    if (inTheBook(persons, newName) > 0){alert(`${newName} is already in the phonebook`)}
    else{
      const obj = {name: newName, number: newNum}
      setPersons(persons.concat(obj))
      setNewName('');
      setNewNum('');
      setNewSearch('');
    }
  }

  const havePattern = (obj, pattern) => {
    let n = (obj.name.toLowerCase()).search(pattern);
    if (n !== -1){
      return true
    }
    return false
  }

  let persons_filtered = persons.filter(person => havePattern(person, newSearch))



  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with: <input value={newSearch} onChange={handleChange3}/>
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newNum} onChange={handleChange2}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Search result</h2>
      <ul>
        {persons_filtered.map(person => <p>{person.name}  {person.number}</p>)}
      </ul>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <p>{person.name}  {person.number}</p>)}
      </ul>
      
    </div>
  )
}

export default App

