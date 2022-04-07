// import styled from 'styled-components';
// <<<<<<< HEAD
// import { Typography, Box, Grid, FormControl, Stack } from '@mui/material';
// =======
// import { Typography, Box, Divider } from '@mui/material';
// >>>>>>> 631b13a9872103ba4af002a558b9d1df4a1bb694

// export const Styledtext = styled(Typography)`
//   font-family: Raleway;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 48px;
//   line-height: 56px;
//   /* identical to box height, or 117% */

//   display: flex;
//   align-items: center;

//   color: #000000;
//   padding-left: 10%;
//   backgroundcolor: green;

//   @media only screen and (min-device-width: 321px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
//     font-size: 35px;
//     font-weight: 600;
//     text-align-center;
//     margin-left: 40px;
//   }

//   @media only screen and (width: 320px) {
//     font-size: 35px;
//     font-weight: 600;
//     text-align-center;
//     margin-left: 30px;
//   }

//   @media only screen and (width: 768px) {
//     font-size: 40px;
//     font-weight: 600;
//     text-align-center;
//     margin-left: 180px;
//   }

//   @media only screen and (width: 540px) {
//     font-size: 40px;
//     font-weight: 600;
//     text-align-center;
//     margin-left: 100px;
//   }

//   @media only screen and (width: 280px) {
//     font-size: 25px;
//     font-weight: 600;
//     text-align-center;
//     margin-left: 45px;
//   }


// `;

// export const Records = styled(Typography)`
// font-family: 'Lato',
// font-style: 'normal',
// font-weight: '500',
// font-size: '14px',
// line-height: '24px',
// display: 'flex',
// align-items: 'center',
// letter-spacing: '0.1px',
// color: '#7E7E7E'
// `;

// export const Title = styled(Typography)`
// font-family:  Oxygen;
// font-style: normal;
// font-weight: normal;
// font-wize: 20px;
// line-height: 50px;
// display: flex;
// align-items: center;
// letter-spacing: 0.15px;
// color: #222222
// `;

// export const Author = styled(Typography)`
// font-family: Lato;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 24px;
// display: flex;
// align-items: center;
// letter-spacing: 0.5px;
// color: '#7E7E7E'
// `;

// export const LocationAndDate = styled(Typography)`
// font-family: Lato;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 60px;
// display: flex;
// align-items: center;
// letter-spacing: 0.5px;
// color: #3F9142
// `;

// export const Title2 = styled(Typography)`
// font-family:  Oxygen;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 50px;
// display: flex;
// align-items: center;
// letter-spacing: 0.15px;
// color: #222222
// `;

// export const Author2 = styled(Typography)`
// font-family: Lato;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 24px;
// display: flex;
// align-items: center;
// letter-spacing: 0.5px;
// color: #7E7E7E
// `;

// export const LocationAndDate2 = styled(Typography)`
// font-family: Lato;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 60px;
// display: flex;
// align-items: center;
// letter-spacing: 0.5px;
// color: '#3F9142'
// `;

// export const Title4 = styled(Typography)`
// font-family:  Oxygen;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 50px;
// display: flex;
// align-items: center;
// letter-spacing: 0.15px;
// color: #222222
// `;

// export const Author4 = styled(Typography)`
// font-family: Lato;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 24px;
// display: flex;
// align-items: center;
// letter-spacing: 0.5px;
// color: #7E7E7E
// `;

// export const LocationAndDate4 = styled(Typography)`
// font-family: Lato;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 60px;
// display: flex;
// align-items: center;
// letter-spacing: 0.5px;
// color: #3F9142`

// export const DividerStyle = styled(Divider)`
// border: 1px solid #B1B1B1;
// transform: rotate(-0.2deg);
// width: 90%
// `;

// export const BoxStyle = styled(Box)`
// padding-left: 10%;
// margin-top: 20px
// `
// export const BoxStyle2 = styled(Box)`
// display: flex;
// border: 2px solid  #ccffcc;
// border-radius: 10px;
// background-color: #E3F9E5;
// width: 265px
// `

// export const BoxStyle3 = styled(Box)`
// min-width: 120;
// padding-right: 10px;
// `;

// export const BoxStyle4 = styled(Box)`
// padding-bottom: 25px;
// margin-left: 20px
// `;

// export const BoxStyle5 = styled(Box)`
// padding-bottom: 25px;
// margin-left: 20px
// `;
//  export const BoxStyle6 = styled(Box)`
//  padding-bottom: 25px;
//  margin-left: 20px
//  `
// export default Records;

import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

export const Styledtext = styled(Typography)`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  /* identical to box height, or 117% */

  display: flex;
  align-items: center;

  color: #000000;
  padding-left: 10%;
  backgroundcolor: green;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 35px;
    font-weight: 600;
    text-align-center;
  }


`;
export const StyledBox = styled(Box)``;


