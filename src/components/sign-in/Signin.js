import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './Signin.scss'
import { connect } from 'react-redux'
import { googleSignInStart } from '../../redux/user/user.actions'
import { emailSignInStart } from '../../redux/user/user.actions'

class Signin extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault()

        const {emailSignInStart} = this.props

        const {email, password} = this.state
        
        emailSignInStart({email, password})

        // await signInWithEmailAndPassword(auth, email, password)
        // .then()
        // .catch((error) => {
        //    console.log(error.message)
        // });
        

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
                        <CustomButton type='button' onClick={ this.props.googleSignInStart } isGoogleSignIn={true}>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: ({email, password}) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Signin)
