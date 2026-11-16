import { useState } from 'react'

import React from 'react'

const App = () => {


const [change,SetChange] =useState({brand:"samsung",model:"s26 ultra",price:80000,color:"black"})


    const handleDelete =()=>{

      const{color, ...del}=change ;

    SetChange(del)

    }
      
    const handleUpdate=()=>{


      SetChange({...change, price:45000 })
    }


  return (
    <>
    
    <div>
      <h2>{change.brand}</h2>
      <h2>{change.model}</h2>
      <h2>{change.price}</h2>
      <h2>{change.color}</h2>

      <button onClick={handleDelete}> delete color</button>
      <button onClick={handleUpdate}>click to update</button>
     
    </div>
    
    </>
  )
}

export default App