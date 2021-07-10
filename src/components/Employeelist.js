import React from 'react'

export default function Employeelist() {
    return (
        <div className="card bg-secondary" style={{height:'600px'}} >
        <div className="card " style={{height:'400px',width:'1200px',margin:'auto',backgroundColor:'gainsboro',marginTop:'50px',paddingTop:'50px'}} >
              <h1 className="text-center">EMPLOYEES LIST</h1>
              <table className=" container table table-dark text-center" >
              <tr className="bg-danger" >
              <th>Employee ID</th>
              <th>Name </th>
              <th>Designation </th>
              <th>Salary </th>
              </tr>
              <tr>
              <td>TY001</td>
              <td>Arun</td>
              <td>SSD</td>
              <td>45000</td>
              </tr>
              <tr>
              <td>TY002</td>
              <td>Prashant</td>
              <td>HR</td>
              <td>25000</td>
              </tr>
              <tr>
              <td>TY003</td>
              <td>Vijay</td>
              <td>SSD</td>
              <td>50000</td>
              </tr>
              <tr>
              <td>TY004</td>
              <td>Kiran</td>
              <td>HR</td>
              <td>30000</td>
              </tr>
                
              </table>
        </div>
        </div>
    )
}
