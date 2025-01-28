import React from 'react'
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

const Mail = () => {
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div  className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-2 text-gray-700 py-2'>
              <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <IoMdArrowBack/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Mail
