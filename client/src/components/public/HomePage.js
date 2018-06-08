import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
class HomePage extends React.Component {

    state = {
        message: '',
        img: '',
        secret:'',
        animate: false
    };

    componentDidMount() {
        axios.get('/api/welcome').then((response) => {
            console.log(response.data);
            this.setState({
                message: response.data.message,
                img: response.data.url,
                secret:response.data.adm
            })
        })
    }

    redirect = () => {
        this.setState({animate: true});
        setTimeout(() => {
            this.props.history.push('/shop')
        }, 1500)
    };
    redirectAdmin=()=>{
        this.props.history.push('/login')
    }
    render() {

        return (
            <div className="home-page">
                <h1>McDonalds</h1>
                <h2>{this.state.message}</h2>
                {this.state.img &&
                <img
                    className={this.state.animate ? 'animate' : null}
                    onClick={this.redirect}
                    src={this.state.img} alt="logo"/>
                }
                <img
                    className="fishy"
                    onClick={this.redirectAdmin}
                    src={this.state.secret}
                    alt="fishy"
                />
            </div>
        );
    }
}

export default HomePage