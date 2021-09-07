import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

import {
  getPropierties,
  //userFavPropierties,
  filterPropierties,
} from '../../redux/counter/actions';

const CounterControls = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
   
    HandleGetPropierties();
  },[])
  const state = useSelector((state)=>state.data);
  //console.log(state);
  
  const HandleGetPropierties = () => {
    dispatch(getPropierties());
    
  }
  const console = (state)=>{
    console.log(state);
  }

  // const HandleUserFavPropierties = () => {
  //   dispatch(userFavPropierties());
  // }

  const HandleFilterPropierties = () => {
    dispatch(filterPropierties());
  }
  return (
    <>
      <p>{state.value[0].id}</p>
      <button onClick={console}>GET</button>
      {/* <button onClick={HandleUserFavPropierties}>FAV</button> */}
      <button onClick={HandleFilterPropierties}>FILTER</button>
    </>
  )
}

export default CounterControls;