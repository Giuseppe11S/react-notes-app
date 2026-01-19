
// import icon (logo) of my navbar
import { StickyNote, ListFilter, Search, Grid2x2, ListIndentIncrease } from "lucide-react"
import { useState } from "react"


export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isList, setIsList] = useState(false);
  const [textEmpty, setTextEmpty] = useState(false);


  return (
    <>
    <header>
      <nav className="border-b-1 border-gray-200 bg-white w-full">
        <ul className="flex items-center gap-[10px] p-[20px]">
          <li className="pr-[15px]">
            <ListFilter className="size-[24px] text-yellow-500 cursor-pointer"/>
            </li>
            <li>
              <StickyNote className="size-[42px] text-yellow-500 cursor-pointer"/>
            </li>
            <li className="font-medium text-[20px] cursor-pointer mr-[100px]">
              My Notes
            </li>
            <li>
              <div className="flex border rounded-s border-gray-200 gap-[10px] p-[10px]">
                <Search className="size-[22px]"/>
               <input 
               onFocus={() => setIsOpen(!isOpen)}type="search" 
               className="w-[600px] pl-[5px] outline-none focus:outline-none"
               onBlur={() => setIsOpen(!isOpen)} placeholder="Search"/>
               {isOpen && <span className="cursor-pointer size-[15px]">X</span>}
              </div>
            </li>
            <li className="cursor-pointer" onClick={() => {setIsList(!isList)}}> 
             {isList ? <Grid2x2/> : <ListIndentIncrease/>}
            </li>
        </ul>
      </nav>
    </header>
    </>
  )
}