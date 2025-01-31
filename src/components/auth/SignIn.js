import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="loginBody">
                <div className="container">
                    <br/>
                    <div className="d-flex justify-content-center h-100">
                        <div className="card signin">
                            <div className="card-header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="input-field">
                                        <input placeholder="Email" type="email" id="email" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Password" type="password" id="password" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <button className="btn blue lighten-1 z-depth-0">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<p><NavLink to='/signup' className="text-blue">Sign Up</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;