import * as React from "react";
import { Redirect } from "react-router";
import { login } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./index.css";

export default function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [userExist, setUserExist] = useState(false);
  const sessionState = useSelector((state) => state.sessionReducer.value);

  const handleSubmit = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = (event) => {
    event.preventDefault();
    dispatch(login(userData));
    console.log("USER DATA LOGIN: ", userData);
  };

  return (
    <>
      <div className="divLogin">
        {sessionState == 0 ? (
          <form onSubmit={sendData} className="formLogin">
            <h1>Login Form</h1>
            <label>
              <p>Email</p>
              <input
                onChange={handleSubmit}
                defaultValue=""
                name="email"
                type="text"
              />
            </label>

            <label>
              <p>Password</p>
              <input
                onChange={handleSubmit}
                defaultValue=""
                name="password"
                type="password"
              />
            </label>

            <button type="submit">Login</button>
          </form>
        ) : (
          <Redirect to={"./"} />
        )}
      </div>
    </>
  );
}
