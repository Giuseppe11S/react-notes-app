import { useEffect, useState } from 'react'
import './index.css'

// import components
import NavBar from './components/NavBar'
import Form from './components/Form'
import NoteList from './components/NoteList'

// utilis just as debug

function App() {

  // state that saves user input
  const [newNote, setNewNote] = useState([])

  // charge it at the beginning
  useEffect(() => {
    const saved = localStorage.getItem("notes")
    if (saved) setNewNote(JSON.parse(saved))
  }, [])

  // save it onnly when it change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(newNote))
  }, [newNote])
  
  // function to delete notes
  const handleDeleteNotes = (id) => (
    // keep only the notes whose id does not match the one to delete
    setNewNote(prev => prev.filter(prev => prev.id !== id))
  )
  
  // function to add new note and keeping the prevoius
  const handleNewNotes = (note) => {
    console.log("Aggiungo nota:", note)
    setNewNote(prev => [...prev, note])
  }

  return (
    <>
      <NavBar />
      <Form 
      newNote={newNote}
      setNewNote={setNewNote} 
      onAddNotes={handleNewNotes}
      onDeleteNotes={handleDeleteNotes}
      />
      <NoteList 
      newNote={newNote}
      setNewNote={setNewNote} 
      onDeleteNotes={handleDeleteNotes}
      />
    </>
  )
}

export default App
