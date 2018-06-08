import axios from 'axios';
import * as types from './alll-types'

export function fetchMenu() {
  return async function (dispatch) {
    const response = await axios.get('/api/menu');
    dispatch({type:'FETCH_MENU', payload:response.data})
  }
}
export function addItem(item) {
  return {
    type:'ADD_ITEM',
    payload:item
  }
}

export function removeItem(_id) {
  console.log(_id);
  return async function (dispatch) {
    const response =await axios.post('/api/remove', {_id});
    dispatch({
      type:types.REMOVE_ITEM,
      payload:response.data
    })
  }
}