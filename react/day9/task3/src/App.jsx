import { useState } from 'react'
import React from 'react'

const App = () => {
  const [fruit,SetFruit] =useState(["APPLE","BANANA","AVACODA","GRAPES"])

  const handleUpdate =(fru)=>{
    SetFruit(fruit.map((e,i)=>i==fru?"ORANGE" :e))

  }

  return (
    <>
    
    <div>
      {fruit.map((e,i)=>(
        <h2 key ={i}>{e}</h2>
      ))}

      <button  onClick={()=>handleUpdate(3)}>click to update</button>

    </div>
    
    
    </>
  )
}

export default App
