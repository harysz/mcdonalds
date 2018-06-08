import * as types from '../actions/alll-types'

const user = (state={user:'',err:''},action)=> {
    if (action.type===types.NEW_USER){
        console.log(action.payload);
        return {user:action.payload,err:''};
    }
    return state
};
export default user