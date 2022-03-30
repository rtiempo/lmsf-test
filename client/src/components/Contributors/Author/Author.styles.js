import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

export const Initials = styled(Typography)`
margin-left: 5%;
margin-top: 1%;
`;

export const InitialsP = styled(Paper)`
position: relative;
width: 49.5%;
height: 40px;
background-color: #E1E1E1;
p: 2px 4px;
align-items: center;
`;

export const InputBaseStyle = styled(InputBase)`
position: relative;
width: 157%;
height: 107%;
left: 23.5%;
top: -30px;
padding: 1%;
background: #F7F7F7;
box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

export const LastNameP = styled(Paper)`
position: relative;
width: 89.2%;
height: 40px;
top: 1px;
background-color: #E1E1E1;
p: 2px 4px;
align-items: center;
`;

export const InputBaseStyle3 = styled(InputBase)`
position: relative;
width: 87%;
height: 107%;
left: 13.2%;
top: -32px;
padding: 1%;
background: #F7F7F7;
box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
`

export const LastName = styled(Typography)`
margin-left: 20px;
margin-top: 5px;
`;
export default Initials;