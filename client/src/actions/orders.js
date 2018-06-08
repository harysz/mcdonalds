//public
import * as types from './alll-types'
export function addOrder(order) {
  return{
    type:'ADD_ORDER',
    payload:order
  }
}
//admin
export function addActiveOrder(order) {
  console.log(order)
    return {
      type:types.ADD_ACTIVE_ORDER,
        payload:order
    }
}