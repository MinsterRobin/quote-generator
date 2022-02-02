import React from "react";
import styled, {useTheme} from "styled-components";
import Hr from "../atoms/Hr";
import {P} from "../atoms/Typography";
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    gap: 99px;
    
    @media (max-width: 768px) {
        gap: 39px;
    }
`;

const Quote = ({children}) => {
    const theme = useTheme();

    return (
        <Container>
            <Hr color={theme.secondary} width={"8px"}/>
            <P family={"primary"} weight={"500"} size={"very_large"} mobileSize={"large"}>&quot;{children}&quot;</P>
        </Container>
    );
};

Quote.propTypes = {
    children: PropTypes.string
};

export default Quote;