import { useState } from 'react'
import React from 'react'

const App = () => {   

const [program,SetProgram]=useState(["kotlin","rust","dart","MATLAB"])


  return (
   <>
   <div className="min-h-screen bg-gray-900 flex justify-center items-center">

   <div className="space-y-3 text-center" >
      {program.map((e,i)=>(
        <p key={i}  className ="text-white" text-xl font-semibold>{e}</p>
      ))}
   </div>
   </div>
   </>
  )
}

export default App   