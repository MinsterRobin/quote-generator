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
    
    svg {
        height: 16px;
        width: 16px;
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