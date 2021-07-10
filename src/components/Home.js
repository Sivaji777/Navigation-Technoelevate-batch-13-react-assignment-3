import React, { Component } from 'react'
export default class Home extends Component {
    render() {
        return (
            <div>    
       <div  className="bg-secondary" style={{height:'600px'}} >
       <h1  style={{color:'white',textAlign:'center'}}>HOME PAGE</h1>
         <div  style={{backgroundColor:'gainsboro',width:'600px',borderRadius:'20px',margin:'20px 0px 0px 500px'}} >
            <div className="" style={{display:'flex',borderRadius:'10px',padding:'20px'}} >
               <div>
                   <img  height="200px" width="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYXJG583QfrsXZbQJ-mSAigXGq-ndOa23zw&usqp=CAU" />
               </div>
               <div className="bg-white" style={{width:'300px',height:'200px'}} >
                    <h3>Learnig to code</h3>
                    <h4>opening a door to the future</h4>
                    <p>All technologies is languages to communicate the user and system</p>
               </div>
            </div>
        </div>
         

        <div style={{backgroundColor:'gainsboro',width:'600px',borderRadius:'20px',margin:'0px 0px 0px 200px'}} >
            <div className="" style={{display:'flex',borderRadius:'10px',padding:'20px',marginTop:'20px'}} >
               <div className="bg-white" style={{width:'300px',height:'200px'}} >
                    <h3>Mastering the languages</h3>
                    <h4>java is not same as javascript</h4>
                    <p>javascript is interpreted language
                   </p>
               </div>
               <div style={{width:'300px',height:'200px'}}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYXJG583QfrsXZbQJ-mSAigXGq-ndOa23zw&usqp=CAU" />
               </div>
            </div>
        </div>     
   </div>
            </div>
        )
    }
}









