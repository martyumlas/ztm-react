import React, { Component } from 'react'
import './Signin.scss'

class Signin extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }


    handleChange = event => {
        const {value, name} = event.target


        this.setState({[name] : value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I alreaday have an account</h2>
                <span>Sign in with your email and passsword</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} required onChange={this.handleChange} />
                    <label>Email</label>
                    <input type="password" name="password" value={this.state.password} required onChange={this.handleChange} />
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default Signin
