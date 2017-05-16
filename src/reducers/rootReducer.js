import { combineReducers } from 'redux';
import navigationReducer from './navigation';
import counterReducer from './counter';

const rootReducer = combineReducers({
  nav: navigationReducer,
  counter: counterReducer,
  // add more reducers
});

export default rootReducer;
