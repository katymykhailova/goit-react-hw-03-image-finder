import { LoadLoreButton } from './Button.styled';

function Button({ children, onClick, ...allyProps }) {
  return (
    <LoadLoreButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </LoadLoreButton>
  );
}

export default Button;
