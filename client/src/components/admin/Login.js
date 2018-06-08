import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions/user'
let Login = (props)=>{
return (
    <div>
        <h1>{props.user.name}</h1>
        <form onSubmit={props.handleSubmit(props.newUser)}>
            <Field
                type="text"
                name="name"
                component="input"/>
            <Field
                type="password"
                name="password"
                component="input"/>
            <button type="submit">Login</button>
        </form>
    </div>
);
};
Login = reduxForm({
    // a unique name for the form
    form: 'login'
})(Login);

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
};
export default connect(mapStateToProps, actions)(Login)