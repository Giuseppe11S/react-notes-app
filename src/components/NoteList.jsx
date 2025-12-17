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
         className={`rounded-xl h-[150px] py-[15px] px-[20px] relative shrink-0
         overflow-y-scroll [scrollbar-width:none] -ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
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
      })
  )

  return (
    <>
    <div className='flex flex-wrap justify-center my-[80px] px-2 gap-4
    <!-- MOBILE -->
    sm:mt-[40px]
    <!-- DESKTOP -->'>
      {renderingNote()}
    </div>
    </>
  )
}