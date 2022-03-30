import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export const Typo = styled(Typography)`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 36px;
  color: #0e5814;
  display: flex;
  align-items: center;
  margin-top: -30px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size: 20px;
  }
`;

export const DividerResponsive = styled(Divider)`
  width: 60rem;
  display: flex;
  border: 1px solid #cfcfcf;
  @media screen and (max-width: 768px) {
    width: 300rem;
  }
`;
export const HomeContentStyles = styled(Grid)`
padding: 25px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    display: block;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
