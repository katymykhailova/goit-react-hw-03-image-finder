import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ children, onClick, ...allyProps }) {
  return (
    <LoadMoreButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </LoadMoreButton>
  );
}

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
