import { useState } from 'react'
import React from 'react'

const App = () => {

   const[product,SetProduct]=useState([
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Headphone", price: 2000 }
])




  const handleFilter=()=>{

   SetProduct(product.filter((e)=>e.price>2000))


  }





const[total,SetTotal]=useState(0)
const handleAdd=()=>{

 const copy=[...product]
 const pro =copy.reduce((acc,i)=>acc+i.price,0)
 SetTotal(pro)

}

  return (
   <>
   
    <div>

           {product.map((e,i)=>(
            <div key={i}>
              <h3>id:{e.id}</h3>
              <h3>name:{e.name}</h3>
              <h3>price:{e.price}</h3>
            </div>
           ))}


    </div>
   
    <button onClick={handleFilter}>above 2,000</button>
    <button onClick={handleAdd}>total price</button>
      <h2>total:{total}</h2>
      <h3>products:{product.length}</h3>
   
   </>
  )
}

export default App
