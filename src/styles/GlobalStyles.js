import {createGlobalStyle} from "styled-components";
import PropTypes from 'prop-types';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    html {
        font-size: 62.5%;        
        --padding-size: 40px;
        font-family: ${props => props.theme.font.family.primary};
        
        background-color: ${props => props.theme.background};
        
        @media (max-width: 768px) {
            --padding-size: 20px;
        }
    }
`;

GlobalStyles.propTypes = {
    theme: PropTypes.object.isRequired
};
export default GlobalStyles;