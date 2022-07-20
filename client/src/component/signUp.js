import React,{useState,useEffect,useRef} from "react";
import '../style.css'
const   SignUpForm=({handleSignup,errorMessage,showLogin})=>{
  
const email=useRef();
const password=useRef();
const repeatPassword=useRef();
const errorMes=useRef();
const formContent=useRef();
useEffect(()=>{
  if(errorMessage!=null)
{errorMes.current.innerHTML=errorMessage}
},[errorMessage])
  function emailIsValid(){
   console.log(email.current.value);
   

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.current.value)

  }
function passwordIsValid()
    {
   if (repeatPassword.current.value!==password.current.value){
return false
   }
   return true
    
  }
  
  

  function submit(){
   
    
if (!passwordIsValid()){
  errorMes.current.innerHTML="invalid password!"
}
else if(!emailIsValid()){
  console.log('invalid');
  
  errorMes.current.innerHTML="invalid email!"
}
else{
  // formContent.current.style.visibility="hidden"
handleSignup(email.current.value,password.current.value);



}
  }
    return(
        <>
<div className="signup" >
        <form ref={formContent} action="" >
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
      <div>
          <label htmlFor="email"><b>Email</b></label>
          <input ref={email}  id="emailSignup"type="text" placeholder="Enter Email" name="email" required/>
          </div>
          
          <label htmlFor="psw"><b>Password</b></label>
          <input ref={password}id="passwordSignup" type="password" placeholder="Enter Password" name="psw" required/>
      
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input ref={repeatPassword}id="passwordrepeat" type="password" placeholder="Repeat Password" name="psw-repeat" required/>
      
          
          <p ref={errorMes} className="border border-warning text-warning p-2"></p>

          <p>By creating an account you agree to our erms & Privacy.</p>
      
          <div class="clearfix">
            <button onClick={showLogin} type="button" className="cancelbtn">Login</button>
            <button onClick={submit} type="button" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
      </div>
        </>
    )
}
export default SignUpForm;