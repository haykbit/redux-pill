import { combineReducers } from 'redux';
import {reducer, FilterReducer,sessionReducer } from './counter/reducer';

const reducers = combineReducers({
  reducer,FilterReducer,sessionReducer
});

export default reducers;
