import { useState } from 'react'
import React from 'react'

const App = () => {

   const[sum,SetSum]=useState([
  { id: 1, name: "Arun", marks: 75 },
  { id: 2, name: "Bala", marks: 85 },
  { id: 3, name: "Kumar", marks: 65 }
])

const handleClick=()=>{

  SetSum([...sum,{ id: 4, name: "Priya", marks: 90 }])

}



const handleUpdate =()=>{

  SetSum(sum.map((e)=>e.name==="Bala"?{...e ,marks:95 } :e))

}

const handleDelete=()=>{

    SetSum(sum.filter((e)=>e.id!==3))

}

  return (
    <>
    
    <div>
      {sum.map((e,i)=>(
        <div key={i}>
          <h3>{e.id}</h3>
          <h3>{e.name}</h3>
          <h3>{e.marks}</h3>
        </div>
     
      ))}
      <button onClick={handleClick}>click to add</button>

          <button onClick={handleUpdate}>update</button>
          <button  onClick={handleDelete}  >click to delete</button>
    </div>
    
    
    </>
  )
}
       
export default App
