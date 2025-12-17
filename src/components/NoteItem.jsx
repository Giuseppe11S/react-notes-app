
// props for NoteList
export default function NoteItem({title, text, id, onDeleteNotes}) {
  return (
    <>
     <span className="absolute cursor-pointer text-red-300 
     <!-- MOBILE -->
     left-[88%] top-[-5px] text-[25px]
     sm:left-[92%] sm:text-[30px]
     <!-- Desktop -->
     md:left-[95%] md:top-[-5px] md:text-[25px]"
     onClick={() => onDeleteNotes(id)}>x</span>
     <h3 className="font-bold">{title}</h3>
     <p className="font-extralight text-[13px] pt-[5px] break-all
     <!-- Mobile -->
     w-[120px]
     <!-- Desktop -->
     md:w-[380px]
     md:text-[16px]
     ">{text}</p>
    </>
  )
}