import { clearItemFromCart } from '../../redux/cart/cart.actions'
import './CheckoutItem.scss'
import { connect } from 'react-redux'

const CheckoutItem = ({cartItem, clearItemFromCart}) => {

    const {name, imageUrl, price, quantity} = cartItem
    
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item =>  dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
