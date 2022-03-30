import styled from 'styled-components';
import { Toolbar, Typography, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const USCLogo = styled.img`
  width: 30%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    width: 50%;
  }
`;
export const Header = styled(Toolbar)`
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const MenuBar = styled(MenuIcon)`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 35px;
  }
`;
export const ProfileTypo = styled(Typography)`
  position: static;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;                                                     
  display: flex;
  letter-spacing: 1.5px;
  color: #7e7e7e;                                                          
`;
export const DataTypo = styled(Typography)`
  position: static;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;                             
  line-height: 22px;                                              
  display: flex;
  letter-spacing: 0.25px;        
  color: #3b3b3b;
`;        
export const MyProfile = styled(Typography)`
font-family: Oxygen;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
display: flex;
letter-spacing: 0.15px;
color: #0E5814
`;                                                                                                                            
export const Bachelor = styled(Typography)`
mt: 3;
position: static;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
display: flex;
letter-spacing: 0.15px;
color: #000000
`

export const SchoolOf = styled(Typography)`
mt: 3;
position: static;
font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 16px;
display: flex;
letter-spacing: 0.15px;
color: #000000`

export const DepartmentOf = styled(Typography)`
mt: 3,
position: static;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
display: flex;
letter-spacing: 0.4px;
color: #000000
`
export const Verified = styled(Typography)`
color: #3F9142;
fon-family: Lato;
font-size: 13px;
font-style: normal;
font-height: normal;
line-height: 22px;
letter-spacing: 0.25px
`
export const Password = styled(Typography)`
font-family: Oxygen;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
display: flex;
letter-spacing: 0.15px;
color: #0E5814
`
export default DataTypo;