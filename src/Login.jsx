import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
// import { login } from "./Store";
import './App.css';

function Login(){
     let username=useRef(null);
     let password=useRef(null);
     let dispatch=useDispatch();
     let navigate=useNavigate();

     let loginCheck=()=>{
        if(username.current.value==="swetha"&&password.current.value==="swetha@123")
        {
            dispatch(login(username.current.value));
            navigate("/home");
        }
        else{
            alert("Your credentials are wrong...Check Once..!");
        }
     }
     return(
        <>
        <h1>Login Page</h1>
        <label>User Name:</label>
        <input type="text" ref={username}/>
        <br/><br/>
        <label>Password:</label>
        <input type="text" ref={password}/>
        <br/><br/>
        <button style={{backgroundColor:'green'}} onClick={loginCheck} className="but1">Login</button>
        </>
     )
}
export default Login;