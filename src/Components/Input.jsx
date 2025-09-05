import React ,{useState} from 'react'
import search from './search.png';
const Input = () => {

    const [mood,setMood]=useState("");
  return (
    <div className="flex h-screen bg-black">

        <div className="flex justify-between items-center m-auto border-2 border-gray-500 w-96 rounded-full p-2 focus:border-blue-600">
            <input className="outline-none ml-2 bg-black text-white" type="text" placeholder=" Enter your Mood " value={mood} onChange={(e)=>setMood(e.target.value)}/>
            <button type="submit"><img className="w-8 h-8 mr-2" src={search} alt="search"/></button>
        </div>

    
    </div>
  )
}

export default Input