import { register } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useState } from "react";
import "./stylesR.css";
import loginImg from "../../assets/Ho.gif";

export default function Register() {
  const dispatch = useDispatch();
  const [newUserData, setNewUserData] = useState({});
  const sessionState = useSelector((state) => state.sessionReducer.value);
  const handleSubmit = (e) => {
    setNewUserData({
      ...newUserData,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    dispatch(register(newUserData));
    
  };


  return (
    <>
    {sessionState === 0 ? (
    <>
     <div className="box"> 
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <img
                    className="img"
                    src={loginImg}
                    alt=""
                    width="50%"
                    height="200px"
                  />
        <form className="registerForm" onSubmit={sendData}>
     
        <div className="field">
          <input 
          className="inputField" 
          type="email" 
          name="email"
          id="email" 
          placeholder="Name Surname"
          onChange={handleSubmit}
          defaultValue=""

          />
          <label for="email">Email</label>
        </div>
        
        <div class="field">
          <input 
          className="inputField" 
          type="name"
           name="name" 
           id="fullname" 
           placeholder="your.email@example.com"
           onChange={handleSubmit}
           defaultValue=""

           />
          <label for="fullname">Name</label>
        </div>
     
        <div className="field">
          <input 
          className="inputField" 
          type="password" 
          name="password"
          id="pass" 
          placeholder="password"
          onChange={handleSubmit}
          defaultValue=""

          />
          <label for="pass">Password</label>
        </div>
        
        <div class="field">
          <input 
          className="inputField" 
          type="password"
           name="confirm_password" 
           id="confirm_pass" 
           placeholder="confirm password"
           onChange={handleSubmit}
           defaultValue=""

           />
          <label for="confirm_pass">Confirm Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-outline-warning" type="submit" >singUp</button>
   
      </form>
   </div> 
    </>
    ):(
     
      <Redirect to={"/"} />
    )}
    </>
  );
}
