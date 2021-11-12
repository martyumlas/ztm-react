import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, ...rest}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...rest}>
            {children}
        </button>
    )
}

export default CustomButton
