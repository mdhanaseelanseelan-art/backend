import { useState } from 'react'

import React from 'react'

const App = () => {


const [list,SetList] =useState({name:"dhanaseelan",age:21,city:"chennai"})

 
const handleAdd =()=>{

SetList({...list,country:"india"})


}

  return (
    <>
    
    <div>
       <h2>{list.name}</h2>
        <h2>{list.age}</h2>
        <h2>{list.city}</h2>
        <h2>{list.country}</h2>


        <button onClick={handleAdd}>click to add</button>

    </div>
    
    
    </>
  )
}

export default App