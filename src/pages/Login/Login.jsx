import * as React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { login } from "../../redux/counter/actions";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [userExist, setUserExist] = useState(false);
  const history = useHistory();
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
    history.push("/dashboard");
    console.log("USER DATA LOGIN: ", userData);
  };

  return (
    <>
      {!localStorage.getItem("token") ? (
        <div className="divLogin">
          <form onSubmit={sendData} className="formLogin">
            <h2>Login Form</h2>
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
                type="text"
              />
            </label>

            <button className="buttonLogin" type="submit">
              Login
            </button>
          </form>
        </div>
      ) : (
        <NavLink exact to="/dashboard" />
      )}
    </>
  );
}
