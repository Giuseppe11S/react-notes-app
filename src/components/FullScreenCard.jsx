
// component that shows fullscreen the note if is selected 

export default function FullScreenCard({ note, onClose}){
  return(
    <>
      <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50 "> 
        <div 
        style={{backgroundColor: note.color}}
        className="bg-white rounded-xl p-7 w-[90%] relative overflow-y-auto max-h-[90vh] ">
          <button
            className="absolute top-4 right-4 text-red-500 text-xl cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
          <h2 className="font-bold text-start text-2xl mb-4">{note.title}</h2>
          <p className="w-full">{note.text}</p>
        </div>
      </div>
    </>
  )
}