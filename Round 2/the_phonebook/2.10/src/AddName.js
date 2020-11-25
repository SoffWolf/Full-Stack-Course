import React, { useState } from 'react'

const AddName = (props) => {
   let persons = props.persons
   let setPersons = props.setPersons

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value);
  }

  const handleChange2 = (event) => {
    event.preventDefault()
    setNewNum(event.target.value);
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
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
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

      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <p>{person.name}  {person.number}</p>)}
      </ul>
      
    </div>
  )
}

export default AddName

