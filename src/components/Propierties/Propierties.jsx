import { useDispatch } from "react-redux"

import {
  getPropierties,
  userFavPropierties,
  filterPropierties,
} from '../../redux/counter/actions';


const CounterControls = () => {
  const dispatch = useDispatch();

  const HandleGetPropierties = () => {
    dispatch(getPropierties());
  }

  const HandleUserFavPropierties = () => {
    dispatch(userFavPropierties());
  }

  const HandleFilterPropierties = () => {
    dispatch(filterPropierties());
  }
  return (
    <>
      <button onClick={HandleGetPropierties}>GET</button>
      <button onClick={HandleUserFavPropierties}>FAV</button>
      <button onClick={HandleFilterPropierties}>FILTER</button>
    </>
  )
}

export default CounterControls;