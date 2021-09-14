
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
        [e.target.name]:e.target.value
    })
  
  };
 const sendData = (event) => {
    event.preventDefault();
      dispatch(login(userData));
     
  };
  
  return (
      <>
      {sessionState==0 ?(
             <form class="row g-3" onSubmit={sendData}>
                 <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">EMAIL</label>
                    <input 
                    onChange={handleSubmit}
                    defaultValue=""
                    name="email"
                    type="email" 
                    id="inputEmail4"
                    />
             </div>

             <label for="inputPassword4" class="form-label">Password</label>
             <input 
             onChange={handleSubmit}
             defaultValue=""
             name="password"
             type="password"  
             class="form-control"
             id="inputPassword4"
             />
             
          
             <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
         
         </form>
          ):(
              <Redirect to={'./'} />
              
       ) }
    </>  
  )
  
}