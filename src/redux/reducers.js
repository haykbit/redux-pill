import { combineReducers } from 'redux';
import {reducer, FilterReducer } from './counter/reducer';

const reducers = combineReducers({
  reducer,FilterReducer
});

export default reducers;
