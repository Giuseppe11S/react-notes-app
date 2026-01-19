import { useState } from 'react'
import { useEffect } from 'react';
import Noteitem from '../components/NoteItem'
import FullScreenCard from './FullScreenCard';

import exampleData from '../data/exampleNotes'

export default function NoteList({newNote, onDeleteNotes, }) {

    const [selectedNote, setSelectedNote] = useState(false);

  // rendering notes items
  const renderingNote = () => (
    newNote.map((note) => {
      // it generates random color
    // const selectColor = randomColor[Math.floor(Math.random()*randomColor.length)]
    return <div key={note.id} 
         style={{ backgroundColor: note.color }}
         onClick={() => setSelectedNote(note)}
         className={`rounded-xl min-h[150px]] py-[15px] px-[20px] relative shrink-0 cursor-pointer
         <!-- MOBILE -->
         w-[45%]
         <!-- Desktop -->
         md:w-1/3
         `}>
          <Noteitem 
          title={note.title}
          text={note.text}
          id={note.id}
          onDeleteNotes={onDeleteNotes}
          />
      </div>
      }
    )
  )

  return (
    <>
    <div className='flex flex-wrap justify-center my-[80px] px-2 gap-4 items-start
    <!-- MOBILE -->
    sm:mt-[40px]
    <!-- DESKTOP -->'>
      {renderingNote()}
    </div>
    {/* Overlay FullScreenCard */}
    {selectedNote && (
      <FullScreenCard
      note={selectedNote}
      onClose={() => setSelectedNote(!selectedNote)}
      />
    )}
    </>
  )
}