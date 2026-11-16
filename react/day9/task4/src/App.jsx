import { useState } from 'react'






const App = () => {



  
const[city,SetCity] = useState(["kanchipuram","vellore","thiruvallur","madurai","chennai"])

const handleDelete =(town)=>{


SetCity(city.map((e,i) =>i==town?" ":e))


}
  return (
    <>
    
    <div>

      {city.map((e,i)=>(
        <h2 key ={i}>{e}</h2>
      ))}
      <button onClick={()=>handleDelete(4)}>click to delete</button>



    </div>

    
    </>
  )
}

export default App