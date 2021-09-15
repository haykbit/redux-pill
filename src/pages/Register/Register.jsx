import { register } from "../../redux/counter/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Register(){
    const dispatch = useDispatch();
    const [newUserData, setNewUserData] = useState({})
    const handleSubmit = (e) => {
   
        setNewUserData({
        ...newUserData,
        [e.target.name]:e.target.value
    })
  
  };
  const sendData = (event) => {
    event.preventDefault();
    dispatch(register(newUserData));
    
  };
    return (   <form onSubmit={sendData}>
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
        name="name"
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

        <label>
        <input 
        onChange={handleSubmit}
        defaultValue=""
        name="confirm_password"
        type="text"  
        />
        </label>
      <button type="submit">send</button>
    </form>)
}