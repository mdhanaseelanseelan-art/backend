import { useState } from 'react'
import React from 'react'

const App = () => {

  const [arr,SetArr]=useState([{id:1,brand:"samsung",price:50000},
                               {id:2,brand:"moto",price:30000},
                               {id:3,brand:"apple",price:80000}] )



     const handleDelete =()=>{
     
      SetArr(arr.filter((arr)=>arr.id!==3))

     }

     const handleUpdate=()=>{
         SetArr(arr.map((arr)=>arr.id===2?{ ...arr, price: 60000 }:arr))

     }

     const handleAdd=()=>{

       SetArr([...arr, {id:4,brand:"redmi",price:45000}])
     }




  return (
    <>
    {arr.map((arr)=>(
      <div key ={arr.id}>
         <h2>id:{arr.id}</h2>
        <h2>brand:{arr.brand}</h2>
        <h2>price:{arr.price}</h2>
      </div>
    ))}
    <div>
      

      <button onClick={handleDelete}>delete mobile id</button>
      <button onClick={handleUpdate}>update price</button>
      <button onClick={handleAdd}>Add new</button>

    </div>
    
    
    </>
  )
}

export default App
