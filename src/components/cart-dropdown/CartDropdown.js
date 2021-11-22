import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { useNavigate } from 'react-router'

const CartDropdown = ({cartItems}) => {

    const navigate = useNavigate()

    return (
        <div className="cart-dropdown">             
            <div className="cart-items">
                {
                    cartItems.length ?

                    (cartItems.map(cartItem => (                        
                        <CartItem key={cartItem.id} item={cartItem}/>   
                    ))

                   ) : (
                    <span className='empty-message'>Your cart is empty</span>
                   )

                  
                } 
            </div>
            <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
