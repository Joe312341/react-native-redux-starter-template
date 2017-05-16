import * as types from '../actions/types';

const initialState = {
  currentCount: 0
}

export default function counterReducer(state = initialState, action){
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        ...state,
        currentCount: state.currentCount + 1
      }
    case types.DECREMENT_COUNTER:
      return {
        ...state,
        currentCount: state.currentCount - 1
      }
    default:
      return state;
  }
}
