import { register } from "../../redux/counter/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const [newUserData, setNewUserData] = useState({});
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
      {!localStorage.getItem("token") ? (
        <div className="divLogin">
          <form onSubmit={sendData} className="formLogin">
            <h2>Register Form</h2>
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
              <p>Name</p>
              <input
                onChange={handleSubmit}
                defaultValue=""
                name="name"
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

            <label>
              <p>Confirm Pass</p>
              <input
                onChange={handleSubmit}
                defaultValue=""
                name="confirm_password"
                type="text"
              />
            </label>
            <button className="buttonLogin" type="submit">
              Send
            </button>
          </form>
        </div>
      ) : (
        <NavLink exact to="/dashboard" />
      )}
    </>
  );
}
