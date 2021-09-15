import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/counter/actions";
import { useHistory } from "react-router-dom"
import { Redirect } from 'react-router';

export default function Logout(){
     const emptyUserState = useSelector((state)=> state.sessionReducer.value);
     const history = useHistory();
    const dispatch=useDispatch();
    // useEffect(()=>{
    //   <Redirect to="/" />
    // },[emptyUserState])
 return(
     <>
    
         <p>hope to see you soon</p>
         <button onClick={()=>{
            localStorage.removeItem("token");
            dispatch(logout());
            history.push("/");
         }}>
            Are you sure to logout?
        </button>
     
    

     </>
 )
}