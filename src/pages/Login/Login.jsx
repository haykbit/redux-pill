import * as React from "react";
import { Redirect } from "react-router";
import { login } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
      {sessionState == 0 ? (
        <form onSubmit={sendData}>
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
        </form>
      ) : (
        <Redirect to={"./"} />
      )}
    </>
  );
}
