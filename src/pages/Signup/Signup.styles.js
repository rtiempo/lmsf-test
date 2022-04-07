import styled from 'styled-components';
import { Button, TextField } from '../../components';

export const BackgroundImg = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledButton = styled(Button)`
  height: 56px;
  width: 368px;

  @media screen and (max-width: 768px) {
    width: 312px;
  }
`;

export const SignupTextField = styled(TextField)`
  width: 368px;

  @media screen and (max-width: 768px) {
    width: 312px;
  }
`;
