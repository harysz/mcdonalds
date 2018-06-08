import * as types from '../actions/alll-types';

const menu = (state=[],action)=>{
  switch (action.type){
    case 'FETCH_MENU': return [...action.payload.menu];
    case 'ADD_ITEM' : return[...state, action.payload];
    case types.REMOVE_ITEM :
      console.log(action.payload);
      return state.filter((item)=>item._id!==action.payload._id);
    default : return state
  }
};
export default menu