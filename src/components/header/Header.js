import './Header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import CustomButton from '../custom-button/CustomButton'
import { signOutWithGoogle } from '../../firebase/firebase'

const Header = () => {
    return (
        <div className='header'>
           <Link to='/'>
               <Logo/>
           </Link>
           <div className="options">
               <Link className='option' to='shop'>
                   SHOP
               </Link>
               <Link className='option' to='contact'>
                   CONTACT
               </Link>
               <Link className='option' to='signin'>
                   SIGN IN
               </Link>
               <CustomButton onClick={signOutWithGoogle}>LOGOUT</CustomButton>
           </div>
        </div>
    )
}

export default Header
