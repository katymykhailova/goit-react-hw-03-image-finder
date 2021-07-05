import { LoadLoreButton } from './Button.styled';

function scrollTo() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}

function Button({ children, onClick, ...allyProps }) {
  return (
    <LoadLoreButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </LoadLoreButton>
  );
}

export default Button;
