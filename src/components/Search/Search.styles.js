import styled from 'styled-components';
import { Toolbar } from '@mui/material';

export const Header = styled(Toolbar)`
  width: 85%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    width: 85%;
  }
`;

export const Leader = styled(Toolbar)`
  //   @media screen and (max-width: 768px) {
  //     width: 70%;
  //   }
`;
