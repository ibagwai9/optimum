import { combineReducers } from '@reduxjs/toolkit';

import { signinReducer } from './reduces/signinSlice';

const rootReducer = combineReducers({
  signin: signinReducer,
});

export default rootReducer;
