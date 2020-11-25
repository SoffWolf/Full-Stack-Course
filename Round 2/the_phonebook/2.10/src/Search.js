import React, { useState } from 'react'

const Search = (props) => {
  const [newSearch, setNewSearch] = useState('')

  const handleChange3 = (event) => {
    event.preventDefault()
    setNewSearch(event.target.value);
  }

  const havePattern = (obj, pattern) => {
    let n = (obj.name.toLowerCase()).search(pattern);
    if (n !== -1){
      return true
    }
    return false
  }

  let persons_filtered = props.persons.filter(person => havePattern(person, newSearch))


  return (
    <div>
        <div>
            filter shown with: <input value={newSearch} onChange={handleChange3}/>
        </div>
      <h2>Search result</h2>
      <ul>
        {persons_filtered.map(person => <p>{person.name}  {person.number}</p>)}
      </ul> 
    </div>
  )
}

export default Search

