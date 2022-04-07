import * as React from 'react';
import { Box, Grid } from '@mui/material/';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Header } from './Search.styles';

export default function CustomizedInputBase() {
  return (
    <Grid container maxwidth="100%">
      <Box sx={{ flexGrow: 1 }}>
        <Header
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Box sx={{ flexGrow: 1 }} />
          <Box
            component="form"
            sx={{
              display: 'flex',
              border: '2px solid  #ccffcc',
              borderRadius: '10px',
              backgroundColor: '#E3F9E5',
              width: '80%'
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Library Resources"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon sx={{ color: '#0E5814' }} />
            </IconButton>
          </Box>
        </Header>
      </Box>
    </Grid>
  );
}
