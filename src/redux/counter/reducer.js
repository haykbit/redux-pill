import INITIAL_STATE from "./state";

import {
  GET_PROPIERTIES,
  FAV_USER_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES
} from './types'

const reducer =  (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_PROPIERTIES: 
      return { ...state, value: action.payload };

    case FAV_USER_PROPIERTIES:
      return { ...state, value: action.payload };
    
    case FILTER_PROPIERTIES:
      return { ...state, value: action.payload };

    case CITY_PROPIERTIES:
      return {...state,  value: action.payload };
      
    default: 
      return state;
  }
}

export default reducer;
