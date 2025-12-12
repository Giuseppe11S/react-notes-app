import { useState } from 'react'
import { useEffect } from 'react';
import Noteitem from '../components/NoteItem'

import exampleData from '../data/exampleNotes'

export default function NoteList({newNote, onDeleteNotes}) {
  
  // array of colors that im using in the background color of notes
  const randomColor = ['#D1FAE5', '#FEF3C7','#FCE7F3','#DBEAFE','#F3E8FF']

  // rendering notes items
  const renderingNote = () => (
    newNote.map((note) => {
      // it generates random color
    const selectColor = randomColor[Math.floor(Math.random()*randomColor.length)]
    return <div key={note.id} 
         style={{ backgroundColor: `${selectColor}` }}
         className={`rounded-xl w-[300px] h-[150px] py-[15px] px-[20px] relative
         overflow-y-scroll [scrollbar-width:none] -ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 
         sm:w-[250px]
         sm:h-[120px]
         `}>
          <Noteitem 
          title={note.title}
          text={note.text}
          id={note.id}
          onDeleteNotes={onDeleteNotes}
          />
      </div>
      })
  )

  return (
    <>
    <div className='flex flex-wrap sm:justify-center my-[80px] px-2  gap-4
    sm:mt-[40px]'>
      {renderingNote()}
    </div>
    </>
  )
}