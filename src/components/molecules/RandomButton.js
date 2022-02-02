import React from "react";
import {P} from "../atoms/Typography";
import Separator from "../atoms/Separator";
import {ReactComponent as Renew} from "../../assets/arrow_autorenew.svg";
import {useTheme} from "styled-components";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    align-self: flex-end;
    transition:  0.6s ease-out;
    
    svg {
        transition:  0.6s ease-out; 
        height: 16px;
        width: 16px;
    }
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        transition: .005s ease-in;
        transform: scale(0.99);
    }
    
    
    &:hover svg {
        transform: rotateZ(-720deg);
    }
    
    &:active svg {
        transition: .005s ease-in-out;
        transform: rotateZ(360deg);
    }
`;

const RandomButton = ({onClick}) => {
    const theme = useTheme();

    return(
        <Layout onClick={onClick}>
            <P size={"medium"} weight={"500"} family={"primary"}>random</P>
            <Separator width={"11px"}/>
            <Renew fill={theme.primary}/>
        </Layout>
    );
};

RandomButton.propTypes = {
    onClick: PropTypes.func
};

export default RandomButton;