import { useState } from 'react'
import React from 'react'

const App = () => {


const[data,SetData]=useState([
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Bala", salary: 45000 },
  { id: 3, name: "Kumar", salary: 60000 },
  { id: 4, name: "Vijay", salary: 35000 },
  { id: 5, name: "Priya", salary: 55000 }
])

const handleUpdate =()=>{


  SetData(data.filter((e)=>e.salary>40000))
    
}

  return (
    <>
    
    <div>
      {data.map((e,i)=>(
        <div key={i}>
          <h3>{e.id}</h3>
          <h3>{e.name}</h3>
          <h3>{e.salary}</h3>
        </div>
      ))}
      <button onClick={handleUpdate}>click</button>

    </div>
    
    </>
  )
}

export default App

        