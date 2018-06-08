import axios from 'axios';
import * as types from './alll-types';

export function fetchCategories() {

  return async function (dispatch) {
    const response = await axios.get('/api/categories');
    dispatch({
      type:types.FETCH_CATEGORIES,
      payload:response.data
    })

  }
}

export function switchCategory(value) {
  console.log(value);
  return {
    type:types.SWITCH_CATEGORY,
    payload:value
  }
}



