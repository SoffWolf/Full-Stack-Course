import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault()
    const obj = {name: newName}
    setPersons(persons.concat(obj))
    setNewName('');
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


// import React, { useState } from 'react'
// import Note from './Notes'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   ) 
//   const [showAll, setShowAll] = useState(true)

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }
  
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote}
//           onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>   
//     </div>
//   )
// }

// export default App 