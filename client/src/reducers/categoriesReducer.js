import * as types from '../actions/alll-types';

const categories = (state=[],action)=>{

  switch (action.type){
    case types.FETCH_CATEGORIES:
      return [...action.payload.categories];
    default : return state
  }

};
export default categories