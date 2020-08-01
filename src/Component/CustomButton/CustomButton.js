import React from 'react';
import { CustomButtonContainer } from './CustomButtons.styles';

// import './CustomButton.scss';

const CustomButton = ({ children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;