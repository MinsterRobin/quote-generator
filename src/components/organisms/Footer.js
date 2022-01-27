import styled from "styled-components";
import React from "react";

const FooterLayout = styled.footer`
    height: 2rem;
    
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    p {
        color: var(--color-text-gray-4);
        font-family: var(--font-family-primary);
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    }
`;

const Footer = () => {
    return(
        <FooterLayout>
            <p>created by <b><a href={"https://robin-minster.fr"}>Minster Robin</a></b> - devChallenges.io</p>
        </FooterLayout>
    );
};

export default Footer;
