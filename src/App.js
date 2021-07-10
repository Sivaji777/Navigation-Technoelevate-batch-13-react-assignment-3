import './App.css'; 
import React,{useState} from 'react'
import { Link, BrowserRouter, Route , Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Employeelist from "./components/Employeelist";
import Employeedetailes from "./components/Employeedetailes";
import Logout from "./components/Logout";
import Employeeportal from "./components/Employeeportal";
function App(){
  const [num, setNum] = useState(0)

  function check(number){
    setNum(number)
  }
  if(num!==0){
    return (

      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/employeeportal">Employee Portal</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li  className=" nav-item active">
              <Link className="nav-link"  to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li id="en" className="enb nav-item" >
              <Link className="nav-link" to="/employeelist">Employee List</Link>
            </li>
            <li id="en" className="enb nav-item">
              <Link className="nav-link" to="/employeedetailes">Employee Detailes</Link>
            </li>
            <li id="en" className="enb nav-item">
              <Link className="nav-link" to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    
      <Switch>
      <Route path="/" exact />
      <Route path="/employeeportal" component={Employeeportal} />
      <Route path="/home" component={Home} />
      <Route path="/employeelist" component={Employeelist} />
      <Route path="/employeedetailes" component={Employeedetailes} />
      <Route path="/logout" component={Logout} />
      <Route>
      <Login    data={check}/>
      </Route>
      </Switch>
      </BrowserRouter>
  
  
    )
}else{
  return (

    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <Link className="navbar-brand" to="/employeeportal">Employee Portal</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li  className=" nav-item active">
            <Link className="nav-link"  to="/home">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li  className="dsb nav-item">
          <Link  className="nav-link" to="/login">Login</Link>
          </li>
          
        </ul>
      </div>
    </nav>

    <Switch>
    <Route path="/" exact />
    <Route path="/employeeportal" component={Employeeportal} />
    <Route path="/home" component={Home} />
    <Route path="/employeelist" component={Employeelist} />
    <Route path="/employeedetailes" component={Employeedetailes} />
    <Route path="/logout" component={Logout} />
    <Route>
    <Login    data={check}/>
    </Route>
    </Switch>
    </BrowserRouter>


  );
}
}
export default App;
