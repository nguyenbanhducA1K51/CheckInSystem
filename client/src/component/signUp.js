import React,{useState,useEffect,useRef} from "react";
import '../style.css'
const   SignUpForm=({handleData})=>{
  const [input,setInput]=useState({email:"",password:""})
const email=useRef();
const password=useRef();
const repeatPassword=useRef();
const errorMessage=useRef();
const formContent=useRef();
  function emailIsValid(){
   console.log(email.current.value);
   
//    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

//     if(!regex.test(email.current.value))
//     {
// console.log("invalid  email")
// return false
//     }
//     return true
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
  errorMessage.current.innerHTML="invalid password!"
}
else if(!emailIsValid()){
  console.log('invalid');
  
  errorMessage.current.innerHTML="invalid email!"
}
else{
  formContent.current.style.visibility="hidden"
handleData(email.current.value,password.current.value);
console.log('abc');


}
  }
    return(
        <>
<div className="signup">
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
      
          

          <p ref={errorMessage}></p>

          <p>By creating an account you agree to our erms & Privacy.</p>
      
          <div class="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button onClick={submit} type="button" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
      </div>
        </>
    )
}
export default SignUpForm;