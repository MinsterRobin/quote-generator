import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

const H1 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-very-large);
    color: ${props => props.theme.text};
`;

const H2 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-large);
    color: ${props => props.theme.text};    
`;

const H4 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-regular);
    color: ${props => props.theme.text};    
`;

const P = styled.p`
    font-family: ${props => props.theme.font.family[props.family]}, "sans-serif";
    font-size: ${props => props.theme.font[props.size]};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
    
    ${props => props.noWrapEllipsis && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        &:hover:before {
            content: attr(${props => props.data});
            position: absolute;
            bottom: -40px;
            font-size: 50px;
            background-color: red;
            color: #fff;
        }
    `};
    
    @media (max-width: 768px) {
        font-size: ${props => props.theme.font[props.mobileSize]};
    }
`;

P.propTypes = {
    size: PropTypes.oneOf(['tiny','very_small','small','regular','medium','large','very_large']).isRequired,
    mobileSize: PropTypes.oneOf(['tiny','very_small','small','regular','medium','large','very_large']),
    weight: PropTypes.oneOf(['400','500','600','700','800']).isRequired,
    family: PropTypes.oneOf(["primary", "secondary"]).isRequired,
    color: PropTypes.string,
    data: PropTypes.string,
    noWrapEllipsis: PropTypes.bool
};

export {H1, H2, H4, P};