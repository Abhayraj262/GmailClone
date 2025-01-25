import React from 'react'
import Navbar from './components/ui/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Inbox from './components/Inbox'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            {
                path:"/",
                element:<Inbox/>

            },
            {
                path:"/Mail/:id ",
                element:<Mail/>
            }

        ]
    }
])

const App = () => {
  return (
    <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden">
      <Navbar/>
      <Sidebar/>
    </div> 
  )
}

export default App
