 import {useState} from "react"

const App = () => {


const [color,SetColor] =useState(["red","blue","green"])

    const handleClick=()=>{
      SetColor([...color,"yellow"])
    }
  return (
  <>
  <div>

    <h1>UPDATE COLOUR</h1>
    {color.map((e,i)=>(
      <h2 key={i}   
    >{e}</h2>
    ))}


    <button onClick={handleClick}>click to change color</button>


  </div>
  
  
  </>
  )
}

export default App