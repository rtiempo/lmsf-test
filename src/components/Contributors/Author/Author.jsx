import React, { useState, useEffect } from 'react';
import { TextField, Card, InputLabel,Grid, Box, IconButton, Menu, MenuItem, FormGroup, FormControl, Input, FormControlLabel, Checkbox, Paper, InputBase, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Initials, InitialsP, InputBaseStyle, LastNameP, InputBaseStyle3, LastName } from './Author.styles';

const Author = ({ contributors, setContributors, type, id }) => {
  const [initials, setInitials] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    const temp = contributors;
    temp[index] = {
      id: id,
      type: type,
      initials: initials,
      lastName: lastName,
    };
    setContributors(temp);
  }, [type, initials, lastName, contributors, id, setContributors]);

  return (
    <>
      <FormGroup>
        <Grid p={5} container spacing={2} columns={16}>
          <Grid item xs={16}>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography>
                  Initials
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeInitials}
              />
            </Box>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography >
                  Last name
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeLastName}
              />
            </Box>
          </Grid>
        </Grid>
        {/* <InitialsP >
          <Initials>Initials</Initials>
          <InputBaseStyle
            id="filled-basic"
            label="Initials"
            variant="filled"
            onChange={handleChangeInitials}
          />
        </InitialsP>
        <LastNameP >
          <LastName>Last Name</LastName>
          <InputBaseStyle3
            id="filled-basic"
            label="Last Name"
            variant="filled"
            onChange={handleChangeLastName}
          />
        </LastNameP> */}
      </FormGroup>
    </>
  );
};

export default Author;
