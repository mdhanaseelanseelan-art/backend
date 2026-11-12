import React from 'react'

const EmployeeDetails = () => {


  const employeeName = "Dhivya";
  const employeeId = "000032";
  const designation = "software testing";
  const salary = "₹35,000";
  const company = "samsung";






  return (
    <>
    
        <div>
      <h1>Employee Details</h1>

      <p>Employee ID: {employeeId}</p>

      <p>Name: {employeeName}</p>

      <p>Designation: {designation}</p>

      <p>Salary: {salary}</p>

      <p>Company: {company}</p>
    </div>
    
    </>
    
  )
}

export default EmployeeDetails