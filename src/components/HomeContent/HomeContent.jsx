import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import {
  Typo,
  HomeContentStyles
} from './HomeContent.styles';

const Green = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'green',
  height: '283px',
  '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)':
    {
      height: '10rem',
      width: '310px'
    },
  '@media screen and (max-width: 420px)': {
    width: '358px',
  },
  '@media screen and (max-width: 375px)': {
    width: '326px',
  }
}));
const White = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'white',
  height: '283px',
  '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)':
    {
      height: '10rem',
      width: '310px'
    },
  '@media screen and (max-width: 420px)': {
    width: '358px',
  },
  '@media screen and (max-width: 375px)': {
    width: '326px',

  }
}));
export default function Variants() {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <HomeContentStyles
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        
      >
        <Grid item xs={6}>
          <Green />
        </Grid>
        <Grid item xs={6}>
          <White />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '35px' }}>
          <Typo>Newly Added</Typo>
        </Grid>
      </HomeContentStyles>
    </Box>
  );
}
