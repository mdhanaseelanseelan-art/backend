import { useState } from 'react'
import React from 'react'

const App = () => {

const[todo,SetTodo]=useState("")
const[saveData,SetSaveData]=useState([])
const [editid,SetEditId]=useState(null)

const handleChange=(e)=>{

 SetTodo(e.target.value)

}

const handleClick=()=>{


  if(editId==null){
     SetSaveData((p)=>[...p,obj])

  }


const obj={id:Date.now(),todo}


SetTodo("")


}

const handleDelete=(id)=>{

   SetSaveData((p)=>p.filter((e)=>e.id!==id))

}
const handleEdit=(datas)=>{


   SetTodo(datas.todo)
   SetEditId(datas.id)


}
           
  return (    
   <>
   
     <div>
      <input type="text" name="" onChange={handleChange} value={todo}/>
      <button onClick={handleClick} >click</button>
    
      {saveData.map((e,i)=>(
        <div key={i}>
          <p>{e.todo}</p>
            <button onClick={()=>handleDelete(e.id)}>click to delete</button>
            <button onClick={()=>handleEdit(e)}>click to edit</button>
        </div>
        
      ))}
      
     </div>
   
   </>
  )   
}
export default App   
