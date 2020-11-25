import React, { useState } from 'react'

const Show = (props) => {
   

  return (
    <div>
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
        {countries.map(countrie => <p>{countrie.name}  {countrie.number}</p>)}
      </ul>
      
    </div>
  )
}

export default AddName

