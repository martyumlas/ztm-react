import FormInput from '../form-input/FormInput'
import { Component } from 'react'
import CustomButton from '../custom-button/CustomButton';
import './Signup.scss'
import { signUpstart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

class Signup extends Component {

    constructor() {
        super();

        this.state = initialState
    }

    handleSubmit = async event => {

        const {signUpstart} = this.props

        event.preventDefault()

        const { email, password, confirmPassword, displayName} = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match")
        }

        signUpstart({email, password, displayName})

       
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name] : value })
    }


    
    render() {

        const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />


                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    signUpstart: userCredentials => dispatch(signUpstart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Signup)
