import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 18px 13px;
  border: 0;
  background-color: #198bcd;
  color: white;
  font-size: ${props => props.fontSize || '20px'};
  font-weight: 600;
  margin: 2px;
  flex: 1;
  border-radius: 5px;
  

  &:hover{
    opacity: 0.7;
  }
`