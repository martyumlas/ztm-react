import { ReactComponent as Logo} from '../../assets/crown.svg'
import { signOutWithGoogle } from '../../firebase/firebase'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { HeaderContainer, OptionsContainer, OptionLink, LogoContainer } from './HeaderStyled'

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                    (<OptionLink as='div' onClick={signOutWithGoogle}>SIGN OUT</OptionLink>)
                    :
                    (<OptionLink to='signin'>SIGN IN</OptionLink>)
                }

                <CartIcon />
            </OptionsContainer>
                
           { hidden ? null :  <CartDropdown /> } 
            

        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header)
