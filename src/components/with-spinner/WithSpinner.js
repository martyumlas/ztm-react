import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyled"

const WithSpinner = WrappedComponent => ({ isLoading , ...rest}) => {

   
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent  {...rest}/>
    )
}

export default WithSpinner
