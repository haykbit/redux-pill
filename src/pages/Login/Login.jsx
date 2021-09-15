import  "./styles.css";
import * as React from 'react';
import { Redirect } from 'react-router';
import { login } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";





export default function Login() {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({})
    const [userExist, setUserExist] = useState(false);
    const sessionState = useSelector((state) => state.sessionReducer.value);
    
    const handleSubmit = (e) => {
   
    setUserData({
        ...userData,
        [e.target.name]:e.target.value,
      
    })
  
  };
 const sendData = (event) => {
    event.preventDefault();
      dispatch(login(userData));
     
  };
  
  return (
      <>
      {sessionState==0 ?(
        <>
       <div className="text-center" cz-shortcut-listen="true">
        <main class="form-signin">
        <form onSubmit={sendData}>
          <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div class="form-floating">
            <input 
            type="email" 
            class="form-control" 
            id="floatingInput" 
            onChange={handleSubmit}
            defaultValue=""
            name="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input 
            type="password" 
            class="form-control" 
            id="floatingPassword" 
            onChange={handleSubmit}
            defaultValue=""
            name="password"
            />
            <label for="floatingPassword">Password</label>
          </div>
      
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
      </div>
             {/* <form onSubmit={sendData}>
             <label>
             <input 
             onChange={handleSubmit}
             defaultValue=""
             name="email"
             type="text" 
              />
             </label>
     
             <label>
             <input 
             onChange={handleSubmit}
             defaultValue=""
             name="password"
             type="text"  
             />
             </label>
          
           <button type="submit">send</button>
         
         </form>*/}
         </> 
          ):(
              <Redirect to={'./'} />
              
       ) }
    </>  
  )
  
}