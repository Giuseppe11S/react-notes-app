import { useState } from "react"
import FullScreenCard from "./FullScreenCard"
// props for NoteList
export default function NoteItem({title, text, id, onDeleteNotes}) {

  const [isSelcted, setSelected] = useState(false)
  
  return (
    <>
     <span className="absolute cursor-pointer text-red-300 
     <!-- MOBILE -->
     left-[88%] top-[-5px] text-[25px]
     sm:left-[92%] sm:text-[30px]
     <!-- Desktop -->
     md:left-[95%] md:top-[-5px] md:text-[25px]"
     onClick={(e) => { 
      onDeleteNotes(id)
      // in order to don't open the overlay
      e.stopPropagation()
     }}>x</span>
     <h3 className="font-bold">{title}</h3>
     <p className="font-extralight text-[13px] pt-[5px] break-all line-clamp-6
     <!-- Mobile -->
     w-[95%]
     <!-- Desktop -->
     md:line-clamp-8
     md:w-[95%]
     md:text-[16px]
     ">{text}</p>
    </>
  )
}