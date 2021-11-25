import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyled"

const WithSpinner = WrappedComponent => ({ isLoading }) => {

   
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent  isLoading/>
    )
}

export default WithSpinner
