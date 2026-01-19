import { useState } from "react"
import { CirclePlus } from "lucide-react"

// function to generate random ID
import { getRandomId } from "../utils/getRandomId"

// notes color
import {colorNotes} from "../constants/noteColor"

export default function Form({newNote, setNewNote, onAddNotes, onDeleteNotes}) {
  // var to close or open form background
  const [isOpen, setIsOpen] = useState(false)
  
  // array of colors that im using in the background color of notes

  // state that saves user input 
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState(colorNotes[0].value);
  const [accordionOpen, setAccordionOpen] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault()
  
  // new object with user input
  const inputNote = {id: getRandomId(), title: title, text: text, color: color}
  console.log(inputNote)
 
  // to avoide empty notes by clicking close
  if(!text) return;
  
  console.log(color);
  onAddNotes(inputNote)

  // to clear the user input after submit
  setTitle('')
  setText('')
  setIsOpen(!isOpen)
 }

 const closeButton = () => {
   setTitle('')
   setText('')
   setIsOpen(false)
 }

  return (
    <>
    <div className="cnt-nav flex justify-center mt-[40px]">
      <form onSubmit={handleSubmit}
        className="flex  items-start flex-col
        border rounded-lg border-gray-200 pl-[40px] pt-[40px] pr-[40px] bg-white sm:pt-[20px] ">
        {isOpen && 
        <input 
        className="w-full md:w-[600px] sm:w-[400px] mb-[20px] mt-[15px] text-[15px] p-[10px] focus:outline 
        focus:rounded focus:outline-yellow-200 focus:outline-2 cursor-pointer"
        type="text" 
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />}
        <textarea
        className="w-full resize-none text-[15px] p-[10px]
        focus:outline focus:rounded focus:outline-yellow-200 focus:outline-2
        cursor-pointer
        mb-[5px]
        sm:w-[400px]
        md:w-[600px] md:mb-[30px]"
        placeholder="Write your note..."
        value={text}
        onChange={(e) => {
          setText(e.target.value)}}
        onFocus={() => !isOpen && setIsOpen(true)}
        >
        </textarea>

         <div className="flex justify-end w-full pr-[2px] gap-4 items-center
         pb-[15px]
         sm:pb-[15px]
         md:pb-[30px]">
          {isOpen && <button type="button" className="hover:bg-blue-100 rounded-lg transition py-[5px] px-[10px] cursor-pointer "
          onClick={() => {
            closeButton()
            }}>
            Close
          </button>
          }
         <button type="submit" className="cursor-pointer">
            <CirclePlus
            className="text-yellow-500"/>
          </button>
          
          {/* start of accordion, to choose the color of notes */}
          <div className='border-yellow-500 border rounded-2xl h-[24px]'>
            <div 
            style={ {backgroundColor: color}}
            className="w-[22px] h-[22px] cursor-pointer rounded-2xl"
            onClick={() => setAccordionOpen(!accordionOpen)}>
            {accordionOpen && 
              <div className="w-[155px] bg-white flex flex-col gap-[5px] border-[2px] rounded-xs z-[100] border-gray-200 relative">
                  <div className="absolute left-[130px] top-[2px] text-red-300 text-[20px] cursor-pointer"
                  onClick={() => setAccordionOpen(false)}>X</div>
                  {/* colors that are possible to choose while creating a note */}
                  {colorNotes.map((color) => (
                    <div 
                      key={color.id}
                      style={{ backgroundColor: color.value }}
                      className="w-[30px] h-[30px] m-[10px] cursor-pointer"
                      onClick={() => {
                        setColor(color.value);
                        setAccordionOpen(false);
                      }}
                    />
                  ))}
                </div>}
          </div>
          </div>
        </div>
      
      </form>
      </div>
    </>
  )
}