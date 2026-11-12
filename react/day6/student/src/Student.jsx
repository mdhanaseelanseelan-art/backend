

const Student = () => {
    const student=["Dhana","Dhivya","Janani","mukund"]

    
  return (
   <>
   <h2>student details</h2>
   <ul>
    {student.map((student,index)=>(
        <li key={index}>{student}</li>
    ))}
   </ul>
   
   
   </>
  )
}

export default Student