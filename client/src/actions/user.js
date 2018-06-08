
import axios from 'axios';

export function newUser(values) {
    return async function (dispatch) {
        console.log(values);
        const res = await axios.post('/api/login',values);
        dispatch({
            type:'NEW_USER',
            payload:res.data.name
        })
    }
}