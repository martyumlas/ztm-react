import Signin from '../../components/sign-in/Signin'
import Signup from '../../components/signup/Signup'
import './Auth.scss'

const Auth = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <Signin/>
           <Signup/>
        </div>
    )
}

export default Auth
