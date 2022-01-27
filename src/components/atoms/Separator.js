import styled from "styled-components";
import PropTypes from 'prop-types';

const Separator = styled.div`
    height: ${props => props.height ? props.height : "auto"};
    width: ${props => props.width ? props.width : "auto"};
`;

Separator.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string
};

export default Separator;