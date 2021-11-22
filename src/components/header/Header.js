import './Header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { signOutWithGoogle } from '../../firebase/firebase'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'

const Header = ({currentUser, hidden}) => {
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
                {
                    currentUser ? 
                    (<div className='option' onClick={signOutWithGoogle}>SIGN OUT</div>)
                    :
                    (<Link className='option' to='signin'>SIGN IN</Link>)
                }

                <CartIcon />
            </div>
                
           { hidden ? null :  <CartDropdown /> } 
            

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header)
