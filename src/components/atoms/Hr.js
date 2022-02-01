import styled from 'styled-components';
import PropTypes from 'prop-types';

const Hr = styled.hr`
    height: ${props => props.height ? props.height : "auto"};
    width: ${props => props.width ? props.width : "auto"};
    min-width: ${props => props.width ? props.width : "auto"};
    background-color: ${props => props.color};
    border: none;
`;

Hr.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string.isRequired
};

export default Hr;