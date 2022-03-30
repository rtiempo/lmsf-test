import styled from "styled-components";
import Paper from "@mui/material/Paper";
import InputBase from '@mui/material/InputBase';
import { Typography } from "@mui/material";

export const OrganizationP = styled(Paper)`
position: absolute;
width: 49.3%;
height: 40px;
background-color: #E1E1E1;
p: 2px 4px;
align-items: center;
`;

export const InputBaseStyle = styled(InputBase)`
position: absolute;            
width: 147%;
height: 102%;
left: 27%;
top: 0px;
padding: 1%;
background: #F7F7F7;
box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
`

export const Organization2 = styled(Typography)`
margin-left: 5%;
margin-top: 1%;
`
export default OrganizationP;