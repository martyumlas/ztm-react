import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            {cartItems.map(item => (
                
                <div className="cart-items" key={item.id}>{item.name}{item.quantity}</div>
            ))}
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems : state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown)
