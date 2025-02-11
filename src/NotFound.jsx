import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){
   const navigate=useNavigate();
   useEffect(()=>{
    setTimeout(()=>{
        navigate("/home")
    },5000)
   },[])
   return(
    <>
    <h1>Your page not found...!</h1>
    </>
   )
}
export default NotFound;