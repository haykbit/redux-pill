import "./styles.css";
import * as React from "react";
import { Redirect } from "react-router";
import { login } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import loginImg from "../../assets/Ho.gif";

export default function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
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
  };

  return (
    <>
      {sessionState === 0 ? (
        <>
          <div className="text-center" cz-shortcut-listen="true">
            <main className="form-signin">
              <form onSubmit={sendData}>
                <img
                  className="mb-4"
                  src={loginImg}
                  alt=""
                  width="350px"
                  height="200px"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    onChange={handleSubmit}
                    defaultValue=""
                    name="email"
                    placeholder="Email"
                  />
                  
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    onChange={handleSubmit}
                    defaultValue=""
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
                <h5>or</h5>
                <NavLink
                    exact
                    to="/register"
                    style={{ textDecoration: "none" }}
                    className="login"
                  >
                    <button className="w-100 btn btn-lg btn-danger" type="submit">
                      Register
                    </button>
                  </NavLink>
                <p className="mt-5 mb-3 text-muted">© Jon & Hayk 2021</p>
              </form>
            </main>
          </div>
         
        </>
      ) : (
        <Redirect to={"./"} />
      )}
    </>
  );
}
