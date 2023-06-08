import { ButtonContainer } from "./styles";

const Button = ({label, onClick, fontSize}) => {
  return (
    <ButtonContainer onClick={onClick} fontSize={fontSize}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
