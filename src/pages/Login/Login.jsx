import * as React from "react";
import { Redirect } from "react-router";
import { login } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
          <main className="form-signin">
            <form>
              <img
                className="mb-4"
                src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt=""
                width="72"
                height="57"
              />
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
          </main>
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
        </>
      ) : (
        <Redirect to={"./"} />
      )}
    </>
  );
}
