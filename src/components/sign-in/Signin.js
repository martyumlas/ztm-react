import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './Signin.scss'
import {signInWithGoogle} from '../../firebase/firebase'

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
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        label='Email'
                        value={this.state.email}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        value={this.state.password}
                        required
                    />

                    <div className="buttons">
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
