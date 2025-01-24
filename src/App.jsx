import React from 'react'
import Navbar from './components/ui/Navbar'
import { Sidebar } from 'lucide-react'

const App = () => {
  return (
    <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden">
      <Navbar/>
      <Sidebar/>
    </div> 
  )
}

export default App
