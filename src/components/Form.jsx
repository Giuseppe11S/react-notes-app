import { useState } from "react"
import { CirclePlus } from "lucide-react"

// function to generate random ID
import { getRandomId } from "../utils/getRandomId"

export default function Form({newNote, setNewNote, onAddNotes, onDeleteNotes}) {
  // variabile to close or open form background
  const [isOpen, setIsOpen] = useState(false)

  // state thtat saves user input 
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  
  // new object with user input
  const inputNote = {id: getRandomId(), title: title, text: text}
  console.log(inputNote)
 
  // to avoide empty notes by clicking close
  if(!text) return;
  
  onAddNotes(inputNote)

  // to clear the user input after submit
  setTitle('')
  setText('')
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
        className="w-full md:w-[600px] sm:w-[400px] mb-[20px] text-[15px] p-[10px] focus:outline 
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
        <!-- Mobile -->
        mb-[5px]
        sm:w-[400px]
        <!-- Desktop -->
        md:w-[600px] md:mb-[30px]"
        placeholder="Write your note..."
        value={text}
        onChange={(e) => {
          setText(e.target.value)}}
        onFocus={() => !isOpen && setIsOpen(true)}
        >
        </textarea>

         <div className="flex justify-end w-full pr-[2px] gap-4 
         <!--Mobile-->
         pb-[15px]
         sm:pb-[15x]
         <!--Desktop-->
         md:pb-[30px]">
          {isOpen && <button type="button" className="hover:bg-blue-100 rounded-lg e transition py-[5px] px-[10px] cursor-pointer"
          onClick={() => {
            closeButton()
            }}>
            Close
          </button>
          }
         <button 
          type="submit"
          className="cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen)
          } }
          >
            <CirclePlus
            className="text-yellow-500"/>
          </button>
          {}
        </div>
      </form>
      </div>
    </>
  )
}