import React from "react";
import styled, {useTheme} from "styled-components";
import Hr from "../atoms/Hr";
import {P} from "../atoms/Typography";
import Separator from "../atoms/Separator";
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
`;

const Quote = ({children}) => {
    const theme = useTheme();

    return (
        <Container>
            <Hr color={theme.secondary} width={"8px"}/>
            <Separator width={"99px"}/>
            <P family={"primary"} weight={"500"} size={"very_large"}>{children}</P>
        </Container>
    );
};

Quote.propTypes = {
    children: PropTypes.string
};

export default Quote;