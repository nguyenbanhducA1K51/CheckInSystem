import React,{useState,useRef,useEffect} from "react"
import SignUpForm from "./signUp"
const Page =({token,setToken})=>{
  const signup=useRef()
    function hideSignUp(bool){
        if(bool){
signup.current.style.visibility="hidden"
        }
    }
function handleData(userEmail,userPassword)
{
const options={
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'authorization':token
    },
    body:{
        email:userEmail,
        password:userPassword
        
    }
}
fetch(`http://localhost:localhost:3100/form/signup`,options).then(
        (res)=>{console.log(res.token.json);setToken(res.token.json())}).catch(err=>console.log(err))
}    return (
        <>
<SignUpForm handleData={handleData}  />
        </>
    )
}
module.exports= Page