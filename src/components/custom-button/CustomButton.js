import { CustomButtonContainer } from './CustomButonStyled'

const CustomButton = ({children, ...props}) => {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton
