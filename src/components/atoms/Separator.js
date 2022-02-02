import styled from "styled-components";
import PropTypes from 'prop-types';

const Separator = styled.div`
    height: ${props => props.height ? props.height : "auto"};
    width: ${props => props.width ? props.width : "auto"};
    max-width: ${props => props.maxWidth ? props.maxWidth : "auto"};
    min-width: ${props => props.minWidth ? props.minWidth : "auto"};
`;

Separator.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    maxWidth: PropTypes.string
};

export default Separator;