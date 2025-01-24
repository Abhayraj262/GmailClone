import React from 'react'
import { LuPencil } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className='w-[15%]'>
        <div className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
            <button>
            <LuPencil size={"24px"} />
            Compose
            </button>

        </div>
      
    </div>
  )
}

export default Sidebar
