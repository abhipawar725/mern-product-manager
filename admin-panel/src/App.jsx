import React from 'react'
import Sidebar from "./components/Sidebar.jsx"

const App = () => {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-200">
      <Sidebar />
        </div>
        <div className="col-span-9">
          main
        </div>
      </div>
    </div>
  )
}

export default App