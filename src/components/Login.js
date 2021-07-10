import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Login(props) {
   let history= useHistory()
    return (
        <div>
              <button className="btn btn-danger" onClick={()=>{
                props.data(4)
                history.push("/home")
              }}
              > login
              </button>
        </div>
    )
}

